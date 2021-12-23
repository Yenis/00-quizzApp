const questionElement = document.getElementById("question");
const nextButton = document.getElementById("next-btn");
const answerButtonsElement = document.getElementById("answer-buttons");

class QuizEngine {
  _questions = [];
  _currentQuestion = null;
  _complededQuestions = [];
  _lastSubmitedQuestion = null;
  constructor(questions) {
    this._questions = questions;
  }
  setNextQuestion(question, currentQuestionIndex) {
    this._currentQuestion = this._questions[currentQuestionIndex];
    this._currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.addEventListener("click", this.onAnswerSubmit(answer));
      answerButtonsElement.appendChild(button);
    });
  }
  evaluateAnswer(answerId) {
    var isCorrectAnswer = this.engine.sumbitAnswer(answerId);
    if(isCorrectAnswer == true){
      domHandler.setAnswerCorrect();
    } else {
      domHandler.setAnswerWrong();
    }

    if ((getQuestionsFromDatabase().length) > currentQuestionIndex + 1) {
      nextButton.classList.remove("hide");
    } else {
      currentQuestionIndex = -1;
      nextButton.classList.remove("hide");
    }
  }

  onAnswerSubmit(anwerId) {
    var correctAnswer = this._currentQuestion.answers.result;
    this._complededQuestions.push(this._currentQuestion); // we need to store also an aswer into completedQuestions
    this._lastSubmitedQuestion = this._currentQuestion;
   // this._currentQuestion = null;
    return correctAnswer;
  }
  goToNextQuestion() {
    this._currentQuestion = this._questions.find(); // find based on _this._lastSubmitedQuestion
    return this._currentQuestion;
  }
  resetState() {
    questionElement.innerText = document.body.questionText;
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
  saveQuestionResults() {}
}


export { QuizEngine };
