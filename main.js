import { getQuestionsFromDatabase, onSubmitHandler } from "./utils.js";
import { Question } from "./models/question.js";
import { DOMhandler } from "./models/domHandler.js";

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const numberOfQuestions = getQuestionsFromDatabase().length;
let currentQuestionIndex = 0;

// Questions from Databse ALL > Main App > new Question > DOM handler to Display Question
// Receive user input > DOM Handler > Main App to Evaluate and process Data and Reports
// Main App > DOM Handler to display result > Next Button >
//                                            Main App > new Question > DOM Handler > Repeat

class QuizMainFrame {
  constructor() {
    this.allQuestions = getQuestionsFromDatabase();
    console.log(this.allQuestions); //TODO Remove Later
  }
  setNextQuestion() {
    this.resetState();
    let currentQuestion = new Question(this.allQuestions[currentQuestionIndex]);
    questionElement.innerText = currentQuestion.questionName;
    currentQuestion.qAnswers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.addEventListener("click", this.evaluateAnswer);
      answerButtonsElement.appendChild(button);
    });
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
  resetState() {
    questionElement.innerText = document.body.questionText;
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
  saveQuestionResults() {}
}
const quizMainFrame = new QuizMainFrame();
const domHandler = new DOMhandler();

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

//-----------------------
/*
// Initialize DOM handler
const domHandler = new DOMhandler(onSubmitHandler);
// Display Question and Answer Buttons
domHandler.displayQuestionOnPage();
// Get user input and return it to MainFrame for Evaluation
quizMainFrame.evaluateAnswer(domHandler.getUserInput());
// Evaluate Question

// Display the results in DOM handler
domHandler.displayResult(function isCorrect() {});
// Save Question Results
quizMainFrame.saveQuestionResults();

// Next Question
domHandler.next();
domHandler = new DOMhandler(
  quizMainFrame.spitOutNextQuestion(currentQuestionID)
);
domHandler.displayQuestionOnPage();
// And Repeat
//-----------------------------

// sta ce se desiti kada se klikne submitHandler, definisati funkciju(question kao parametar tipa Question)
// data-answer = 1 Custom Atributi - trenutni selektovani data-answer i njegov ID proslijediti

// quizz.next()
// let currentQuestion = quizz.getCurrentQuestion();
// domHandler.displayQuestion(currentQuestion);
*/
export { QuizMainFrame, quizMainFrame }