let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let speed = 0;

modal.addEventListener('click', function(e) {
  if(e.target.classList.contains('easy')) {
    speed = 1000;
  } else if(e.target.classList.contains('normal')) {
    speed = 500;
  } else if(e.target.classList.contains('hard')) {
    speed = 200;
  }

  if(e.target.classList.contains('button')) {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    startGame();
  }
});


function startGame() {  
let tetris = document.createElement('div');
tetris.classList.add('tetris');

for (let i = 0; i < 180; i++) {
  let excel = document.createElement('div');
  excel.classList.add('excel');
  tetris.appendChild(excel);
}

let main = document.getElementsByClassName('main')[0];
main.appendChild(tetris);

let excel = document.getElementsByClassName('excel');
let i = 0;

for (let y = 18; y > 0; y--) {
  for (let x = 1; x < 11; x++) {
    excel[i].setAttribute('posX', x);
    excel[i].setAttribute('posY', y);
    i++;
  }
}

let x = 5, y = 15 ;

let mainArr=[[[0,1],[0,2],[0,3],[[-1,1],[0,0],[1,-1],[2,-2]],[[1,-1],[0,0],[-1,1],[-2,2]],[[-1,1],[0,0],[1,-1],[2,-2]],[[1,-1],[0,0],[-1,1],[-2,2]]],[[1,0],[0,1],[1,1],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]]],[[1,0],[0,1],[0,2],[[0,0],[-1,1],[1,0],[2,-1]],[[1,-1],[1,-1],[-1,0],[-1,0]],[[-1,0],[0,-1],[2,-2],[1,-1]],[[0,-1],[0,-1],[-2,0],[-2,0]]],[[1,0],[1,1],[1,2],[[0,0],[0,0],[1,-1],[-1,-1]],[[0,-1],[-1,0],[-2,1],[1,0]],[[2,0],[0,0],[1,-1],[1,-1]],[[-2,0],[1,-1],[0,0],[-1,1]]],[[1,0],[-1,1],[0,1],[[0,-1],[-1,0],[2,-1],[1,0]],[[0,0],[1,-1],[-2,0],[-1,-1]],[[0,-1],[-1,0],[2,-1],[1,0]],[[0,0],[1,-1],[-2,0],[-1,-1]]],[[1,0],[1,1],[2,1],[[2,-1],[0,0],[1,-1],[-1,0]],[[-2,0],[0,-1],[-1,0],[1,-1]],[[2,-1],[0,0],[1,-1],[-1,0]],[[-2,0],[0,-1],[-1,0],[1,-1]]],[[1,0],[2,0],[1,1],[[1,-1],[0,0],[0,0],[0,0]],[[0,0],[-1,0],[-1,0],[1,-1]],[[1,-1],[1,-1],[1,-1],[0,0]],[[-2,0],[0,-1],[0,-1],[-1,-1]]]];

let figure = 0;
let figureBody;
let rotate = 1;

function generateFigure() {
  function randomArr() {
    return Math.round(Math.random()*(mainArr.length - 1));
  }
  rotate = 1;
  figure = randomArr();

  figureBody = [
    document.querySelector(`[posX = "${x}"][posY = "${y}"]`),
    document.querySelector(`[posX = "${x + mainArr[figure][0][0]}"][posY = "${y + mainArr[figure][0][1]}"]`),
    document.querySelector(`[posX = "${x + mainArr[figure][1][0]}"][posY = "${y + mainArr[figure][1][1]}"]`),
    document.querySelector(`[posX = "${x + mainArr[figure][2][0]}"][posY = "${y + mainArr[figure][2][1]}"]`) 
  ];

  for (let i = 0; i < figureBody.length; i++) {
    figureBody[i].classList.add('figure');
  }
}

generateFigure();

let scores = 0;
let div = document.getElementsByClassName('scores')[0];
div.innerHTML = "<strong>Ваши очки : </strong> " + scores;

function move() {
  let moveFlag = true;
  let figureCoordinates = [
    [+figureBody[0].getAttribute('posX'),+figureBody[0].getAttribute('posY')],
    [+figureBody[1].getAttribute('posX'),+figureBody[1].getAttribute('posY')],
    [+figureBody[2].getAttribute('posX'),+figureBody[2].getAttribute('posY')],
    [+figureBody[3].getAttribute('posX'),+figureBody[3].getAttribute('posY')]
  ];

  for (let i = 0; i < figureCoordinates.length; i++) {
    if(figureCoordinates[i][1] == 1 || document.querySelector(`[posX = "${figureCoordinates[i][0]}"][posY = "${figureCoordinates[i][1] - 1}"]`).classList.contains('stop')) {
      moveFlag = false;
      break;
    }
  }

  if(moveFlag) {
    for (let i = 0; i < figureBody.length; i++) {
      figureBody[i].classList.remove('figure');
    }

    figureBody = [
      document.querySelector(`[posX = "${figureCoordinates[0][0]}"][posY = "${figureCoordinates[0][1] - 1}"]`),
      document.querySelector(`[posX = "${figureCoordinates[1][0]}"][posY = "${figureCoordinates[1][1] - 1}"]`),
      document.querySelector(`[posX = "${figureCoordinates[2][0]}"][posY = "${figureCoordinates[2][1] - 1}"]`),
      document.querySelector(`[posX = "${figureCoordinates[3][0]}"][posY = "${figureCoordinates[3][1] - 1}"]`)
    ];

    for (let i = 0; i < figureBody.length; i++) {
      figureBody[i].classList.add('figure');
    }
  } else {
    for (let i = 0; i < figureBody.length; i++) {
      figureBody[i].classList.remove('figure');
      figureBody[i].classList.add('stop');
    }
    
    for (let i = 1; i < 15; i++) {
      let count = 0;
      for (let j = 1; j < 11; j++) {
        if (document.querySelector(`[posX = "${j}"][posY = "${i}"]`).classList.contains('stop')) {
          count++;
          if (count == 10) {
            scores += count;
            div.innerHTML = "<strong>Ваши очки : </strong> " + scores;

            for (let l = 1; l < 11; l++) {
              document.querySelector(`[posX = "${l}"][posY = "${i}"]`).classList.remove('stop');
            }
            let stop = document.querySelectorAll('.stop');
            let newStop = [];
            for (let s = 0; s < stop.length; s++) {
              let stopCoordinates = [+stop[s].getAttribute('posX'), +stop[s].getAttribute('posY')];

              if(stopCoordinates[1] > i) {
                stop[s].classList.remove('stop');
                newStop.push(document.querySelector(`[posX = "${stopCoordinates[0]}"][posY = "${stopCoordinates[1] - 1}"]`));
              }
            }
          
            for (let k = 0; k < newStop.length; k++){
              newStop[k].classList.add('stop');
            }
            i--;
          }
        }
      }
    }
    for (let u = 1; u < 11; u++) {
      if(document.querySelector(`[posX = "${u}"][posY = "15"]`).classList.contains('stop')) {
        clearInterval(interval);
        alert('GAME OVER!' + ' ваши очки: ' + scores);
        break;
      }
    }

    generateFigure();
  }
}

let interval = setInterval(function() {
  move();
}, speed);

let flag = true;

window.addEventListener('keydown', function(e) {
  
  let coordinates1 = [+figureBody[0].getAttribute('posX'),+figureBody[0].getAttribute('posY')];
  let coordinates2 = [+figureBody[1].getAttribute('posX'),+figureBody[1].getAttribute('posY')];
  let coordinates3 = [+figureBody[2].getAttribute('posX'),+figureBody[2].getAttribute('posY')];
  let coordinates4 = [+figureBody[3].getAttribute('posX'),+figureBody[3].getAttribute('posY')];

  function generateNewState(a) {
    flag = true;

    let newFigure = [
      document.querySelector(`[posX = "${coordinates1[0] + a}"][posY = "${coordinates1[1]}"]`),
      document.querySelector(`[posX = "${coordinates2[0] + a}"][posY = "${coordinates2[1]}"]`),
      document.querySelector(`[posX = "${coordinates3[0] + a}"][posY = "${coordinates3[1]}"]`),
      document.querySelector(`[posX = "${coordinates4[0] + a}"][posY = "${coordinates4[1]}"]`)
    ];

    for (let i = 0; i < newFigure.length; i++) {
      if(!newFigure[i] || newFigure[i].classList.contains('stop')) {
        flag = false;
      }
    }

    if(flag) {
      for (let i = 0; i < figureBody.length; i++) {
        figureBody[i].classList.remove('figure');
      }

      figureBody = newFigure;

      for (let i = 0; i < figureBody.length; i++) {
        figureBody[i].classList.add('figure');
      }
    }
  }

  if (e.keyCode == 37) {
    generateNewState(-1);
  } else if (e.keyCode == 39) {
    generateNewState(1);
  } else if(e.keyCode == 40) {
    move();
  } else if(e.keyCode == 38) {
    flag = true;

    let newFigure = [
      document.querySelector(`[posX = "${+coordinates1[0] + mainArr[figure][rotate+2][0][0]}"][posY = "${+coordinates1[1] + mainArr[figure][rotate+2][0][1]}"]`),
      document.querySelector(`[posX = "${+coordinates2[0] + mainArr[figure][rotate+2][1][0]}"][posY = "${+coordinates2[1] + mainArr[figure][rotate+2][1][1]}"]`),
      document.querySelector(`[posX = "${+coordinates3[0] + mainArr[figure][rotate+2][2][0]}"][posY = "${+coordinates3[1] + mainArr[figure][rotate+2][2][1]}"]`),
      document.querySelector(`[posX = "${+coordinates4[0] + mainArr[figure][rotate+2][3][0]}"][posY = "${+coordinates4[1] + mainArr[figure][rotate+2][3][1]}"]`)
    ];

    for (let i = 0; i < newFigure.length; i++) {
      if(!newFigure[i] || newFigure[i].classList.contains('stop')) {
        flag = false;
      }
    }

    if(flag) {
      for (let i = 0; i < figureBody.length; i++) {
        figureBody[i].classList.remove('figure');
      }

      figureBody = newFigure;

      for (let i = 0; i < figureBody.length; i++) {
        figureBody[i].classList.add('figure');
      }
      if (rotate < 4) {
        rotate++
      } else {
        rotate = 1;
      }
    }
  }
});

}