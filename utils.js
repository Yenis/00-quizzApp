function getQuestionsFromDatabase() {
  const allQuestionsArray = [];
  sampleQuestions.forEach(function (object) { 
    allQuestionsArray.push(object);
  });
  return allQuestionsArray; //TODO replace sample questions with questions from database
};

function loadSingleQuestionByID(questionID) {
  const allQuestions = getQuestionsFromDatabase();
  const singleQuestion = allQuestions[questionID];
  return singleQuestion;
}

function onSubmitHandler(questionTypeQuestion) {
  // data-answer = 1 Custom Atributi - trenutni selektovani data-answer i njegov ID proslijediti
}

const sampleQuestions = [
  {
    questionText: "What is Right?",
    answers: [
      { text: "Correct", correct: true },
      { text: "Not Left", correct: true },
    ],
  },
  {
    questionText: "15 * 16",
    answers: [
      { text: "245", correct: false },
      { text: "256", correct: false },
      { text: "240", correct: true },
      { text: "244", correct: false },
      { text: "625", correct: false },
    ],
  },
  {
    questionText: "SIMPLE QUESTION",
    answers: [
      { text: "SIMPLE ANSWER", correct: true },
      { text: "WHAT?", correct: false },
      { text: "SAMPLE ANSWER", correct: false },
    ],
  },
  {
    questionText: "55 + 66",
    answers: [
      { text: "111", correct: false },
      { text: "121", correct: true },
    ],
  },
  {
    questionText: "99 / 99",
    answers: [
      { text: "1", correct: true },
      { text: "0", correct: false },
    ],
  },
];

export { getQuestionsFromDatabase, loadSingleQuestionByID, onSubmitHandler };
