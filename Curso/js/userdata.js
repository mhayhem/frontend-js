// storage user data
  
var nick;

function userData(nick) {
    sessionStorage.setItem('nick', nick.value);
}

function getUserData() {
    nick = sessionStorage.getItem('nick');
    console.log(nick);
}

function checkUserData () {
    if (nick == null) {
        sessionStorage.setItem('error', 'no te has logueado');
        return false;
    }
    return true;
}