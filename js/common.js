// common utility function for selection section
function getSelectedPlayerNameByUsingId(elementId, selectPlayerName) {

    let playerInList = document.getElementById('player-list').childElementCount;

    if (playerInList < 5) {
        const newList = document.createElement("li");
        const playerName = document.getElementById(selectPlayerName).innerText;
        const newListText = document.createTextNode(playerName);
        newList.appendChild(newListText);
        const playerList = document.getElementById('player-list');
        playerList.appendChild(newList);

        document.getElementById(elementId).disabled = true;
    }
    else {
        alert('Already Five Player are selected');
    }

}

// common utility function for budgets Section

function getInputValueByUsingId(elementId) {
    const inputFieldElement = document.getElementById(elementId);
    const inputFieldElementString = inputFieldElement.value;
    const inputFieldValue = parseInt(inputFieldElementString);

    if (isNaN(inputFieldValue)) {
        alert('This is Not a Number. Please Enter Number');
        inputFieldElement.value = '';
        return;
    }

    return inputFieldValue;
}
