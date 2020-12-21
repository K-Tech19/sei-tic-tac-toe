


// Page loads
document.addEventListener("DOMContentLoaded", () => {
    // this where we do things when the page is loaded
    let whosTurn = "x";
    let spaceSelectionX = [];
    let spaceSelectionO = [];
    let winner = false;
    let winCombos = [
        [0,1,2] , //win1
        [3,4,5] , //win2
        [6,7,8] , //win3
        [0,4,8] , //win4
        [2,4,6] , //win5
        [0,3,6] , //win6
        [1,4,7] , //win7
        [2,5,8]  // win8
    ];

    const gameBoard = document.querySelector('.gameBoard');
    gameBoard.addEventListener('click', spaceClick);
    
    function spaceClick(e) {
        if (!e.target.innerText) {
            if (whosTurn === 'x' ) {
                e.target.innerText = 'x';
                spaceSelectionX.push(e.target.id);
                // checkForWin 
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


function checkForWin() {
let xSelection = [];
spaceSelectionX.forEach(item => {
    xSelection.push(item.toString())
    console.log(xSelection);
})
let win1 =[];
winCombos[0].forEach(item =>{
    win1.push(item.toString())
    console.log(win1);
})
let win2 = [];
winCombos[1].forEach(item =>{
    win2.push(item.toString())
    console.log(win2);
})
let win3 = [];
winCombos[2].forEach(item =>{
    win3.push(item.toString())
    console.log(win3);
})
let win4 = [];
winCombos[3].forEach(item =>{
    win4.push(item.toString())
    console.log(win4);
})
let win5 = [];
winCombos[4].forEach(item =>{
    win5.push(item.toString())
    console.log(win5);
})
let win6 = [];
winCombos[5].forEach(item =>{
    win6.push(item.toString())
    console.log(win6);
})
let win7 = [];
winCombos[6].forEach(item =>{
    win7.push(item.toString())
    console.log(win7);
})
let win8 = [];
winCombos[7].forEach(item =>{
    win8.push(item.toString())
    console.log(win8);
})
// compare to wins 
}
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
// how to clear score
// console.log("hello, world")