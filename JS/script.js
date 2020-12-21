


// Page loads
document.addEventListener("DOMContentLoaded", () => {
    // this where we do things when the page is loaded
    let whosTurn = "x";
    let spaceSelectionX = [];
    let spaceSelectionO = [];
    let winner = false;
    let winCombos = [
        [0,1,2] , //a
        [3,4,5] , //b
        [6,7,8] , //c
        [0,4,8] , //d
        [2,4,6] , //e
        [0,3,6] , //f
        [1,4,7] , //i
        [2,5,8]  // j
    ];

    const gameBoard = document.querySelector('.gameBoard');
    gameBoard.addEventListener('click', spaceClick);
    
    function spaceClick(e) {
        if (!e.target.innerText) {
            if (whosTurn === 'x' ) {
                e.target.innerText = 'x';
                spaceSelectionX.push(e.target.id);
                console.log(spaceSelectionX);
                whosTurn = 'o'
            } else {
                e.target.innerText = 'o';
                spaceSelectionO.push(e.target.id);
                console.log(spaceSelectionO);
                whosTurn = "x"
            }
        }
        
        
    }

})



//player 1 "X" variable
// player 2 "O" variable
// how to keep score
// what space is being occupied "x" or "o" or available spots
// 2d array check*****
// how to check if someone wins
// where to store scores of player1 "X"
// where to store scores of player1 "O"
// how to check how many scores are left
// create reset button
// check to see if draw

//  how to clear score
// what 
// console.log("hello, world")