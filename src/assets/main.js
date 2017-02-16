let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let messageLabel = document.getElementById('message');
let results = document.getElementById('results');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value === '' || attempt.value === 0) {
        setHiddenFields();
    }
    
    if (!validateInput(input.value)) {
        return false;
    } else {
        attempt.value = parseInt(attempt.value) + 1;
    }
    
    if (getResults(input.value)) {
        setMessage("You Win!");
    } else if (attempt.value >= 10) {
        setMessage("You Lose! :(");
    } else {
        setMessage("Incorrect, try again.");
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
    messageLabel.innerHTML = message;
}

function validateInput(input) {
    if (input.length === 4) {
        return true;
    } else {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}

function getResults(guess) {
    guessArray = guess.toString().split("");
    answerArray = answer.value.toString().split("");
    let result = '<div class="row"><span class="col-md-6">' + guess + '</span><div class="col-md-6">';
    for (let i = 0; i < 4; i++) {
        if (guessArray[i] === answerArray[i]) {
            result = result + '<span class="glyphicon glyphicon-ok"></span>';
        } else if(answerArray.includes(guessArray[i])) {
            result = result + '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            result = result + '<span class="glyphicon glyphicon-remove"></span>';      
        }
    }
    result = result + '</div></div>';
    results.innerHTML = results.innerHTML + result;
    
    if (guess.toString() === answer.value) {
        return true;
    } else {
        return false;
    }
}