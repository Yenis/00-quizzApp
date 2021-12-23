class Question {
    constructor(questionData) {
      this.questionName = questionData.questionText;
      this.qAnswers = questionData.answers;
      this.isCompleted = false;
      this.result = false;
    }
  }

  export { Question }