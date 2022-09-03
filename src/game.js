const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

let canvasSize;
let elementsSize;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize(){
    if (window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementsSize = canvasSize / 10;

    startGame();
}

function startGame(){
    
    console.log({canvasSize, elementsSize});

    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';

    const map = maps[2];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    console.log({map, mapRows});

   mapRowCols.forEach((row, rowI ) => {
       row.forEach((col, colI) => {
         const emoji = emojis[col];
         const posX = elementsSize * (colI + 1);
         const posY =  elementsSize * (rowI + 1);   
         game.fillText(emoji, posX, posY);
         
       });
   });
}

window.addEventListener('keydown', moveByKeys);
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveByKeys(event){
  if (event.key == 'ArrowUp'){
      moveUp();
  } else if (event.key == 'ArrowDown'){
      moveDown();
  } else if (event.key == 'ArrowLeft'){
      moveLeft();
  } else if (event.key == 'ArrowRight'){
      moveRight();
  }
}
function moveUp(){
    console.log('me quiero mover para arriba');
}
function moveLeft(){
    console.log('me quiero mover para la izquierda');
}
function moveRight(){
    console.log('me quiero mover para la derecha');
}
function moveDown(){
    console.log('me quiero mover para abajo');
}