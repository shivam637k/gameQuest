boxes = [0, 9]

players = O, X

winning patterns = 
    HORIZONTAL:
        [0, 1, 2],
        [3, 4, 5],
        [6 ,7, 8]
    VERTICAL:
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    DIAGONAL:
        [0, 4, 8],
        [2, 4, 6]



ALGORITHM: app.js
    accessing boxes, reset-btn
    declaring turnO - keeps player's track
    declaring winning patterns
    adding eventListener to box on click
        - set color for X & O, respectively
        - adding inner text
        - turnO = true/false (to switch player)
        - disabling box
    adding checkWinner() function
        - use callTime variable to check if boxes have been clicked 9 times (if yes, and now winner, set condition for draw game)
        - checking for value in different boxes
        - check if boxes are not empty 
            - check if have same values or not
                - display winner boxes differently
            - check for draw condition
        - display winner
    accessing newGame button
    adding showWinner() function
        - display winner
        - if no winner, display DRAW GAME msg
        - remove 'hide' class from 'msg-container'
    adding resetGame() function
        - turnO = true
        - call enableBoxes() function
    adding disableBoxes() function
        - disable the boxes
    adding enableBoxes() function
        - enable the boxes
        - clear the boxes
        - clear the winner specific properties from boxes
    add eventListener for newBtn
    add eventListener for resetBtn
