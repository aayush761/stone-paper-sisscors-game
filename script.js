let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const mess = document.querySelector("#mes");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const drawGame = () => {
    // console.log("game was draw.");
    mess.innerText = "game was draw play again.";
    mess.style.backgroundColor = "black"
};

const showWinner = (userWin) => {
    if (userWin) { 
        userScore++;
        userScorepara.innerText = userScore;
        // console.log("you win");
mess.innerText = "you Win!"
    //    mess.innerText = `you win! your ${userChoice} beats ${compChoice}`;
       mess.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        // console.log("you lose");
        // mess.innerText = `you lose your ${compChoice} beats ${userChoice}`;
        mess.innerText = "you lose";
        mess.style.backgroundColor = "red";
    }
}




const genCompChoice = () => {
const options = ["rock", "paper", "scissors",];
const randIdxn = Math.floor(Math.random()*3);
return options[randIdxn];
}

const playGame = (userChoice) => {
// console.log("user choice =", userChoice);
const compChoice = genCompChoice();
// console.log("comp choice =", compChoice);
if(userChoice == compChoice) {
    drawGame();
    
}else {
    let userWin = true; 
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true;
        
    }
    else{
        userWin = compChoice === "rock" ? false : true;
  }
  showWinner(userWin);
}


};



choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
}
)
























































