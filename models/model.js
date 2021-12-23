const QuestionTypeEnums = {
  SingleAnswer,
  MultiAnswer,
};
Object.freeze(QuestionTypeEnums);
// Enums are not supported in JavaScript natively.
// We can however create Enums using Object.freeze by creating objects
// containing all the enumerable properties and then freezing the object
// so that no new enum can be added to it.

Object.prototype.can = function(methodName)
{
     return ((typeof this[methodName]) == "function");
};

if (someObject.can("quack"))
{
    someObject.quack();
} // Duck Typing Example ?

class Answer {// interface Answer 
  constructor(answerID, answerValue) {
    this.id = answerID;
    this.value = answerValue;
  }
}

class Question {// interface Question 
  constructor(qName, qValue, answersArray, correctAnswersIDarray ) {
    this.questionName = qName;
    this.questionValue = qValue;
    this.qAnswer = answersArray[0];
    this.correctAnswerID = correctAnswersIDarray[0];
  }
}

class QuestionResult { // interface QuestionResult
  constructor(providedAnswerID, isCorrect) {
    this.providedAnswerID = providedAnswerID;
    this.isCorrect = isCorrect;
  }
}

export class IQuizz { // export interface IQuizz
  constructor(isCompleted, currentQ, questionsAll, completedQs) {
    this.isCompleted = isCompleted;
    this.currentQ = currentQ;
    this.allQuestions = questionsAll;
    this.completedQs = completedQs;
  }
  loadQuestions() {

  }
  startQuizz() {

  }
  next() {

  }
}

export class QuizzDOMhandler {
  displayQuestion(questionTypeQuestionClass) {

  }
}

// quizz.next()
// let currentQuestion = quizz.getCurrentQuestion();
// domHandler.displayQuestion(currentQuestion);