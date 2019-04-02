let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i = 0; i < 100; i++) {
  let excel = document.createElement('div');
  excel.classList.add('excel');
  field.appendChild(excel);
}


let excel = document.getElementsByClassName('excel');
let x = 1;
let y = 10;

for (let i = 0; i < excel.length; i++) {
  if(x > 10) {
    x = 1;
    y --;
  }
  excel[i].setAttribute('posX', x);
  excel[i].setAttribute('posY', y);
  x++;
}

function generateSnake() {
  let posX = Math.round(Math.random() * (10-3) + 3);
  let posY = Math.round(Math.random() * (10-1) + 1);

  return [posX, posY];
}

let args = generateSnake();
let snakeBody = [document.querySelector('[posX = "' + (args[0]) +'"][posY="' + args[1] +'"]'),document.querySelector('[posX = "' + (args[0]-1) +'"][posY="' + args[1] +'"]'),document.querySelector('[posX = "' + (args[0] - 2) +'"][posY="' + args[1] +'"]')];

for (let i = 0; i < snakeBody.length; i++) {
  snakeBody[i].classList.add('snakeBody');
}

snakeBody[0].classList.add('snakeHead');

let mouse;
function generateMouse() {
  let mouseCoordinates = generateSnake();
  mouse = document.querySelector('[posX = "' + (mouseCoordinates[0]) +'"][posY="' + mouseCoordinates[1] +'"]');

  while(mouse.classList.contains('snakeBody')) {
    let mouseCoordinates = generateSnake();
    mouse = document.querySelector('[posX = "' + (mouseCoordinates[0]) +'"][posY="' + mouseCoordinates[1] +'"]');
  }
  mouse.classList.add('mouseBody');
}

generateMouse();

let direction = 'right';
let step = false;
let scores = 0;

let div = document.createElement('div');
div.classList.add('scores');
document.body.appendChild(div);
div.innerHTML = "<strong>Ваши очки: </strong>" + scores;

function move() {
  let snakeHeadCoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];
  snakeBody[0].classList.remove('snakeHead');
  snakeBody[snakeBody.length-1].classList.remove('snakeBody');
  snakeBody.pop();

  if (direction == 'right') {
    if (snakeHeadCoordinates[0] < 10) {
      snakeBody.unshift(document.querySelector('[posX = "' + (+snakeHeadCoordinates[0] + 1) +'"][posY="' + +snakeHeadCoordinates[1] +'"]'));
    } else {
      snakeBody.unshift(document.querySelector('[posX = "1"][posY="' + +snakeHeadCoordinates[1] +'"]'));
    }
  } else if (direction == 'left') {
    if (snakeHeadCoordinates[0] > 1) {
      snakeBody.unshift(document.querySelector('[posX = "' + (+snakeHeadCoordinates[0] - 1) +'"][posY="' + +snakeHeadCoordinates[1] +'"]'));
    } else {
      snakeBody.unshift(document.querySelector('[posX = "10"][posY="' + +snakeHeadCoordinates[1] +'"]'));
    }
  } else if (direction == 'up') {
    if (snakeHeadCoordinates[1] < 10) {
      snakeBody.unshift(document.querySelector('[posX = "'+snakeHeadCoordinates[0] + '"][posY="' + (+snakeHeadCoordinates[1] + 1) +'"]'));
    } else {
      snakeBody.unshift(document.querySelector('[posX = "'+snakeHeadCoordinates[0] +'"][posY="1"]'));
    }
  } else if (direction == 'down') {
    if (snakeHeadCoordinates[1] > 1) {
      snakeBody.unshift(document.querySelector('[posX = "'+snakeHeadCoordinates[0] + '"][posY="' + (+snakeHeadCoordinates[1] - 1) +'"]'));
    } else {
      snakeBody.unshift(document.querySelector('[posX = "'+snakeHeadCoordinates[0] +'"][posY="10"]'));
    }
  }

  if(snakeBody[0].classList.contains('mouseBody')) {
    mouse.classList.remove('mouseBody');
    let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
    let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
    snakeBody.push(document.querySelector('[posX = "'+ (+a) +'"][posY = "'+ (+b) +'"]'));
    generateMouse();

    scores++;
    div.innerHTML = "<strong>Ваши очки: </strong>" + scores;
  }

  snakeBody[0].classList.add('snakeHead');
  if(snakeBody[0].classList.contains('snakeBody')) {
    setTimeout(function(){
      alert('Game Over');
      alert(div.textContent);
      scores = 0;
      div.innerHTML = "<strong>Ваши очки: </strong>" + scores;
    },200);
    clearInterval(interval);
  }
  
  for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody');
  }

  step = true;
}

let interval = setInterval(move, 300);

window.addEventListener('keydown', function(type) {
  if(step) {
    if(type.keyCode == 37 && direction != 'right') {
      direction = 'left';
      step = false;
      
    } else if(type.keyCode == 38 && direction != 'down') {
      direction = 'up';
      step = false;
      
    } else if(type.keyCode == 39 && direction != 'left') {
      direction = 'right';
      step = false;
      
    } else if(type.keyCode == 40 && direction != 'up') {
      direction = 'down';
      step = false;
      
    }
  }
});
