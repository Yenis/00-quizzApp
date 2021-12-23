import { getQuestionsFromDatabase } from "./utils.js";
import { QuizEngine } from "./quizEngine.js";
import { DOMhandler } from "./models/domHandler.js";

const numberOfQuestions = getQuestionsFromDatabase().length;
let currentQuestionIndex = 0;

class QuizMainFrame { 
  constructor() { 
    this.allQuestions = getQuestionsFromDatabase();
    this.engine = new QuizEngine(this.allQuestions, currentQuestionIndex);
    this.domHandler = new DOMhandler(this.engine.evaluateAnswer);
  }

}

// Questions from Databse ALL > Main App > new Question > DOM handler to Display Question
// Receive user input > DOM Handler > Main App to Evaluate and process Data and Reports
// Main App > DOM Handler to display result > Next Button >
//                                            Main App > new Question > DOM Handler > Repeat

const quizMainFrame = new QuizMainFrame();

quizMainFrame.engine.resetState();
quizMainFrame.engine.setNextQuestion(quizMainFrame.allQuestions, currentQuestionIndex);
quizMainFrame.domHandler.displayCurrentQuestionOnPage(quizMainFrame.allQuestions[currentQuestionIndex]);


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