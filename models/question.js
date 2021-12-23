class Question {
    constructor(questionData) {
      this.questionName = questionData.questionText;
      this.answers = questionData.answers;
      this.isCompleted = false;
      this.result = false;
    }
  }

  export { Question }