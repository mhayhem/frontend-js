// init variables, objects & DOM    

var nickInput;
var emailInput;
var sizeInput;
var formElement;
var error;
var avatarItem;
var itemImg;
var avatarContainer;


// functions

/**
 * Description
 * @param {htmlEvent} event take infomation from form
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
    userData(nick, size, email, geolocationTxt);
    historicUser(nick);
    return true;
}

function moveImg(event) {
    itemImg = event.target;
    console.log(itemImg.src);
}

function changeImg(event) {
    avatarContainer.src = itemImg.src;
}

/**
 * Description
 * load and check objects from form
 */
function loadDom() {
    nickInput = document.getElementById('nick');
    emailInput = document.getElementById('email');
    sizeInput = document.getElementById('size');
    formElement = document.getElementById('formElement');
    error = document.getElementById('error');

    // take errors in form
    if(sessionStorage.getItem('error') != null) {
        error.innerText=sessionStorage.getItem('error');
        sessionStorage.removeItem('error');
    }

    formElement.addEventListener('submit', formCheck);

    // drag & drop events
    avatarItem = document.getElementsByClassName('avatarImgItem');
    // loop to identify item to drag
    for (let item of avatarItem) {
        item.addEventListener('dragstart', moveImg);
    }
    avatarContainer = document.getElementById('avatarImg');
    avatarContainer.addEventListener('dragover', 
        e => {e.preventDefault();})
    avatarContainer.addEventListener('drop', changeImg);
}


// started event load

document.addEventListener('DOMContentLoaded', loadDom);


// geolocation 

geolocationData();