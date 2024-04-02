
export class UI {
    constructor(){}

    /**
     *
     * @param {string} text Question to render
     */

    showQuestion(text){
        const questionTittel = document.getElementById('question');
        questionTittel.innerHTML = text;
    }

    /**
     *
     * @param {string[]} choices // choices of every question
     */
    showChoises(choices,callback){
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = "";

        for(let i = 0; i < choices.length; i++){
            const button = document.createElement('button');
            button.innerHTML = choices[i];
            button.className = 'button';
            choicesContainer.append(button);
            button.addEventListener('click',()=>callback(choices[i]));

        }



    };
    /**
     *
     * @param {number} score //SCORE OF WINS
     */
    showScores(score){
        const quizEndHTML = `
        <h1>Result</h1>
        <h2> Your Score: ${score}</h2>
        `
        const element = document.getElementById(`quiz`);
        element.innerHTML = quizEndHTML;
        const button = document.createElement('button');
        button.innerHTML = "RESTART";
        button.className = 'button';
        element.append(button);
        button.addEventListener('click',function(){location.reload()})

    }
    /**
     *
     * @param {number} currentIndex the current index of the quiz
     * @param {number} total total of questions
     */
    showProgress(currentIndex,total){
        const element = document.getElementById(`progress`);
        element.innerHTML = `question ${currentIndex} of ${total}`;
    }
}