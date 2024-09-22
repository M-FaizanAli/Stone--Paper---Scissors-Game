function playGame(userChoice){
    console.log(userChoice);
    let compChoice = comSelection();
    if(compChoice === userChoice){
        console.log("It's a tie!");
    }
};

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



