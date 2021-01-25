
function playGame(playerInput){
  clearMessages();


  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamien';
    }
    if(argMoveId == 2){
      return 'papier';
    }
    if(argMoveId == 3){
      return 'nozyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }


  function displayResult(argComputerMove, argPlayerMove){


    if(argComputerMove == argPlayerMove){
      return 'tie';
    }

    if(argComputerMove == 'kamien' && argPlayerMove == 'nozyce'){
      return 'lose';
    }

    if(argComputerMove == 'papier' && argPlayerMove == 'kamien'){
      return 'lose';
    }

    if(argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
      return 'lose';
    }

      return 'Win';

  }


  
  //let playerMove = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  const playerMove = getMoveName(playerInput);
  let computerRnd = Math.floor(Math.random() * 3) + 1;
  let computerMove = getMoveName(computerRnd);

  console.log('K.wylosowal: '+ computerMove);
  console.log('Gracz wybral: '+ playerMove);
  console.log('Status: '+ displayResult(computerMove, playerMove));


  printMessage('Ruch komputera: ' + computerMove + '.');
  printMessage('Twoj wybor: ' + playerMove + '.');
  printMessage('Wynik: ' + displayResult(computerMove, playerMove));

  


 
  
}


let playrockBtn = document.getElementById('play-rock');
playrockBtn.addEventListener('click', function(){
  playGame(1);
});

let playpaperBtn = document.getElementById('play-paper');
playpaperBtn.addEventListener('click', function(){
  playGame(2);
});

let playscissorsBtn = document.getElementById('play-scissors');
playscissorsBtn.addEventListener('click', function(){
  playGame(3);
});

