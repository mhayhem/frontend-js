// storage user data

function userData(nick) {
    sessionStorage.setItem('nick', nick.value);
}

function showData() {
    let nick = sessionStorage.getItem('nick');
    console.log(nick);
}