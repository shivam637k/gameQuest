ALGORITHM : app.js
    - initialize userScore & compScore variables to 0
    - accessing choice made by clicking any 1/3 picture
    - adding function to generate user choice
        - add click event listener for user choice
        - getAttribute: to get id of user choice
        - call playGame() function, passing user choice
    - function to generate computer choice
        - create array of choices
        - generate random index for the array
        - return the choice corresponding to random index
    - playGame() function
        - requires userChoice and compChoice
        - condition for draw game
        - declaringing userWin variable for tracking winner
        - defining winning conditions; checking who wins
        - calling showWinner() funtion; passing userWin, userChoice & compChoice
    drawGame() function
        - updating msg text & visuals
    accessing userScore and compScore values
    showWinner() function
        - updating msg text & visuals
        - update userScore & compScore accordingly and display on the screen
    accessing reset button
    resetgame() function
        - reset userScore, compScore
        - reset scores on screen
        - reset msg text & visuals
    add eventListener on resetBtn: reset the game