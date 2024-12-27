"use strict"

let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function(){

  const userInput =Number(document.querySelector(".input").value);
   if(userInput === 0){
     document.querySelector(".message").textContent="enter more than 0"
   }
   else if(userInput < computergusse){
    document.querySelector(".message").textContent="Too Low"
    score--;
    document.querySelector(".score").textContent = score;
   }
   else if ( userInput > computergusse){
      document.querySelector(".message").textContent="Too High"
      score--;
      document.querySelector(".score").textContent = score;
   }
   else if (userInput === computergusse){
     document.querySelector(".message").textContent="Your Guess is Right"
     document.querySelector("body").style.backgroundColor="green"
     document.querySelector(".number").textContent = computergusse;
     if(highScore<score){
      highScore = score;
     document.querySelector(".highScore").textContent=score;
    }
  }
})
  
document.querySelector(".again").addEventListener("click", ()=>{
  document.querySelector(".input").value=""
  score=20;
  document.querySelector(".message").textContent ="Start Guess!"
  document.querySelector("body").style.backgroundColor="lightblue"
  document.querySelector(".score").textContent="20"
  
  document.querySelector(".number").textContent="?"
  randNumber();
  //console.log(randNumber());
})


   



let computergusse; // 
randNumber();
function randNumber(){
    computergusse = Math.trunc(Math.random()*20+1) ;
    return computergusse;
    
}
//console.log(computergusse);
