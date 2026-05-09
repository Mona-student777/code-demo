boxes=document.querySelectorAll(".box");
resetbtn=document.querySelector("#reset-btn");
msgcontainer=document.querySelector(".msg-container");
msg=document.querySelector("#msg");
newbtn=document.querySelector("#new-game");

 

 let winpatern=[
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8]
 ]
let turnO=true; 

 let resetGame =()=>{
      turnO =true;
     enabledboxes();
     msgcontainer.classList.add("hide");
     
 }

boxes.forEach((box)=> {
     box.addEventListener("click",()=>{
          console.log("box was clicked");
          if(turnO){
               box.innerText="O";
               turnO=false;

          }else{
               box.innerText="X";
               turnO=true;
          }
         box.disabled=true;
         checkwinner();

          
     })
});
  const disabledboxes=()=>{
      for(let box of boxes){
          box.disabled=true;
      }
  }
  const enabledboxes=()=>{
     for(let box of boxes){
         box.disabled=false ;
         box.innerText="";
     }
 }
const showwinner =(won)=>{
    msg.innerText=`congratulation,winner is ${won}`;
    msgcontainer.classList.remove("hide");
    
    disabledboxes();

}
const checkwinner=()=>{
     for(let patern of winpatern){

               let pos1Val=boxes[patern[0]].innerText;
               let pos2Val=boxes[patern[1]].innerText;
               let pos3Val=boxes[patern[2]].innerText;
          if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
               if(pos1Val === pos2Val && pos2Val === pos3Val){
                    console.log("won",pos1Val);
          
                    showwinner(pos1Val);  
               }
          }
    
     }
};
resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);

