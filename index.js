"use strict";

let random_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log("Random number 1: " + random_number);

document.querySelector(".check").addEventListener("click", function () {
  const input_number = Number(document.querySelector(".inputNumberText").value);
  console.log("Input number: " + input_number);
  // When guess is not a valid number
  if (input_number > 20 || input_number < 1 || !input_number) {
    messageDisplay("⛔️ Please select numbers between 1 and 20 only!");
    // When guess is wrong (too high or low)
  } else if (input_number !== random_number) {
    if (score > 1) {
      score--;
      messageDisplay(input_number > random_number ? "📈 Lower" : "📉 Higher");
      document.querySelector(".score").innerText = score;
    } else {
      messageDisplay("💥 You lost the game!");
      document.querySelector(".score").innerText = 0;
      document.querySelector(".check").disabled = true;
    }
    //When guess is correct
  } else {
    // When current score is more than the current high score, we then get the newest highscore with this message
    if (score > highscore) {
      highscore = score;
      messageDisplay(`🎉 Your high score is ${highscore}!`);
      // When you guess the number right but your score is lower than the high score, you get these message
    } else {
      messageDisplay("🎉 You guessed it right!");
    }
    resetMessage("#AEE938", random_number, true, true, input_number);
    document.querySelector(".highscore").innerText = highscore;
  }
  console.log("Score: " + score);
});

let messageDisplay = function (message) {
  document.querySelector(".message").innerText = message;
};

let reset_btn = document
  .querySelector(".resetBtn")
  .addEventListener("click", function () {
    score = 20;
    random_number = Math.trunc(Math.random() * 20) + 1;
    messageDisplay("Start guessing...");
    resetMessage("#fff0e5", "?", false, false, "");
    document.querySelector(".score").innerText = score;
    console.log("New random number: " + random_number);
  });

function resetMessage(backgroundCol, outputNum, checkBtn, inputStat, inputVal) {
  document.querySelector("body").style.backgroundColor = backgroundCol;
  document.querySelector(".outputNumberText").innerHTML = outputNum;
  document.querySelector(".check").disabled = checkBtn;
  document.querySelector(".inputNumberText").disabled = inputStat;
  document.querySelector(".inputNumberText").value = inputVal;
}
/* ADDED SOME IMPROVEMENT
1. Check button disabled once you lost the game - done
*/

/* NEEDS TO BE DONE NEXT:
1. Add functionality on RESET button - done
2. Fix css - done
3. Add accessibility 
4. Refactor code! 
5. Fix correct guess number display - done
*/
