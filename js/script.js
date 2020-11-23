const moves = {
	1: 'kamień',
	2: 'papier',
	3: 'nożyce',
}
const winMessage = 'Ty wygrywasz!';
const looseMessage = 'Ty przegrywasz!';
const drawMessage = 'Remis!';


function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}




let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
}
if(randomNumber == 2){
computerMove = 'papier';
}
if(randomNumber == 3){
computerMove = 'nożyce';
}
printMessage('Mój ruch to: ' + computerMove);
*/


// LOSOWANIE

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
/*
if(playerInput == '1'){
  playerMove = 'kamień';
}
if(playerInput == '2'){
	playerMove = 'papier';
}
if(playerInput == '3'){
playerMove = 'nożyce';
}


printMessage('Twój ruch to: ' + playerMove);

if(computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Ty wygrywasz!');
} 
if(computerMove == 'papier' && playerMove == 'nożyce'){
	printMessage('Ty wygrywasz!');
}
if(computerMove == 'nożyce' && playerMove == 'kamień'){
	printMessage('Ty wygrywasz!');
}


if(randomNumber == playerInput) {
	printMessage('Remis!');
}

if(computerMove == 'papier' && playerMove =="kamień"){
	printMessage('Ty przegrywasz!');
}
if(computerMove == 'nożyce' && playerMove =="papier"){
	printMessage('Ty przegrywasz!');
}
if(computerMove == 'kamień' && playerMove =="nożyce"){
	printMessage('Ty przegrywasz!');
}
*/


function getMoveName(argMoveId){
	if(argMoveId >=1 && argMoveId <=3){
	  return moves[argMoveId];
	} else {
	  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	  return 'nieznany ruch';
	}
}
  
  
  function displayResult(argComputerMove, argPlayerMove){
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);


	if (moves[1] == playerMove) {
		if (computerMove == moves[2]) {
			printMessage(looseMessage);
		} else if (computerMove == playerMove) {
			printMessage(drawMessage);
		} else {
			printMessage(winMessage);
		}
	} else if (moves[2] == playerMove) {
		if (computerMove == moves[3]) {
			printMessage(looseMessage);
		} else if (computerMove == playerMove) {
			printMessage(drawMessage);
		} else {
			printMessage(winMessage);
		}
	} else {
		if (computerMove == moves[1]) {
			printMessage(looseMessage);
		} else if (computerMove == playerMove) {
			printMessage(drawMessage);
		} else {
			printMessage(winMessage);
		}
	}

	



  }
console.log(playerMove, computerMove);
  displayResult(computerMove, playerMove);


