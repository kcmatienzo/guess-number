"use strict";

let random_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const input_number = Number(document.querySelector(".inputNumberText").value);
  console.log(input_number);
  let message_box = document.querySelector(".message");

  // When guess is not a valid number
  if (input_number > 20 || input_number < 1 || !input_number) {
    message_box.innerText = "⛔️ Please select numbers between 1 and 20 only!";

    // When guess is wrong
  } else if (input_number !== random_number) {
    if (score > 1) {
      score--;
      message_box.innerText =
        input_number > random_number ? "📈 Lower" : "📉 Higher";
      document.querySelector(".score").innerText = score;
    } else {
      message_box.innerText = "💥 You lost the game!";
      document.querySelector(".score").innerText = 0;
      document.querySelector(".highscore").innerText = 0;
      document.querySelector(".check").disabled = true;
    }

    //When guess is correct
  } else {
    message_box.innerText = "CONGRATULATIONS!";
    highscore = score;
    console.log(typeof highscore);
    document.querySelector(".highscore").innerText = highscore;
  }
  console.log(score);
});
console.log("Guessed number", random_number);

/* ADDED SOME IMPROVEMENT
1. Check button disabled once you lost the game
*/

/* NEEDS TO BE DONE NEXT:
1. Add functionality on RESET button
2. Fix css
3. Add accessibility 
4. Refactor code! 
*/
