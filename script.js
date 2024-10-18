let modebut = document.querySelector("#darklight");
let body = document.querySelector("body");
let resertbut = document.querySelector("#reset-but");
let dLbut = document.querySelector("#darklight");
let newBut = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
// dark and light mode logic

let mode = "light";

modebut.addEventListener("click", ()=>{
    if(mode === "light"){
        mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        modebut.innerText = "Light Mode";
        resertbut.classList.add("resetDark");
        resertbut.classList.remove("resetLight");
        dLbut.classList.add("resetDark");
        dLbut.classList.remove("resetLight");
        newBut.classList.add("resetDark");
        newBut.classList.remove("resetLight");
    } else {
        mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        modebut.innerText = "Dark Mode";
        resertbut.classList.add("resetLight");
        resertbut.classList.remove("resetDark");
        dLbut.classList.add("resetLight");
        dLbut.classList.remove("resetDark");
        newBut.classList.add("resetLight");
        newBut.classList.remove("resetDark");
    }
});

// Game Logic

let boxes = document.querySelectorAll(".box");

let turnO = true;

const winPatterns = [
    [0,1,2] ,
    [3,4,5] ,
    [6,7,8] ,
    [0,3,6] ,
    [1,4,7] , 
    [2,5,8] , 
    [0,4,8] ,
    [2,4,6]
];

const resetGame = () => {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if (turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const checkWinner = () => {
    for(let patterns of winPatterns){
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newBut.addEventListener("click", resetGame);
resertbut.addEventListener("click", resetGame);