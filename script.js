let nameInput = document.getElementById("nameInput");
let startGameBtn = document.getElementById("startGameBtn");
let errorMsg = document.getElementById("errorMsg");
let startScreen = document.getElementById("startScreen");
let playerOneScreen = document.getElementById("playerOneScreen");
let playerOneTitle = document.getElementById("playerOneTitle");
// ===================================
let letsPlayBtn = document.getElementById("letsPlayBtn");
let errorNumberOne = document.getElementById("errorNumerOne");
let numberInput = document.getElementById("numberInput");
// =============================

startGameBtn.addEventListener("click", () => {
    if (nameInput.value == "") {
     errorMsg.removeAttribute("hidden");   
    }  else {
        startScreen.style.display = "none";
        playerOneScreen.style.display = "flex";
        playerOneTitle.innerText = "Player - 1";
    }
});

// ==========================
letsPlayBtn.addEventListener("click", () => {
    if (numberInput.value == "") {
        errorNumberOne.removeAttribute("hidden");
    } else {
       errorNumberOne.setAttribute("hidden", "");
    }
});