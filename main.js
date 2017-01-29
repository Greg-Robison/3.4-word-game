var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


var randWord = commonWords[Math.floor(Math.random() * commonWords.length)];
console.log(randWord);

for (var i = 0; i < randWord.length; i++) {
  var char = document.createElement('span');
  char.id = "letter-" + i;
  char.textContent = ' _';
  document.querySelector(".spaces").appendChild(char);
}

var checkGuess = function functionName(event){
for (var i = 0; i < randWord.length; i++) {
  if(randWord[i] == event.target.textContent){
    document.querySelector("#letter-" + i).textContent = randWord[i];
  }

}
};



for (var i = 0; i < alphabet.length; i++) {
  var letter = document.createElement('button');
  letter.textContent = alphabet[i];
  document.querySelector(".letters").appendChild(letter);
  letter.addEventListener("click", checkGuess)
}
