let userScore = 0;
let comp = 0

const userScorepara = document.querySelector("#userScore")
const compScorepara = document.querySelector("#compScore")

const msg = document.querySelector("#msg")

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIndx = Math.floor(Math.random()*3);
    return options[randIndx];
}

const derawGame = () => {
    msg.innerText = "Game was Draw. Play Again!!"
    msg.style.backgroundColor = "grey"
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore
        msg.innerText = `You Win!! your${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }else{
        comp++;
        compScorepara.innerText = comp
        msg.innerText = `You lose!! ${compChoice} beats your${userChoice}`
        msg.style.backgroundColor = "red"
    }
}


const playGame = (userChoice) => {
    console.log("user choice = " , userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        derawGame()
    }
    else{
        userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true
        }else{
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})