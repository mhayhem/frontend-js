// created const

const nickInput = document.getElementById('nick');
const sizeInput = document.getElementById('size');
const formElement = document.getElementById('formElement');

// events function 

function formCheck(event) {
    if (nickInput.value.length == 0) {
        console.log('No hay nick');
        event.preventDefault();
        nickInput.focus();
        return false;
    }
    if (sizeInput.value == '0') {
        console.log('No se ha seleccionado tamaño');
        event.preventDefault();
        sizeInput.focus();
        return false;
    }
    return true;
}

// started event load

formElement.addEventListener('submit', formCheck);