{
	function playGame(playerInput) {








		const moves = {
			1: 'kamień',
			2: 'papier',
			3: 'nożyce',
		}
		const winMessage = 'Ty wygrywasz!';
		const looseMessage = 'Ty przegrywasz!';
		const drawMessage = 'Remis!';


		function printMessage(msg) {
			let div = document.createElement('div');
			div.innerHTML = msg;
			document.getElementById('messages').appendChild(div);
		}

		function clearMessages() {
			document.getElementById('messages').innerHTML = '';
		}

		let randomNumber = Math.floor(Math.random() * 3 + 1);

		console.log('Wylosowana liczba to: ' + randomNumber);

		let computerMove = getMoveName(randomNumber);

		// LOSOWANIE
		/* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
		console.log('Gracz wpisał: ' + playerInput);
		*/
		let playerMove = getMoveName(playerInput);

		function getMoveName(argMoveId) {
			if (argMoveId >= 1 && argMoveId <= 3) {
				return moves[argMoveId];
			} else {
				printMessage('Nie znam ruchu o id ' + argMoveId + '.');
				return 'nieznany ruch';
			}
		}

		function displayResult(argComputerMove, argPlayerMove) {
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
	}
	playGame(2)

	const buttonRock = document.getElementById("play-rock");
	const buttonPaper = document.getElementById("play-paper");
	const buttonScissors = document.getElementById("play-scissors");

	buttonRock.addEventListener('click', function () {
		playGame(1);
	})

	buttonPaper.addEventListener('click', function () {
		playGame(2);
	})

	buttonScissors.addEventListener('click', function () {
		playGame(3);
	})

	console.log('Change');
	// send to git
}