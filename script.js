let userCount = 0;
let compCount = 0;

const msg  = document.querySelector("#msg");

let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

// Play Game
function playGame(userChoice){
    console.log("You choose: ",userChoice);
    let compChoice = comSelection();
    console.log("Computer Choose: ", compChoice);
    let userWon = true;
    if(compChoice === userChoice){
        drawGame();
    }else{
        if(userChoice === "rock"){
            userWon = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWon = compChoice === "scissors" ? false : true;
        }
        else{
            userWon = compChoice === "rock" ? false : true;
        }
        showWinner(userWon, userChoice, compChoice);
    }
}

// showing Winner
function showWinner(userWon, userChoice, compChoice){
    if(userWon){
        userCount++;
        userScore.innerText = userCount;
        msg.innerText = `You Won!. your ${userChoice} defeated ${compChoice}`;
        msg.style.backgroundColor = "green";
        console.log("You Won!");
    }else{
        compCount++;
        compScore.innerText = compCount;
        msg.innerText = `Computer Won!. ${compChoice} defeated your ${userChoice}`;
        msg.style.backgroundColor = "red";
        console.log("Computer Won!");
    }
}


// Draw Game 
function drawGame(){
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "#081b31";
    console.log("It's a draw!");
}

// Getting user Selection
const choices = document.querySelectorAll(".choose");
for(const choice of choices){
    choice.addEventListener("click", () => {
        const selected = choice.getAttribute("id");
        playGame(selected);
    })
}

const compChoice = ["rock", "paper", "scissors"];

// Getting Computer Selection
function comSelection(){
    let comp = compChoice[randomNum()];
    return comp;
}

function randomNum(){
    let rand = Math.floor(Math.random() * 3);
    return (rand);
}

