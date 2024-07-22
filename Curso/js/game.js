
// game code

// global var
var initMark  = false;
var errorMark = false;
var adjacent = [];
var markId = [];
var time;
var panelSize;
var markClass;
var intervalId;
var errorColor = document.getElementById('errorColor');
var message = document.getElementById('message');

/**
 * Description
 * ramdonly paint dots color 
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
    document.getElementById('nick').value = nick;
    document.getElementById('avatarImg').src = avatarImg;
    time = parseInt(time);
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
    // change margin-top to gameTitle when de size are 6x6
    if (size == '6') {
        document.getElementById('gameTitle').style.marginTop = '450px';
    }
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
    // countdown
    intervalId = setInterval(countDown, 1000);
}

/**
 * Description
 * 
 * 
 * star to mark the dots
 */
function startMarking(event) {
    let item = event.target;
    let containerItem = event.target.parentElement;
    
    if (item.classList.contains("red")) {
        markClass = 'red';
        containerItem.classList.add("red");
    }
    else if (item.classList.contains("blue")) {
        markClass = 'blue';
        containerItem.classList.add("blue");
    }
    else {
        markClass = 'green';
        containerItem.classList.add("green");
    }
    
    if (!initMark) initMark  = true;

    // add the id to array markId
    markId.push(item.id);
    // calculate adjacent
    calculateAdjacent(parseInt(item.id));
    
}

/**
 * Description
 * 
 * continue  mark the dots
 */
function continueMarking(event) {
    if (initMark) {
        let item = event.target;
        let newId = parseInt(item.id);
        errorColor.innerText = '';

        // if adjacent
        if (adjacent.includes(newId) && item.classList.contains(markClass)) {
            let containerItem = event.target.parentElement;
            if (item.classList.contains("red")) containerItem.classList.add("red");
            else if (item.classList.contains("blue")) containerItem.classList.add("blue");
            else containerItem.classList.add("green");
            markId.push(item.id);
            // save the marks
            calculateAdjacent(parseInt(item.id));
            console.log(markId);
        }
        // error massege from diferent dot color
        else {
            return errorMark = true;
        }
    }
}

/**
 * Description
 * mark ending
 */
function endMarking(newId) {
    initMark = false;
    adjacent = [];
    
    const score = document.getElementById('score');
    if (markId.length > 1 && !errorMark) {
        score.value = parseInt(score.value) + markId.length;
        }
    else {
        errorColor.innerText = 'Has tocado un color equivocado, se te restaran 2 puntos';
        score.value -= 2;
        if (score.value < 0) {
            score.value = 0;
        }
    }
    errorMark = false;
    
    // work to mark IDs
    for (let index = 0; index < markId.length; index++) {
        // catch item
        let markItem = document.getElementById(markId[index]);
        markItem.parentElement.classList.remove(markClass);
        // changes random colors for objects    
        let color = ['red', 'green', 'blue'];
        let colorRdm = getRamdomInt(3);
        markItem.classList.remove(markClass);
        markItem.classList.add(color[colorRdm]);
    }
    markId = [];
    
}


/**
 * Description
 *  
 * calculate the dot adjacent from marked dot
 */
function calculateAdjacent(markId) {
    adjacent = [];
    // top adjacent
    if((markId - panelSize) >= 0) adjacent.push(markId - panelSize);
    // bottom adjacent
    if ((markId + panelSize) < (panelSize * panelSize)) adjacent.push(markId + panelSize);
    // right adjacent
    if (((markId + 1)  % panelSize !== 0)) adjacent.push(markId + 1);
    // left adjacent
    if ((markId  % panelSize !== 0)) adjacent.push(markId - 1); 

    for (let index = 0; index < adjacent.length; index++) {
        console.log(adjacent[index]);
        
    }
}

/**
 * Description
 * count down the gamne
 */
function countDown() {
    let rTime = time - 1;
    time = rTime;
    document.getElementById('timeG').value = rTime;
    if (rTime == 0) {
        clearInterval(intervalId);
        // clear all events
        const items = document.getElementsByClassName('item');
        for (let item of items) {
            item.removeEventListener('mousedown', startMarking);
            item.removeEventListener('mouseover', continueMarking);
        }
        document.removeEventListener('mouseup', endMarking);
        // change z-index from panels
        document.getElementById('endGame').style.zIndex = '2';
        document.getElementById('game').style.zIndex = '1';
        document.getElementById('newGame').addEventListener('click', (e) => location.reload());
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


