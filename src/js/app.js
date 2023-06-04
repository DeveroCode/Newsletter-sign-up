document.addEventListener('DOMContentLoaded', () => {
    // Variabes
    const validador = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const email = document.querySelector('#email');
    const inputError = document.querySelector('.mensaje');
    const inputMail = document.querySelector('.input');
    const btn = document.querySelector('#boton');


    // Funciones
    btn.addEventListener('click', () => {
        if (email.value === '') {
            inputError.classList.add('error');
            inputMail.classList.add('alerta');
            inputError.classList.remove('mensaje');
            inputMail.classList.remove('input');

            setTimeout(() => {
                inputError.classList.remove('error');
                inputMail.classList.remove('alerta');
                inputError.classList.add('mensaje');
                inputMail.classList.remove('input');
            }, 3000);
        } else if (!validador.test(email.value)) {
            inputError.textContent = 'Invalid email';
            inputError.classList.add('error');
            inputMail.classList.add('alerta');
            inputError.classList.remove('mensaje');
            inputMail.classList.remove('input');

            setTimeout(() => {
                inputError.textContent = '';
                inputError.classList.remove('error');
                inputMail.classList.remove('alerta');
                inputError.classList.add('mensaje');
                inputMail.classList.remove('input');
            }, 3000);
        } else {
            window.location.href = 'message.html';

        }
    });
});