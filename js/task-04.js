let counter = document.querySelector('#value');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

const decrement = () => {
    
    counterValue -= 1;
    counter.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    counter.textContent = counterValue;
};

buttonDecrement.addEventListener('click', decrement);
buttonIncrement.addEventListener('click',increment)