const minNum = 10,
    maxNum = 100,
    winningNum = 85,
    max_attempts = 3;
let attempts = 1;
document.querySelector(".min-num").textContent = minNum;
document.querySelector(".max-num").textContent = maxNum;

const messageEl = document.querySelector(".message"),
    guessEl = document.querySelector("#guess"),
    guessBtn = document.querySelector(".guess-value"),
    gameEl = document.querySelector("#game");

guessBtn.addEventListener("click", playGame);
gameEl.addEventListener("mousedown",e=>{
    if(e.target.className==="play-again"){
        window.location.reload();
    }
});

function playGame(e) {

    if (attempts < max_attempts) {
        let guessValue = parseInt(guessEl.value);
        if (isNaN(guessValue)) {
            setMessage(`Please enter a number between ${minNum} and ${maxNum}.`, "red");

        } else {
            attempts++;
            if (guessValue === winningNum) {
                gameOver(`${winningNum} is correct , you WIN!`, "green");
            } else {
                setMessage(`Incorrect please try again.${(max_attempts - attempts+1)} attempts left`, "red");
            }
        }
    } else {
        gameOver("Game over. You lost", "red");
    }
}
function setMessage(msg, color) {
    messageEl.textContent = msg;
    messageEl.style.color = color;
}

function gameOver(msg,color){
    setMessage(msg,color);
    guessBtn.value = "Play Again";
    guessBtn.className = "play-again";

}
