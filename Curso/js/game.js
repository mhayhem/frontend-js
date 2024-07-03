
// game code

function getRamdomInt(max) {
    return Math.floor(Math.random() * max);
}
function fillUserForm() {
    document.getElementById("nick").value=nick;
    document.getElementById("avatarImg").src=avatarImg;
}
function displayGameLayout() {
    document.getElementById("game").style.gridTemplateColumns="repeat("+size+", 1fr)";
    document.getElementById("game").style.gridTemplateRows="repeat("+size+", 1fr)";
    
    let items = ""
    let color = ["red", "green"];
    let colorRdm = 0;
    for (let index = 0; index < (parseInt(size)*parseInt(size)); index++) {
        if (index % 2 != 0) colorRdm = getRamdomInt(2);
        items+=`<div class="containerItem"><div class="item ${color[colorRdm]}"></div></div>`;
    }
    document.getElementById("game").innerHTML=items;
}
// take user data
getUserData();
// check user data
if (!checkUserData()) location="index.html";

// fill the form
fillUserForm();
displayGameLayout();


