import { quizMainFrame } from "../main.js";
import { Question } from "./question.js";

class DOMhandler {
    constructor() {

    }
    setNextQuestion() {
      quizMainFrame.resetState();
      let currentQuestion = new Question(quizMainFrame.allQuestions[currentQuestionIndex]);
      questionElement.innerText = currentQuestion.questionName;
      currentQuestion.qAnswers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.addEventListener("click", this.evaluateAnswer);
        answerButtonsElement.appendChild(button);
      });
    }
    displayResult(isCorrect) {
  
    }
    next() {
  
    }
  }

  export { DOMhandler }