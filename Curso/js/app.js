// created const

const nickInput = document.getElementById('nick');
const sizeInput = document.getElementById('size');
const formElement = document.getElementById('formElement');
const error = document.getElementById('error');

// events function 

function formCheck(event) {
    if (nickInput.value.match(/(?<!\S)[0-9]/)) {
        event.preventDefault();
        error.innerText='el nombre no puede empezar con un numero';
        nickInput.focus();
        return false;
    }
    if (sizeInput.value == '0') {
        event.preventDefault();
        error.innerText='Seleccione un tamaño de juego';
        sizeInput.focus();
        return false;
    }
    return true;
}

// started event load

formElement.addEventListener('submit', formCheck);