//Function that returns rock paper or scissor
function getComputerChoice() {
    //Generate random number from 1 to 3
    let randomNumber = Math.ceil(Math.random()*3)
    let returnChoice =  ""

    //Correlate number 1-2-3 to string "rock"-"paper"-"scissor"
    switch (randomNumber){
        case 1:
            returnChoice="rock";
            break;
        case 2:
            returnChoice="paper";
            break;
        case 3:
            returnChoice="scissor";
            break;
    }

    //Return string
    return {randomNumber, returnChoice}
}

function capitalise (str) {
    str = str.toLowerCase()
    let length = str.length;
    let firstChar = str.charAt(0);
    let otherChar = str.slice(1,length);
    let fullChar = firstChar.toUpperCase() + otherChar;
    return fullChar
}

//Function that takes two parameters, determines winner and returns string
function playerSelection(humanChoice,computerChoice) {
    //convert humanChoice string to all lower case
    let winOrLose = "";
    let resultText = "";
    //Check for tie (eventually check for proper input)
    if (humanChoice===computerChoice) {
        winOrLose = "tie";
    }   else { //if not a tie, include switch statement for 3 cases
        switch (humanChoice) {
            //if human chose rock
            case "rock":
                if (computerChoice === "paper") {
                    winOrLose = "lose";
                } else {
                    winOrLose = "win";
                };
                break;

            //if human chose paper
            case "paper":
                if (computerChoice === "scissor") {
                    winOrLose = "lose";
                } else {
                    winOrLose = "win";
                };
                break;

            //if human chose scissor    
            case "scissor":
                if (computerChoice === "rock") {
                    winOrLose = "lose";
                } else {
                    winOrLose = "win";
                };
                break;
        }
    }

    //Generate resultText
    switch (winOrLose) {
        case "tie":
            resultText = "It's a tie!";
            break;
        case "win":
            resultText = `You win! ${capitalise(humanChoice)} beats ${capitalise(computerChoice)}`;
            break;
        case "lose":
            resultText = `You lose! ${capitalise(humanChoice)} is beaten by ${capitalise(computerChoice)}`;
            break;

    }
    //return string for winner
    return resultText
}



//Game Loop
function game() {
    for (let i=0; i<1; i++) {
        const computerSelection = getComputerChoice();
        const input = prompt();
        console.log("You chose: " + capitalise(input));
        console.log("Computer chose: " + capitalise(computerSelection.returnChoice));
        console.log(playerSelection(input.toLowerCase(), computerSelection.returnChoice));
    }
}

// game()