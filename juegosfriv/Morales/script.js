const secretNumber = Math.floor(Math.random() * 100) + 1;
let numGuesses = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const feedback = document.getElementById("feedback");
  
  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedback.innerText = "Introduce un número válido";
    return;
  }
  
  numGuesses++;
  
  if (guess === secretNumber) {
    feedback.innerText = `¡Acertaste en ${numGuesses} intentos!`;
  } else if (guess < secretNumber) {
    feedback.innerText = "El número es mayor";
  } else {
    feedback.innerText = "El número es menor";
  }
}

if (guess < numberToGuess) {
  status.innerHTML = "El número es mayor que " + guess;
} else if (guess > numberToGuess) {
  status.innerHTML = "El número es menor que " + guess;
} else {
  // Código que se ejecuta si el jugador adivinó el número
}

var attempts = 0;
var maxAttempts = 5; // Límite de intentos

function guessNumber() {
  var guess = Number(document.getElementById("guess").value);
  
  if (attempts < maxAttempts) {
    attempts++;
    
    // Código para comprobar si el jugador adivinó el número
  } else {
    status.innerHTML = "Lo siento, has superado el límite de intentos. El número era " + numberToGuess + ".";
    disableInputAndButton();
  }
}

var minNumber = 1;
var maxNumber = 10;
var maxAttempts = 5;

function setDifficulty(difficulty) {
  if (difficulty === "easy") {
    minNumber = 1;
    maxNumber = 10;
    maxAttempts = 5;
  } else if (difficulty === "medium") {
    minNumber = 1;
    maxNumber = 50;
    maxAttempts = 7;
  } else if (difficulty === "hard") {
    minNumber = 1;
    maxNumber = 100;
    maxAttempts = 10;
  }
  
  resetGame();
}

var guesses = [];

function guessNumber() {
  var guess = Number(document.getElementById("guess").value);
  
  guesses.push(guess);
  
  // Código para comprobar si el jugador adivinó el número
  
  updateHistory();
}

function updateHistory() {
  var history = document.getElementById("history");
  history.innerHTML = "";
  
  for (var i = 0; i < guesses.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = guesses[i];
    
    if (guesses[i] < numberToGuess) {
      li.classList.add("too-low");
    } else if (guesses[i] > numberToGuess) {
      li.classList.add("too-high");
    } else {
      li.classList.add("correct");
    }
    
    history.appendChild(li);
  }
}
