
// game code

// global var
var initMark  = false;
var adjacent = [];
var panelSize;

/**
 * Description
 * @param {int} max
 * 
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
    panelSize = parseInt(size);
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
        items+=`<div class="containerItem"><div id="${index}" class="item ${color[colorRdm]}"></div></div>`;
    }
    document.getElementById('game').innerHTML=items;
}
/**
 * Description
 * catch the mouse down event
 */
function scheduleGameEvents() {
    const items = document.getElementsByClassName('item');
    for (let item of items) {
        item.addEventListener('mousedown', startMarking);
        item.addEventListener('mouseover', continueMarking)
    }
    document.addEventListener('mouseup', endMarking)
}

/** mouse event functions */
/**
 * Description
 * @param {MouseEvent} event
 * algoritme to functios of mark dots
 */
function toMark(event) {
    let item = event.target;
    let containerItem = event.target.parentElement;
    if (item.classList.contains("red")) containerItem.classList.add("red");
    else if (item.classList.contains("blue")) containerItem.classList.add("blue");
    else containerItem.classList.add("green");
    if (!initMark) initMark  = true;

    // test
        calculateAdjacent(parseInt(item.id));
    
}
/**
 * Description
 * @param {MouseEvent}  event
 * star to mark the dots
 */
function startMarking(event) {
    toMark(event);
}

/**
 * Description
 * @param {MouseEvent} event
 * continue  mark the dots
 */
function continueMarking(event) {
    if (initMark) {
        toMark(event);
    }
}

/**
 * Description
 * @param {MouseEvent} event
 * mark finish
 */
function endMarking (event) {
    initMark = false;
}

/**
 * Description
 * @param {any} idMarked
 * calculate the dot adjacent from marked dot
 */
function calculateAdjacent(idMarked) {
    adjacent = [];
    // top adjacent
    if((idMarked - panelSize) >= 0) adjacent.push(idMarked - panelSize);
    // bottom adjacent
    if ((idMarked + panelSize) < (panelSize * panelSize)) adjacent.push(idMarked + panelSize);
    // right adjacent
    if (((idMarked + 1)  % panelSize !== 0)) adjacent.push(idMarked + 1);
    // left adjacent
    if ((idMarked  % panelSize !== 0)) adjacent.push(idMarked - 1); 
    for (let index = 0; index < adjacent.length; index++) {
        console.log(adjacent[index]);
        
    }
}



// take user data
getUserData();
// check user data
if (!checkUserData()) location="index.html";

// fill the form
fillUserForm();
displayGameLayout();
scheduleGameEvents();


