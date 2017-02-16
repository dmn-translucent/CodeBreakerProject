let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let messageLabel = document.getElementById('message');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer === '' || attempt === '') {
        setHiddenFields();
    }
}

//implement new functions here
function setHiddenFields() {
    answer.value = Math.random() * (9999 - 0) + 0;
    answer.value = Math.floor(answer.value);
    answer.value = answer.value.toString();
    while (answer.value.length < 4) {
        answer.value = 0 + answer.value;
    }
    
    attempt.value = 0;
}

function setMessage(message) {
    messageLabel.innerHTML(message);
}

function validateInput(input) {
    if (input.length === 4) {
        return true;
    } else {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}