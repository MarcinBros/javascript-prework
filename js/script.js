function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nożyce';
    }
    else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }



let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
}  else if (randomNumber == 2){
    computerMove = 'papier';
}  else {
    computerMove = 'nożyce';
}*/

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if( playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
    playerMove = 'papier';
} else if( playerInput == '3'){
    playerMove = 'nożyce';
} else playerMove = 'Nieznany ruch'; */

printMessage('Twój ruch to: ' + playerMove);

/*if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if (computerMove == 'kamień' && playerMove == 'nożyce'){
      printMessage("Wygrywam!");
  } else if(computerMove == 'kamień' && playerMove == 'kamień'){
      printMessage('Remis!');
  }

  if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  } else if (computerMove == 'papier' && playerMove == 'kamień'){
      printMessage("Wygrywam!");
  } else if(computerMove == 'papier' && playerMove == 'papier'){
      printMessage('Remis!');
  }

  if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else if (computerMove == 'nożyce' && playerMove == 'papier'){
      printMessage("Wygrywam!");
  } else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
      printMessage('Remis!');
  } */

 function displayResult(argComputerMove, argPlayerMove){
    if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
        return 'Ty wygrywasz!';
    } else if ((argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || (argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'nożyce' && argPlayerMove == 'papier')){
        return 'Wygrywam!';
    } else if (argComputerMove == argPlayerMove){
        return'Remis!';
    } 
 }
        /*
    }  else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        return'Ty wygrywasz!';
      } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
          return"Wygrywam!";
      } else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
          return'Remis!';
      }
    
       else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        return'Ty wygrywasz!';
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
          return'Wygrywam!';
      } else (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
          return'Remis!';
      } */

let gameResult = displayResult(computerMove, playerMove);

printMessage('Wynik gry:' + gameResult);
    
