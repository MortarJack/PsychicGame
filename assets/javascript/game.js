var choices = ["a" , "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
 "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userScore = {
  wins: 0,
  losses: 0,
  turnsLeft: 10,
  chosenLetter: []
}

var computerChoice = null;

function computerChooses(){
  this.computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
  console.log(computerChoice);
}
computerChooses();

function turnsLeft(){
  document.querySelector("#guessesLeft").innerHTML = "Turns Left: " + userScore.turnsLeft;
}
turnsLeft();

function chosenLetters(){
  document.querySelector("#guessedLetter").innerHTML = "Your Guesses so far: " + userScore.chosenLetter.join(" ");
}

function reset(){
  userScore.turnsLeft = 10;
  turnsLeft();
  userScore.chosenLetter = [];
  chosenLetters();
  computerChooses();
}

document.onkeyup = function(event){
  var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

  var exists = choices.some(function(choice){

    if(userChoice === choice){
      userScore.turnsLeft--;
      turnsLeft();
      userScore.chosenLetter.push(userChoice);
      chosenLetters();

      if(userChoice === computerChoice){
          userScore.wins++;
          alert("Wow! You really are a psychic!");
          document.querySelector("#wins").innerHTML = "Wins: " + userScore.wins;
          reset();

        } else if(userChoice !== computerChoice){
              if(userScore.turnsLeft === 0){
                  userScore.losses++;
                  alert("I thought you were a real Psychic.")
                  document.querySelector("#losses").innerHTML = "Losses: " + userScore.losses;
                  reset();
                  }
                }

      return true;      
    }

  });

  if (!exists) {
    alert("Only letters are allowed!");
  } 

};