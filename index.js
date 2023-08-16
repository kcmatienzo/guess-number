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
    // When guess is wrong
  } else if (input_number !== random_number) {
    if (score > 1) {
      score--;
      messageDisplay(input_number > random_number ? "📈 Lower" : "📉 Higher");
      document.querySelector(".score").innerText = score;
    } else {
      messageDisplay("💥 You lost the game!");
      document.querySelector(".score").innerText = 0;
      document.querySelector(".highscore").innerText = 0;
      document.querySelector(".check").disabled = true;
    }
    //When guess is correct
  } else {
    if (score > highscore) {
      highscore = score;
      messageDisplay(`🎉 Your high score is ${highscore}!`);
    } else {
      messageDisplay("🎉 You guessed it right!");
    }
    document.querySelector("body").style.backgroundColor = "#AEE938";
    document.querySelector(".highscore").innerText = highscore;
    document.querySelector(".outputNumberText").innerHTML = random_number;
    document.querySelector(".check").disabled = true;
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
    document.querySelector(".check").disabled = false;
    document.querySelector(".score").innerText = score;
    document.querySelector(".outputNumberText").innerHTML = "?";
    document.querySelector("body").style.backgroundColor = "#fff0e5";
    console.log("New random number: " + random_number);
  });

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
