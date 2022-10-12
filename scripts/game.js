<<<<<<< HEAD
function startNewGame() {
    if (players[0].name.length == 0 || players[1].name.length == 0) {
        alert('Please set custom names for both players')
        return; //program buradan sonra deavm etmeyecek.
    }
    gameAreaElement.style.display = "block";

    resetGameStatus();
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
        activePlayerName.textContent = players[activePlayer].name;
    } else {
        activePlayer = 0;
        activePlayerName.textContent = players[activePlayer].name;
    }


}

function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gameOverElement.firstElementChild.innerHTML = '<h2>You Won<span id="winner-name">PLAYER_NAME</span>!</h2>';
    gameOverElement.style.display = "none";

    let gameBoardIndex = 0;
    for(let i =0; i < 3; i++) {
        for(let j = 0; j <3; j++) {
            gameData[i][j] = 0;
            const gameBoardItemElement = gameFieldElements.children[gameBoardIndex];
            gameBoardItemElement.textContent = '';
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
    gameIsOver = true;
};

function selectGameField(event) {
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;


    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('please select another box! its clicked before.');
        return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');

    gameData[selectedRow][selectedColumn] = activePlayer + 1;


    const winnerId = checkForGameOver();
    console.log(winnerId);

    // if(winnerId !== 0) {
    //     endGame(winnerId);
    // }

    console.log(gameData);
    currentRound = currentRound + 1;
 
    

    switchPlayer(); //function execute kısımı



};

function checkForGameOver() {
        //checking the rows for equality
    for(let i = 0; i < 3; i++) {
        if(
            gameData[i][0] >  0 && 
            gameData[i][0] === gameData[i][1] && 
            gameData[i][1] === gameData[i][2]
        ) {
            return gameData[i][0];
        }
    }

    //checking the columns 
    for(let i = 0; i < 3; i++) {
        if(
            gameData[0][i] >  0 && 
            gameData[0][i] === gameData[1][i] && 
            gameData[0][i] === gameData[2][i]
        ) {
            return gameData[0][i];
        }
    }

    if(
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
    ) {
        return gameData[0][0];
    }


    if(
        gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]
    ) {
        return gameData[2][0];
    }


    if(currentRound === 9) {
        alert('its a draw!');
        return -1;
    }
    return 0;

    
};

function endGame(winnerId) {
    gameOverElement.style.display = 'block';
   
    
    if(winnerId > 0) {  
        const winnerName = players[winnerId -1].name;
        gameAreaElement.firstElementChild.firstElementChild.textContent = winnerName;
    }
    else {
        gameAreaElement.firstElementChild.textContent = 'Its a draw!';
    }

    gameIsOver = true;
};
=======
function startNewGame() {
    if(players[0].name.length == 0 || players[1].name.length == 0) {
        alert('Please set custom names for both players')
        return; //program buradan sonra deavm etmeyecek.
    } 
        gameAreaElement.style.display = "block";
}

function switchPlayer() {
    if(activePlayer === 0) {
        activePlayer = 1;
        activePlayerName.textContent = players[activePlayer].name;
    } else {
        activePlayer = 0;
        activePlayerName.textContent = players[activePlayer].name;
    }

  
}

function selectGameField(event) {
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row -1;


    if(gameData[selectedRow][selectedColumn] > 0) {
        alert('please select another box! its clicked before.');
        return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');


  

    gameData[selectedRow][selectedColumn] = activePlayer +1;

    console.log(gameData);

    switchPlayer(); //function execute kısımı


 
}
>>>>>>> 417f85641f43f9f4ab0483987c285ccc4fc77eb9
