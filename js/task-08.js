const form = document.querySelector('.login-form');
const inputEmail = document.querySelector('input[type = "email"]');
const inputPassword = document.querySelector('input[type = "password"]');

const verification = (e) => {
    e.preventDefault();

    if (inputEmail.value === '' || inputPassword.value === '') {
        alert('Uzupełnij wszystkie pola'); 
    } else{
        const { elements: { email, password } } = form;
        console.log({
            email: inputEmail.value,
            password: inputPassword.value
        })
       
    }
    form.reset(); 
    
}
form.addEventListener('submit',verification)
