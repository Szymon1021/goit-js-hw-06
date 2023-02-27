const input = document.querySelector('#validation-input');
const length = input.getAttribute('data-length');

const handler = () => {
    
    if (input.value.length > length) {
        
        input.classList.add('valid')
    } else {
       input.classList.add('invalid')
    }
    
}

input.addEventListener('blur',handler)