let boxes=document.querySelectorAll(".boxes");
let newGameBtn=document.querySelector(".new-game-btn")
let lable=document.querySelector(".win-lable");
let reset=document.querySelector(".reset-btn");
let turn=true;
const winpair=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
 ]
 
 let resetBtn=()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
        newGameBtn.classList.add("hide");
        lable.classList.add("hide");
    }
    turn=true;

 }

boxes.forEach((box)=>{
    box.addEventListener(("click"),()=>{
        if(turn){
            box.innerText="X";
            turn=false;
            
        }
        else{
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        winPattarn();
        
    })

});

let boxesDisable=()=>{
    for(let box of boxes){
       box.disabled=true;
    }
 }

 let winPattarn=()=>{
    for(let pattarn of winpair){
        let position1=boxes[pattarn[0]].innerText;
        let position2=boxes[pattarn[1]].innerText;
        let position3=boxes[pattarn[2]].innerText;
        if(position1!=""&&position2!=""&&position3!="")
        {
            if(position1==position2&&position2==position3){
                lable.innerText=`Congratulation Winner ${position1}`;
                newGameBtn.classList.remove("hide");
                lable.classList.remove("hide");
                boxesDisable();
            }
        }
    }
 }
 
 

reset.addEventListener("click",resetBtn);
newGameBtn.addEventListener("click",resetBtn);