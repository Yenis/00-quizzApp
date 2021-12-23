
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let currentQuestionIndex = 0;

class DOMhandler {
    constructor(onAnswerSubmit) { // pozvati ovaj callback
      this.initializeDOMlisteners();
    }
    displayCurrentQuestionOnPage(question) {
      questionElement.innerText = question.questionName;
      question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.addEventListener("click", this.evaluateAnswer);
        answerButtonsElement.appendChild(button);
      });
    }
    initializeDOMlisteners() {
      startButton.addEventListener("click", (question) => {
        startButton.classList.add("hide");
        questionContainerElement.classList.remove("hide");
        this.displayCurrentQuestionOnPage(question);
      });
      
      nextButton.addEventListener("click", (question) => {
        this.displayCurrentQuestionOnPage(question);
      })
    }
    onAnswerSubmit(anwerId) {
      var correctAnswer = this._currentQuestion.answers.result;
      this._complededQuestions.push(this._currentQuestion); // we need to store also an aswer into completedQuestions
      this._lastSubmitedQuestion = this._currentQuestion;
     // this._currentQuestion = null;
      return correctAnswer;
    }
    setAnswerCorrect() {

    }
    setAnswerWrong() {
   
    }
    next() {

    }
  }



  export { DOMhandler }