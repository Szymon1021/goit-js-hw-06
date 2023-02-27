function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const amountInput = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');
let width = 30;
let height = 30;

const createBoxes = () => {
  let amount = amountInput.value;
  if (amount === '') {
    amount = 0;
  }
  for (let i = 1; i <= amount; i++){
    width += 10;
    height += 10;
    const markup = `<div style = " width:${width + 'px'};
    height:${height +'px'};
    background-color :${getRandomHexColor()};
    border:2px solid black";><div>`;
    divBoxes.innerHTML += markup;
  }
}
const destroyBoxes = () => {
  const destroyer = '';
  divBoxes.innerHTML = destroyer;
}
btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click',destroyBoxes)