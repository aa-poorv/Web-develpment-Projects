let green = document.querySelector("#green");
let red = document.querySelector("#red");
let yellow = document.querySelector("#yellow");
let blue = document.querySelector("#blue");
let levelTitle = document.querySelector("#level-title");

let isGameOver = true;

let j = 0;
let sequence = [];
let buttons = [green, red, yellow, blue];
let colors = ["green", "red", "yellow", "blue"];

function randomNo() {
  let colorNo = Math.random() * 4;
  return Math.floor(colorNo);
}

function newClick(colorNo) {
  buttons[colorNo].classList.add("pressed");
  setTimeout(function() {
    buttons[colorNo].classList.remove("pressed");
  }, 125);
  let sound1 = new Audio(`sounds/${colors[colorNo]}.mp3`);
  sound1.play();
}

function start() {
  levelTitle.innerHTML = `Level ${sequence.length+1}`;
  let colorNo = randomNo();
  sequence.push(colorNo);
  if (sequence.length == 1) {
    newClick(colorNo);
  } else {
    setTimeout(function() {
      newClick(colorNo);
    }, 1000)
  }
  j = 0;
}

for (let i = 0; i < 4; i++) {
  buttons[i].addEventListener("click", function() {
    buttons[i].classList.add("pressed");
    setTimeout(function() {
      buttons[i].classList.remove("pressed");
    }, 125);
    if (isGameOver == false && colors[sequence[j]] == colors[i]) {
      j++;
      let sound1 = new Audio(`sounds/${colors[i]}.mp3`);
      sound1.play();
    } else {
      isGameOver = true;
      let sound2 = new Audio("sounds/wrong.mp3");
      sound2.play();
      document.body.classList.add("game-over");
      setTimeout(function() {
        document.body.classList.remove("game-over");
      }, 125);
      levelTitle.innerHTML = "GAME OVER!! Press a key to Restart";
    }

    if (isGameOver == false && j >= sequence.length) {
      start();
    }
  });
}

document.addEventListener("keydown", function() {
  if (isGameOver == true) {
    sequence.length = 0;
    isGameOver = false;
    start();
  }
});
