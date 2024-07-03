
// game code

function fillUserForm() {
    document.getElementById("nick").value=nick;
    document.getElementById("avatarImg").src=avatarImg;
}
function displayGameLayout() {
    document.getElementById("game").style.gridTemplateColumns="repeat("+size+", 1fr)";
    document.getElementById("game").style.gridTemplateRows="repeat("+size+", 1fr)";
}
// take user data
getUserData();
// check user data
if (!checkUserData()) location="index.html";

// fill the form
fillUserForm();
displayGameLayout();


