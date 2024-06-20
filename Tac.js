let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgcont = document.querySelector(".msg-container");
let msge=document.querySelector("#msg");

let turnO = true;

// let arr=["apple","mango","peru"];

// let arr2=[["apple","Litchi"],["Potato","Tomato"],["Pants","Shirts"],["Sunflower","Rose"]]; //2D ARRAY

const winPatterns =[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

const resetGame = () =>{
    let turnO = true;
    enableboxes();
    msgcont.classList.add("hide");



}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       console.log("Box was clicked"); 
       if(turnO){ //Player 0 turn 
        box.innerText = "O";
        turnO=false;

       }
       else{ //Player X turn
        box.innerText = "X";
        turnO=true;
       }
       box.disabled=true;

       checkWInner();
   
    });
});


const disableboxes = () =>{
            for(let box of boxes){

            box.disabled=true;
            }
}

const enableboxes = () =>{
    for(let box of boxes){

    box.disabled=false;
    box.innerText="";
    }
}

const showWinner = (winner) => {
    msge.innerText = `Congratulations,Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableboxes();
};

const checkWInner=() =>{
    for(let pattern of winPatterns){
       
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log();
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!=""&&pos3val!=""){ 
            if(pos1val==pos2val && pos2val==pos3val){ //winning condition 
                console.log("Winner",pos1val); 
                showWinner(pos1val);
            }

        }

    }
};


newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
