//Elements
const list = document.getElementById('list');
const date = document.getElementById('date');
const input = document.getElementById('input');
const refresh = document.getElementById('refresh');
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";
const DRAG = "draggable";
const ul = document.getElementsByTagName('ul');
const ulDo = document.getElementsByClassName('droppable-do')[0];
const ulProgress = document.getElementsByClassName('droppable-progress')[0];
const ulDone = document.getElementsByClassName('droppable-done')[0];

let countNeedToDo = document.getElementsByClassName('count-need-to-do')[0];
let countInProgress = document.getElementsByClassName('count-in-progress')[0];
let countDone = document.getElementsByClassName('count-done')[0];


const options = {weekday : "long", month:"short", day:"numeric"};
let currentDate = new Date();

date.innerHTML = currentDate.toLocaleDateString("en-US",options);

let LIST = [], id = 0;

let data = localStorage.getItem('TODO');

if (data) {
  LIST = JSON.parse(data);
  id = LIST.length;

  for (let i=0; i < LIST.length; i++) {

    if(!LIST[i].dropId) {
      addToDo(LIST[i].value, LIST[i].id, LIST[i].done, LIST[i].trash);
    } else {
      let ul = document.getElementsByClassName(LIST[i].dropId)[0];
      addToDo(LIST[i].value, LIST[i].id, LIST[i].done, LIST[i].trash, ul);
    }

  }
} else {
  LIST = [];
  id = 0;
}

//refresh

refresh.addEventListener('click', function() {
  localStorage.clear();
  location.reload();
});

//function addToDo special for input

function addToDo(toDo, id, done, trash, ul) {
  let DROPCLASS;
  ul = ul || list;
  
  if ( ul.classList[1] == 'droppable-do' ) {
    DROPCLASS = 'in-drop-do';
  } else if (ul.classList[1] == 'droppable-progress') {
    DROPCLASS = 'in-drop-progress';
  } else if (ul.classList[1] == 'droppable-done') {
    DROPCLASS = 'in-drop-done';
  }

  if(trash) {
    return;
  }
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";
  const position = "beforeend";
  const text = `
        <li class="item ${DRAG} ${DROPCLASS}">
        <i class="fa ${DONE} co" aria-hidden="true" job="complete" id=${id}></i>
        <p class="text ${LINE} onselectstart="return false" onmousedown="return false">${toDo}</p>
        <i class="fa fa-trash-o de" aria-hidden="true" job="delete" id=${id}></i>
        </li>
  `;

  
  ul.insertAdjacentHTML(position, text);
  
  countNeedToDo.innerHTML = 'need-to-do: ' + ulDo.children.length;
  countInProgress.innerHTML = 'in-progress: '+ ulProgress.children.length;
  countDone.innerHTML = 'done: ' + ulDone.children.length;

}

//add to-do with input and enter key

input.addEventListener('keyup', function(e){
  if(e.keyCode == 13) {
    const toDo = input.value;

    if(toDo) {
      addToDo(toDo,id,false,false);
      
      LIST.push({
        value: toDo,
        id: id,
        done: false,
        trash: false,
      });
      localStorage.setItem('TODO', JSON.stringify(LIST));

      id++;
    }
    
    input.value = "";
  }
});


function completeToDo(elem) {
  elem.classList.toggle(CHECK);
  elem.classList.toggle(UNCHECK);
  elem.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);

  LIST[elem.id].done = LIST[elem.id].done ? false : true;

}

function deleteToDo(elem) {
  elem.parentNode.remove();

  LIST[elem.id].trash = true;

}

list.addEventListener('click', function(e) {
  const target = e.target;

  if(!target.attributes.job) {
    return;
  }

  if(target.attributes.job.value == 'complete') {
    completeToDo(target);
  } else if (target.attributes.job.value == 'delete') {
    deleteToDo(target);
  }

  localStorage.setItem('TODO', JSON.stringify(LIST));
});


/**
 * DragManager - объект, который хранит информацию о переносе 
 */
let DragManager = new function() {

  let dragObject = {};

  let self = this;

  function onMouseDown(e) {
    if( e.which != 1 )  {
      return;
    }
  
    let target = e.target;
    let elem = target.closest('.draggable');
  
    if(!elem) return;
  
    dragObject.elem = elem;
    dragObject.downX = e.pageX;
    dragObject.downY = e.pageY;

    //сохраним класс родителя elem в dragObject
    let elemParentClassName = elem.parentNode.classList[1];

    dragObject.elemParentClassName = elemParentClassName;
    
    return false;
  }

  function onMouseMove(e) {
    if( !dragObject.elem ) {
      return;
    }
  
    let moveX = e.pageX - dragObject.downX;
    let moveY = e.pageY - dragObject.downY;
  
    if( moveX < 3 && moveY < 3 ) {
      return;
    }
  
    //При первом движении мыши больше, чем на 3px создается avatar
    if( !dragObject.avatar ) {
  
      dragObject.avatar = createAvatar(e)[0];
      dragObject.parentClassName = createAvatar(e)[1];
      if( !dragObject.avatar) {
        dragObject = {};
        return;
      }
  
      dragObject.shiftX = dragObject.downX - getCoords(dragObject.elem).left;
      dragObject.shiftY = dragObject.downY - getCoords(dragObject.elem).top;

      dragObject.avatar.style.position = 'absolute';
      dragObject.avatar.style.zIndex = 9999;
  
      document.body.appendChild(dragObject.avatar);
    }

    self.onDragMove(dragObject.avatar);
    
    //Перенос при каждом движении мыши
    dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
    dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';
  
    return false;
  }

  function onMouseUp(e) {
    if( dragObject.avatar) {
      finishDrag(e);
    }
  
    dragObject = {};
  
    return false;
  }

  function finishDrag(e) {
    let droppable = findDrop(e).drop;
    let className = findDrop(e).class;
    //Для onDragCancel
    let parentClassName = dragObject.parentClassName;
  
    if(droppable) {
      self.onDragEnd(dragObject.avatar, droppable, className);
    } else {
      self.onDragCancel(dragObject.avatar, parentClassName);
    }
  }

  function findDrop(e) {
    dragObject.avatar.hidden = true;
  
    let elem = document.elementFromPoint(e.clientX, e.clientY);
  
    dragObject.avatar.hidden = false;
  
    if (elem == null) {
      return null;
    } 
    

    //Определяет цвет для onDragEnd
    if(elem.closest('.droppable') == null) {
      return {
        drop: null,
      } ;
    } else {
      let drop = elem.closest('.droppable');
      if(drop.classList.contains('droppable-do')) {
        return {
          drop: drop,
          class: 'droppable-do'
        };
      } else if (drop.classList.contains('droppable-progress')) {
        return {
          drop: drop,
          class: 'droppable-progress'
        };
      } else if(drop.classList.contains('droppable-done')) {
        return {
          drop: drop,
          class: 'droppable-done'
        };
      }
    }
  }

  function createAvatar(e) {
    let avatar = dragObject.elem;
    let avatarParentClassName = dragObject.elemParentClassName;
    let  elemCoords = getCoords(dragObject.elem);
    
    let old = {
      left: 0,
      top: 0,
      parent: avatar.parentNode, 
      nextSibling: avatar.nextSibling,
      position: avatar.position || '',
      zIndex: avatar.zIndex || ''
    };
  
    avatar.rollback = function() {
      avatar.style.transition = 'all 1s ease';

      setTimeout(function() {
        avatar.style.left = elemCoords.left + 'px';
        avatar.style.top = elemCoords.top + 'px';
      },50);

      setTimeout(function() {
        avatar.style.transition = '';
        old.parent.insertBefore(avatar, old.nextSibling);
        avatar.style.left = old.left + 'px';
        avatar.style.top = old.top + 'px';
        avatar.style.position = old.position;
        avatar.style.zIndex = old.zIndex;
      },500);

    };
    
    return [avatar, avatarParentClassName];
  }

  document.onmousedown = onMouseDown;
  document.onmousemove = onMouseMove;
  document.onmouseup = onMouseUp;

  this.onDragEnd = function(dragObj, dropElem, className) {

    dropElem.appendChild(dragObj);
    dragObj.style.left = '';
    dragObj.style.top = '';
    dragObj.style.position = 'relative';
    dragObj.style.zIndex = '';

    //Стили для успешного переноса в drop
    if(className == 'droppable-do') {
      dragObj.style.backgroundColor = '#FA9D4A';
      dragObj.style.borderRadius = '10px';
    } else if (className == 'droppable-progress') {
      dragObj.style.backgroundColor = '#FCEE21';
      dragObj.style.borderRadius = '10px';  
    } else if (className == 'droppable-done') {
      dragObj.style.backgroundColor = '#16F148';
      dragObj.style.borderRadius = '10px';
    }

    for (let i=0; i < ul.length; i++) {
      let arrLi = ul[i].children;

      for (let j=0; j < arrLi.length; j++) {

        for (let k=0; k < LIST.length; k++) {

          if(arrLi[j].innerText == LIST[k].value) {
            LIST[k].dropId = ul[i].classList[1];
          }
        }
      }
    }
    
    localStorage.setItem('TODO', JSON.stringify(LIST));

    countNeedToDo.innerHTML = 'need-to-do: ' + ulDo.children.length;
    countInProgress.innerHTML = 'in-progress: '+ ulProgress.children.length;
    countDone.innerHTML = 'done: ' + ulDone.children.length;
  };

  this.onDragCancel = function(dragObj, parentClassName) {
    //Для rollback берем класс у родителя и возвращаем его стили
    if(parentClassName == 'droppable-do') {
      dragObj.style.backgroundColor = '#FA9D4A';
      dragObj.style.borderRadius = '10px';
    } else if (parentClassName == 'droppable-progress') {
      dragObj.style.backgroundColor = '#FCEE21';
      dragObj.style.borderRadius = '10px';  
    } else if (parentClassName == 'droppable-done') {
      dragObj.style.backgroundColor = '#16F148';
      dragObj.style.borderRadius = '10px';
    }
    dragObj.rollback();
  };

  this.onDragMove = function(dragObj) {

    dragObj.style.backgroundColor = '#C9DFDE';
    dragObj.style.borderRadius = '10px';

    dragObj.classList.remove('in-drop-do');
  };
};

function getCoords(elem) {
  let coords = elem.getBoundingClientRect();

  return {
    top: coords.top + pageYOffset,
    left: coords.left + pageXOffset
  };
}

countNeedToDo.innerHTML = 'need-to-do: ' + ulDo.children.length;
countInProgress.innerHTML = 'in-progress: '+ ulProgress.children.length;
countDone.innerHTML = 'done: ' + ulDone.children.length;



