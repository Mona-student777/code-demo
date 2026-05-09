// boxes=document.querySelectorAll(".box");

// gmturn=document.querySelector(".gmturn");
// resetbtn=document.querySelector(".reset")
// // winningcontainer.document.querySelector(".winning-container");
// // winnmsg=document.querySelector(".winn-msg")
// ngame=document.querySelector(".newgame");



// let bgmusic = new Audio("background music.mp3");
// let winning = new Audio("wiinning.mp3");


//  const winPattern = [
//    [0,1,2],
//    [0,3,6],
//    [0,4,8],
//    [1,4,7],
//    [2,5,8],
//    [2,4,6],
//    [3,4,5],
//    [6,7,8]
//  ]

//  let turnO=true;


// boxes.forEach((box)=>{
//    box.addEventListener("click",()=>{
//        console.log("box was clicked");
//      let span=box.querySelector(".boxtext");
//      if(turnO){
//      span.innerText="O";
//       turnO=false;
    
//       gmturn.innerText ="turn:X";

//      }else{
//      span.innerText="X";
//       turnO=true;
//       gmturn.innerText ="turn:O";

//      }
     
//      box.disabled=true;
//      box.style.pointerEvents="none"
//      checkWinner();
//    })
// });


// // check the winnieer

// const checkWinner = () => {
//    for (let pattern of winPattern) {
//       let val1 = boxes[pattern[0]].querySelector(".boxtext").innerText;
//       let val2 = boxes[pattern[1]].querySelector(".boxtext").innerText;
//       let val3 = boxes[pattern[2]].querySelector(".boxtext").innerText;

//       if (val1 !== "" && val2 !== "" && val3 !== "") {
//          if (val1 === val2 && val2 === val3) {
//             console.log("winner", val1);
//             showwinner(val1); 
//             return; // ✅ correct place
//          }
//       }
//    }
// }

// // winningcontainer = document.querySelector(".winning-container");

// // const showwinner=(winner)=>{
// //   winnmsg.innerText=`congrats! to palyer ${winner} winns 🎉`;
// //   winningcontainer.classList.remove("hide");

// //   disabledboxes();
// // }

// const winningcontainer = document.querySelector(".winning-container");
// const winnmsg = document.querySelector(".win-msg");

// const showwinner = (winner) => {
//   winnmsg.innerText = `Congrats! Player ${winner} wins 🎉`;
//   winningcontainer.classList.remove("hide");
//   disabledboxes();
// };


//  const disabledboxes=()=>{
//    for(let box of boxes){
//       box.style.pointerEvents="none";

//    }
//  }

//  const enabledboxes =()=>{
//    for(let box of boxes){
//      box.style.pointerEvents="auto";
//      box.querySelector("boxtext").innerText="";

//    }
//  }

//  const regame =()=>{
//    turnO=true;
//    enabledboxes();
//    winningcontainer.classList.add("hide");
//    gmturn.innerText="turn:O";
//  }
  
//  ngame.addEventListener("click", regame);
//  resetbtn.addEventListener("click",regame);






let boxes = document.querySelectorAll(".box");
let gmturn = document.querySelector(".gmturn");
let resetbtn = document.querySelector(".resetbtn");
let newgame = document.querySelector(".newgame");

const winningcontainer = document.querySelector(".winning-container");
const winnmsg = document.querySelector(".win-msg");

let turnO = true;

const winPattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];

// 🎯 CLICK EVENT
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
      let span = box.querySelector(".boxtext");

      if(span.innerText !== "") return; // ✅ prevent overwrite

      if(turnO){
         span.innerText = "O";
         turnO = false;
         gmturn.innerText ="turn: X";
      } else {
         span.innerText = "X";
         turnO = true;
         gmturn.innerText ="turn: O";
      }

      box.style.pointerEvents="none";

      checkWinner(); // ✅ correct function
   });
});


// 🏆 CHECK WINNER
const checkWinner = () => {
   for (let pattern of winPattern) {
      let val1 = boxes[pattern[0]].querySelector(".boxtext").innerText;
      let val2 = boxes[pattern[1]].querySelector(".boxtext").innerText;
      let val3 = boxes[pattern[2]].querySelector(".boxtext").innerText;

      if (val1 !== "" && val2 !== "" && val3 !== "") {
         if (val1 === val2 && val2 === val3) {
            showWinner(val1);
            return; // ✅ stop loop
         }
      }
   }
};


// 🎉 SHOW WINNER
const showWinner = (winner) => {
   winnmsg.innerText = `🎉 Winner is ${winner}`;
   winningcontainer.classList.remove("hide");
   disableBoxes();
};


// 🔒 DISABLE BOXES
const disableBoxes = () => {
   for(let box of boxes){
      box.style.pointerEvents = "none";
   }
};


// 🔄 ENABLE / RESET
const enableBoxes = () => {
   for(let box of boxes){
      box.style.pointerEvents = "auto";
      box.querySelector(".boxtext").innerText = ""; // ✅ clear text
   }
};


// 🔁 RESET GAME
const resetGame = () => {
   turnO = true;
   enableBoxes();
   winningcontainer.classList.add("hide");
   gmturn.innerText = "turn: O";
};


// 🎮 BUTTON EVENTS
newgame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);