const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const handler = () => {
  
    output.textContent= `Witaj ${input.value}`
}

input.addEventListener('input', handler);