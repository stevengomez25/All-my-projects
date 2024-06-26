import {questions} from "./data/questions.js"

import {Quiz} from "./models/Quiz.js"

import {UI} from "./models/UI.js"

/**
 * 
 * @param {quiz} quiz main quiz object
 * @param {ui} ui UI object
 */

const renderPage = (quiz,ui) =>{
    if (quiz.isEnded()){
        console.log(quiz.score);
        ui.showScores(quiz.score);
    }
    else{ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoises(quiz.getQuestionIndex().choice,(currentChoice)=>{
        quiz.guess(currentChoice);
        renderPage(quiz,ui)});
}
ui.showProgress(quiz.questionIndex+1,quiz.questions.length);
}


function main(){

    const quiz = new Quiz(questions);
    const ui = new UI();

    renderPage(quiz,ui);
}



main();