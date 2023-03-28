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
    return {resultText, winOrLose}
}



//Game Loop
function game(input) {
    // for (let i=0; i<1; i++) {
    {
    const computerSelection = getComputerChoice();
        // const input = prompt();
        // console.log("You chose: " + capitalise(input));
        // console.log("Computer chose: " + capitalise(computerSelection.returnChoice));
        // console.log(playerSelection(input.toLowerCase(), computerSelection.returnChoice));

        

        // run the game logic
        const result = (playerSelection(input.toLowerCase(), computerSelection.returnChoice));
        
        // increase result count for win, lose, or tie
        count[result.winOrLose]++;

        //using DOM to display console log responses and display results of game 
        response.innerText+=("You chose: " + capitalise(input) + "\n"); //display player selection
        response.innerText+=("Computer chose: " + capitalise(computerSelection.returnChoice) + "\n"); //display computer selection
        response.innerText += result.resultText + "\n"; //display win or lose message
        response.innerText += `Wins: ${count.win} \n` // display win count
        response.innerText += `Losses: ${count.lose} \n` // display lose count
        response.innerText += `Ties: ${count.tie} \n` // display tie count

        //display winner result once wins become 5 and reset count
        if (count.win===5) {
            response.innerText += 'You Win! Click a button to start again!'
            Object.keys(count).forEach(key=>count[key]=0);
        }
        if (count.lose===5) {
            response.innerText += 'You Lose! Click a button to start again!'
            Object.keys(count).forEach(key=>count[key]=0);
        }
        
    }
}

//Initializing variables
// Select the button container
const div = document.querySelector('div.button-container');

// Select the response paragraph
const response = document.querySelector('.response');

// initialize result counter object
let count = {
    win: 0,
    lose: 0,
    tie: 0,
};


// Add event listener to the whole container
div.addEventListener("click", (event)=> {
    //Only triggers if the clicked item was a button
    if (event.target.tagName === "BUTTON") {
        const selection = (event.target.innerText);
        // triggers game with the selected button
        // resets paragraph text to empty
        response.innerText=" "
        game(selection);

    }
})

// Place event listener on each individual button
// const buttons = document.querySelector('.button-container').querySelectorAll('button');
// let clicked = buttons.forEach(item=>{
//     item.addEventListener('click', ()=>console.log(item))
// })


