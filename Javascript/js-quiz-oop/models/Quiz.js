//@ts-check
import {Question} from './question.js';

export class Quiz{
    questionIndex = 0;
    score = 0;

    /**
     *
     * @param {Question[]} questions
     */
    constructor(questions){
        this.questions = questions;
    }
    /**
     *
     * @returns {Question}//Question found
     */
    getQuestionIndex(){
        return this.questions[this.questionIndex]
    }

    isEnded(){
        return this.questions.length === this.questionIndex;
    }
    /**
     *
     * @param {string} answer some text
     */
    guess(answer){
        if(this.getQuestionIndex().correctAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
    }
}
