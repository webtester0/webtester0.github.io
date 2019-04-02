let filed = document.createElement('div');
document.body.appendChild(filed);
filed.classList.add('filed');

for (let i = 0; i < 100; i++) {
  let excel = document.createElement('div');
  excel.classList.add('excel');
  filed.appendChild(excel);
}

let excel = document.getElementsByClassName('excel');

let x = 1,
    y = 10;

for (let i = 0; i < excel.lenght; i++) {
  if(x > 10) {
    x = 1;
    y--;
  }
  excel[i].setAttribute('posX', x);
  excel[i].setAttribute('posY', y);
  x++;
}
