var randWord = commonWords[Math.floor(Math.random() * commonWords.length)];
console.log(randWord);

for (var i = 0; i < randWord.length; i++) {
  var char =document.createElement('span');
  char.textContent = ' _';
  document.querySelector(".spaces").appendChild(char);
}
