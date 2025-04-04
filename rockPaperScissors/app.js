// scores
let userScore = 0;
let compScore = 0;


// accessing user choice
const choices = document.querySelectorAll(".choice");


// accessing message
const msg = document.querySelector(".msg");


// accessing user & comp score
const userScoreVal = document.querySelector("#user-score")
const compScoreVal = document.querySelector("#comp-score")


// accessing reset button
const resetBtn = document.querySelector("#reset-btn");


// function to generate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];

    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


// draw game
const drawGame = () => {
    msg.innerText = "Game Draw! Play again!";
    msg.style.backgroundColor = "#081b31";
}


// showing winner
// const showWinner = (userWin, userChoice, compChoice) => {
//     if (userWin) {
//         userScore++;
//         userScoreVal.innerText = userScore;
//         msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
//         msg.style.backgroundColor = "#043f04";
//     }
//     else {
//         compScore++;
//         compScoreVal.innerText = compScore;
//         msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
//         msg.style.backgroundColor = "#740606";
//     }
// }

const showWinner = (userWin, userChoice, compChoice) => {
    const isDarkMode = document.documentElement.getAttribute("data-theme") === "dark";

    if (userWin) {
        userScore++;
        userScoreVal.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = isDarkMode ? " #043f04" : "green";
    } else {
        compScore++;
        compScoreVal.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = isDarkMode ? "#740606" : "red";
    }
};


// game play & results function
const playGame = (userChoice) => {

    // generate computer choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice)
        drawGame();

    else {
        // tracking winner - user or comp
        let userWin = true;

        if (userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }

        else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }

        else {  // userChoice === "scissors"
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}


// user choice function
choices.forEach(
    (choice) => {
        choice.addEventListener(
            "click",
            () => {
                const userChoice = choice.getAttribute("id");
                playGame(userChoice);
            }
        )
    }
);


// new game function 
const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScoreVal.innerText = compScore;
    compScoreVal.innerText = compScore;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#081b31";
}

resetBtn.addEventListener("click", resetGame);