import { getQuestionsFromDatabase } from "../utils.js";

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const numberOfQuestions = (getQuestionsFromDatabase()).length;

class QuizMainFrame {
  constructor() {
    this.allQuestions = getQuestionsFromDatabase();
  }
  setNextQuestion() {
    this.resetState();
    let currentQuestion = (this.allQuestions)[currentQuestionIndex];
    questionElement.innerText = currentQuestion.questionText;
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.addEventListener("click", this.evaluateAnswer);
      answerButtonsElement.appendChild(button);
    });
  }
  resetState() {
    questionElement.innerText = document.body.questionText;
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
  evaluateAnswer(userInput) {
    const selectedButton = userInput.target;
  
    if (selectedButton) {
      questionElement.innerText = "CORRECT";
      questionElement.innerText = "WRONG";
    }
  
    if (numberOfQuestions > currentQuestionIndex + 1) {
      nextButton.classList.remove("hide");
    } else {
      currentQuestionIndex = -1;
      nextButton.classList.remove("hide");
    }
  }
  saveQuestionResults() {

  }
}
// STEP 3 - Initialize Mainframe
const quizMainFrame = new QuizMainFrame;
console.log(quizMainFrame.allQuestions) // TODO - remove Test
let currentQuestionIndex = 0;


startButton.addEventListener("click", () => {
  startButton.classList.add("hide");
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  quizMainFrame.setNextQuestion();
});

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  quizMainFrame.setNextQuestion();
});


// STEP 4 - Set Up Question Model
class Question {
  constructor(questionData) {
    this.questionName = questionData.questionText;
    this.qAnswers = questionData.answers;
    this.isCompleted = false;
    this.result = false;
  }
}

// STEP 5 - Set up DOM Handler
class DOMhandler {
  constructor(onSubmitHandler) {
    this.newQuestion = new Question();
  }
  initializeEvents() {
    let singleButton = document.getElementById("button");
    singleButton.addEventListener("click", onSubmitHandler(quizMainFrame.currentQuestionID));
  }
  displayQuestionOnPage(newQuestion) {

  }
  getUserInput(inputButton) {

  }
  displayResult(isCorrect) {

  }
  next() {

  }
}
