let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';
let computerRnd;
let computerMove;
let score;

//score 1 lose score 3 win


if(playerInput == 1 || playerInput == 2 || playerInput == 3){
  console.log('Input git');
} else {
  alert('Zly wybor!');
}

computerRnd = Math.floor(Math.random() * 3) + 1;



if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nozyce';
}


if(computerRnd == '1'){
  computerMove = 'kamień';
} else if (computerRnd == '2') {
  computerMove = 'papier';
} else if (computerRnd == '3') {
  computerMove = 'nozyce';
}


if(playerInput == computerRnd){
  score = 'Tie';
} else if(playerInput == 1 && computerRnd == 3){
  score = 3;
} else if(playerInput == 2 && computerRnd == 1){
  score = 3;
} else if(playerInput == 3 && computerRnd == 2){
  score = 3;
} else {
  score = 1;
}



if(score > 2){
  score = "Win";
} else if(score < 2){
  score = "Lose";
}


printMessage('Twój ruch to: ' + playerMove);
printMessage('Ruch komputera to: ' + computerMove);
printMessage(score);

console.log('K.wylosowal ' + computerRnd);
console.log("score "+ score);
