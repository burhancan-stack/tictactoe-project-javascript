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