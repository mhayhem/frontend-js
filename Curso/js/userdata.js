// sessionStorage

function userData(nick) {
    sessionStorage.setItem('nick', nick.value);
    
    
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
        historic.push(userLogin);
    }
    else {
        historic = JSON.parse(historicUser);
    }
    let userLogin = {
        user: nick.value,
        date: Date.now()
    }
    localStorage.setItem('historic', JSON.stringify(historic));
}