//all the logic in this js.

function openPlayerConfig(event) {
    const selectedPlayerId = Number(event.target.dataset.playerid);
    playerConfigOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
    editedPlayer = selectedPlayerId;
    console.log("Player: " + editedPlayer);
    console.log(typeof selectedPlayerId)


}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = "none";
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.style.display = "none";
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get("username").trim();
    console.log(enteredPlayername);

    if(!enteredPlayername) {
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        errorsOutputElement.style.display = "block";
    }

    const updatedPlayerDataElement = document.getElementById("player-"+editedPlayer.toString()+"-data");
    console.log(updatedPlayerDataElement)
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;
    // playerConfigOverlayElement.style.display = "none";
    // backdropElement.style.display = "none";
    
    // if(editedPlayer === 1) {
    //     players[0].name = enteredPlayername;
    // } else {
    //     players[1].name = enteredPlayername;
    // }

    players[editedPlayer- 1].name = enteredPlayername;

    closePlayerConfig();

  }

