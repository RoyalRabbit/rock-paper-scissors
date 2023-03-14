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
    return randomNumber + returnChoice
}

for (let i=0; i<10; i++) {
    console.log(getComputerChoice())
}