

// game code

/**
 * Description
 * @param {int} max
 * @returns {int} random number
 */
function getRamdomInt(max) {
    return Math.floor(Math.random() * max);
}
/**
 * Description
 * complete the form from sessionStorage
 */
function fillUserForm() {
    document.getElementById('nick').value=nick;
    document.getElementById('avatarImg').src=avatarImg;
}
/**
 * Description
 * display the game panel
 */
function displayGameLayout() {
    document.getElementById('game').style.gridTemplateColumns="repeat("+size+", 1fr)";
    document.getElementById('game').style.gridTemplateRows="repeat("+size+", 1fr)";
    
    let items = ""
    let color = ["red", "green", "blue"];
    let colorRdm = 0;
    for (let index = 0; index < (parseInt(size)*parseInt(size)); index++) {
        if (index % 2 > 0) colorRdm = getRamdomInt(3);
        items+=`<div class="containerItem"><div class="item ${color[colorRdm]}"></div></div>`;
    }
    document.getElementById('game').innerHTML=items;
}
/**
 * Description
 * start the mouse down event
 */
function scheduleGameEvents() {
    const items = document.getElementsByClassName('item');
    for (let item of items) {
        item.addEventListener('mousedown', startMark);
    }
}
/**
 * Description
 * @param {event} 
 * star to mark the dots
 */
function startMark(event) {
    let item = event.target;
    let containerItem = event.target.parentElement;
    if (item.classList.contains("red")) containerItem.classList.add("red");
    else if (item.classList.contains("blue")) containerItem.classList.add("blue");
    else containerItem.classList.add("green");
}
// take user data
getUserData();
// check user data
if (!checkUserData()) location="index.html";

// fill the form
fillUserForm();
displayGameLayout();
scheduleGameEvents();


