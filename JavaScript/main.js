import { ProblemBuilder } from "./javascript/buildProblem";
import {BuildInterface} from "/playerInterface";

let newProblem = new ProblemBuilder();
let playerInterface;

function startGame() {
    $('.startContainer').html('');
    $('.stageContainer').html(`<div class='choosePlayer'>`+
        `<h2>Choose Player</h2>` +
        `<div class="alienContainer"><img onclick="interfaceInfo(this.src)" class="alien" src="../Images/blackAlien.png"><img onclick="interfaceInfo(this.src)" class="alien" src="../Images/greenAlien.png"><img onclick="interfaceInfo(this.src)" class="alien" src="../Images/tealAlien.png"> </div>` +
        `</div>`);
    playerInterface.build();
    newProblem.build();
}

function interfaceInfo(imgSrc) {
    playerInterface = new BuildInterface(imgSrc);
}

function checkAnswer(value){
    let answer = newProblem.numOne * newProblem.numTwo;
    if(Number(value) === Number(answer)) {
        console.log('Correct!');
        playerInterface.correct++;
        let newProblem = new ProblemBuilder();
        newProblem.build();
    }
    else {
        console.log('Wrong!');
        playerInterface.lives--;
        if(playerInterface.lives > 0) {
            let newProblem = new ProblemBuilder();
            newProblem.build();
        }
        else {
            console.log('Game Over');
        }
    }
}