const p1 = {
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display")
}

const p2 = {
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display")
}

const selection = document.querySelector("#selection");
const reset = document.querySelector("#reset");

 let isGameOver = false;

 function updateScores(player,opponent){
   if(!isGameOver){
     player.display.innerHTML++;
     if(selection.value===player.display.innerHTML){
       player.display.classList.add("greenC");
       opponent.display.classList.add("redC");
       isGameOver = true;
       player.button.disabled = true;
       opponent.button.disabled = true;
     }
   }
 }

p1.button.addEventListener("click",function(){
  updateScores(p1,p2);
});

p2.button.addEventListener("click",function(){
  updateScores(p2,p1);
});

selection.addEventListener('change',resetGame);

reset.addEventListener('click',resetGame);

function resetGame(){
  for(let p of [p1,p2]){
    p.button.disabled = false;
    p.display.innerHTML = 0;
    p.display.classList.remove("greenC","redC");
  }
  isGameOver = false;
}
