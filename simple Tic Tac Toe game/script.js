let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
let newGame = document.querySelector(".newGame");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetGame");

turnO = true;

let winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")

}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if (turnO) {
            box.innerText = "O"
            box.classList.add("playerO")
            turnO = false
        }
        else{
            box.innerText = "X"
            box.classList.add("playerX")
            turnO = true
        }
        box.disabled = true

        checkWinner();
        checkDraw();
    })
})

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("playerX", "playerO");
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner} `
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winpattern){
        let postval1 = boxes[pattern[0]].innerText;
        let postval2 = boxes[pattern[1]].innerText;
        let postval3 = boxes[pattern[2]].innerText;

        if (postval1 != "" && postval2 != "" && postval3 != "") {
            if (postval1 === postval2 && postval2 === postval3) {
                console.log("Winner",postval1);
                showWinner(postval1)
            }
        }
    }
}

const checkDraw = () => {
    if ([...boxes].every(box => box.innerText !== "")) {
        msg.innerText = "It's a draw!";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
}




newGame.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)