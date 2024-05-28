var geolocationTxt;


// sessionStorage

function userData(nick, size, geolocationTxt) {
    sessionStorage.setItem('nick', nick.value);
    sessionStorage.setItem('size', size.value);
    sessionStorage.setItem('geolocationTxt', geolocationTxt);
    
    
}

function getUserData() {
    nick = sessionStorage.getItem('nick');
    
    
    
}

function checkUserData () {
    if (nick == null) {
        sessionStorage.setItem('error', 'no se ha iniciado sesión');
        return false;
    }
    return true;
}       

// localStorage

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
        date: Date.now()
    }
    historic.push(userLogin);
    localStorage.setItem('historic', JSON.stringify(historic));
}

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