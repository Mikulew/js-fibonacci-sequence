const container = document.querySelector('.container');
const NUMBER_HEIGHT = 40;
const collectionNumbersOnScreen = Math.round(window.innerHeight / NUMBER_HEIGHT);

let n1 = 0;
let n2 = 1;
let i = n1 + n2;
let counter = 0;

function generateNumber(number) {
  const element = document.createElement('div');
  element.innerText = number;
  element.classList.add('number');
  counter++;
  container.append(element);
}

function removeNumber() {
  const element = document.querySelector('.number:first-child');
  element.remove();
}

const timer = setInterval(() => {
  generateNumber(i);
  n1 = n2;
  n2 = i;
  i = n1 + n2;
  if (i > Number.MAX_SAFE_INTEGER) {
    // i = Number(i).toLocaleString('fullwide', {
    //   useGrouping: false
    // });
    // console.log('max safe integer has been reached!');
    n1 = 0;
    n2 = 1;
    i = n1 + n2;
  }
  // if (i > Number.MAX_VALUE) {
  // }
  if (counter > collectionNumbersOnScreen) {
    removeNumber();
  }
}, 250);

generateNumber(1);