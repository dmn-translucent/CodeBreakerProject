let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields() {
    answer = Math.random() * (9999 - 0) + 0;
    answer = Math.floor(answer);
    answer = answer.toString();
    while (answer.length < 4) {
        answer = 0 + answer;
    }
    console.log(answer);
    
    attempt = 0;
}

setHiddenFields();