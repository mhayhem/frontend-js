
var geolocationTxt;
var avatarImg;
var avatarContainer;



/**
 * Description
 * 
 * add user info to sesion storage
 * 
 */
function userData(nick, size, email,time, geolocationTxt, avatarContainer) {
    sessionStorage.setItem('nick', nick.value);
    sessionStorage.setItem('size', size.value);
    sessionStorage.setItem('email', email.value);
    sessionStorage.setItem('time', time.value);
    sessionStorage.setItem('avatarImg', avatarContainer.src);
    sessionStorage.setItem('geolocationTxt', geolocationTxt);
}


/**
 * Description
 * take user info
 */
function getUserData() {
    nick = sessionStorage.getItem('nick');
    size = sessionStorage.getItem('size');
    email = sessionStorage.getItem('email');
    time = sessionStorage.getItem('time');
    avatarImg = sessionStorage.getItem('avatarImg');
}

/**
 * Description
 * 
 * checking user nick is or not null
 * @returns {boolean}
 */
function checkUserData () {
    if (nick == null) {
        sessionStorage.setItem('error', 'no se ha iniciado sesión');
        return false;
    }
    return true;
}       

// localStorage

/**
 * Description
 * 
 * store info in localstorage
 * @param {HTMLElement} nick
 */
function historicUser (nick) {
    let historicUser = localStorage.getItem('historic');
    let historic;
    if (historicUser === null) {
        historic = []; 
    }
    else {
        historic = JSON.parse(historicUser);
    }
    let userLogin = {
        user: nick.value,
        email: email.value,
        date: Date.now()
    }
    historic.push(userLogin);
    localStorage.setItem('historic', JSON.stringify(historic));
}

/**
 * Description
 * 
 * take geolocation
 */

function geolocationData () {
    if (!navigator.geolocation) {
        geolocationTxt = 'el naveigador no es compatible con la API geolocation'
    }
    else {
        navigator.geolocation.getCurrentPosition(
            // succes 
            (position) => {geolocationTxt = 'Latitud: ' + position.coords.latitude + ', longitud: ' + position.coords.longitude},
            // erorr
            () => {geolocationTxt = 'No se ha podido realizar la geolocation'}
        );
    }
}
