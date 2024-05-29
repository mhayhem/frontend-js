// created const

const nickInput = document.getElementById('nick');
const sizeInput = document.getElementById('size');
const formElement = document.getElementById('formElement');
const error = document.getElementById('error');

// check error in game.html
/**
 * Description
 * @param {htmlEvent} sessionStorage.getItem('error')
 * @returns {any}
 */
if(sessionStorage.getItem('error') != null) {
    error.innerText=sessionStorage.getItem('error');
    sessionStorage.removeItem('error');
}

// events function 

/**
 * Description
 * @param {htmlEvent} event 
 * @returns {true}
 */
function formCheck(event) {
    if (nickInput.value.match(/(?<!\S)[0-9]/)) {
        event.preventDefault();
        error.innerText='el nombre no puede empezar con un numero';
        nickInput.focus();
        return false;
    }
    if (nickInput.value.length == '0'){
        event.preventDefault();
        error.innerText='Rellene el campo nombre';
        nickInput.focus();
        return false;
    }
    if (sizeInput.value == '0') {
        event.preventDefault();
        error.innerText='Seleccione un tamaño de juego';
        sizeInput.focus();
        return false;
    }
    userData(nick, size, mail, geolocationTxt);
    historicUser(nick);
    return true;
}


// started event load


formElement.addEventListener('submit', formCheck);

// geolocation 

geolocationData();