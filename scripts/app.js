//magicxD
const gameData= [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

let editedPlayer = 0;
let activePlayer = 0;
const players = [
    { name: '',
     symbol: 'X'
    },
    { name: '',
     symbol: 'O'
    },
];





const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const startGameBtnElement = document.getElementById('startGameBtn');
const gameAreaElement = document.getElementById('active-game');
const gameFieldElements = document.querySelectorAll('#game-board li');



const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelButton = document.getElementById('cancelBtn');
const activePlayerName = document.getElementById('active-player-name');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
cancelButton.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig);
startGameBtnElement.addEventListener('click', startNewGame);

for(const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', selectGameField)
}