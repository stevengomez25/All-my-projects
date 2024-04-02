
export class Question{
    /**
     *
     * @param {string} text//This is the question's text
     * @param {string[]} choices//these are the choices
     * @param {string} answer//This is the answer
     */
    constructor(text,choices,answer) {
        this.text =text;
        this.choice = choices;
        this.answer = answer;
    }
    
    /**
     *
     * @param {string} choice //This is what you guessed
     * @returns {boolean}//This is the answer you guessed
     */
    
    correctAnswer(choice){
        return choice === this.answer;
    }

}
