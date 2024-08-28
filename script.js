const wrapperContainer = document.querySelector(".wrapper");
const gameInfoPara = document.querySelector(".game-info");
const gameContainer = document.querySelector(".tic-tac-toe");
const newbtn = document.querySelector(".btn");
const boxes = document.querySelectorAll(".box");

let currentplayer;
let gameBoard;
const winPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


function initialGame(){
    currentplayer="X";
    gameBoard = ["","","","","","","","",""];
   
    boxes.forEach((box,index)=>{
        box.innerText="";
        box.style.pointerEvents ="all";
        box.classList = `box box${index+1} `;

    });
    newbtn.classList.remove("active");
    gameInfoPara.innerText = `Current Player -${currentplayer}`;
}

initialGame();


boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClick(index);
    });
});

function handleClick(index){
    if(gameBoard[index] === ""){
        boxes[index].innerText= currentplayer;
        gameBoard[index] = currentplayer;
        boxes[index].style.pointerEvents = "none";
        swapTurn();
        checkGameOver();
    }


}
 
function swapTurn(){
    if(currentplayer=="X"){
        currentplayer ="O";
    }

    else{
        currentplayer="X";
    }
    gameInfoPara.innerText =`Current Player -${currentplayer}`;
}



function checkGameOver(){
    let answer="";

    winPositions.forEach((position)=>{
        const [a,b,c]=position;
        if(gameBoard[a]!=="" //check if a is empty
            &&gameBoard[a] === gameBoard[b]// Check if a equals b
            &&gameBoard[b] === gameBoard[c]// Check if b equals c
         ) {
                if(gameBoard[a]==="X")
                    answer ="X";
                 else{
                    answer="O";
                 }
                   
               boxes.forEach((box)=>{
                box.style.pointerEvents="none";
               })
                    boxes[a].classList.add("win");
                    boxes[b].classList.add("win");
                    boxes[c].classList.add("win");  
                
            }
           
    
    });
    if(answer!==""){
        gameInfoPara.innerText =`Winner Player -${answer}`;
        newbtn.classList.add("active");
        return;
    }

    let fillCount = 0;
    gameBoard.forEach((box)=>{
        if(box!=="")
            fillCount++;
    })
    if(fillCount===9){
        gameInfoPara.innerText="Game Tied";
        newbtn.classList.add("active");
    }
    

    newbtn.addEventListener("click",initialGame);
        

}  
                
    
        
