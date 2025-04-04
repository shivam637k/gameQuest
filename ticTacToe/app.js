// --- ALGORITHM IN readme.txt file ---

// accessing elements
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


// playerX, playerO
let turnO = true; // playerO chance


// winning patterns
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


// reset game function
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    callTime = 0;
}


// logic for boxes
boxes.forEach(
    (box) => {
        box.addEventListener(
            "click", () => {
                if (turnO) {
                    box.style.color = "#178519";
                    box.innerText = "O";
                    turnO = false;
                }
                else {
                    box.style.color = "#b0413e";
                    box.innerText = "X";
                    turnO = true;
                }
                box.disabled = true;
                checkWinner();
            }
        )
    }
);


// disable boxes
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}


// enable boxes
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "#0d4686";
        box.style.border = "none";
    }
}


// show winner function
const showWinner = (winner) => {
    if (winner === -1) {
        msg.innerText = "Game Draw";
    }
    else {
        msg.innerText = `Congratulations! Winner is: ${winner}`;
    }

    msgContainer.classList.remove("hide");
    disableBoxes();
};


let callTime = 1; // to check for draw condition
// check winner function
const checkWinner = () => {
    callTime++;

    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                for (let i = 0; i < 3; i++) {
                    boxes[pattern[i]].style.backgroundColor = "#b0d1f4";
                    boxes[pattern[i]].style.border = "5px solid #8fc0f5";
                }
                showWinner(pos1Val);
            }

            // to check if game is over & no winner - DRAW GAME
            else if (callTime > 9) {
                showWinner(-1);
            }
        }
    }
};


// new game button
newBtn.addEventListener("click", resetGame);


// reset game button
resetBtn.addEventListener("click", resetGame);