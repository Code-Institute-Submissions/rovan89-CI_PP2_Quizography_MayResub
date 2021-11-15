// This is an array of the questions and their images
let quizAnswers = [["Answer One!!!", "Answer Two", "Answer Three", "Answer Four"],["Answer One***", "Answer Two", "Answer Three", "Answer Four"]]
let answerPosition = 0;


/**
 * This function loads the image to the quiz
 */
function loadQuiz() {
    let answerOne = document.getElementById("answer_one")
    answerOne.innerHTML = quizAnswers[answerPosition][0];
    let answerTwo = document.getElementById("answer_two")
    answerTwo.innerHTML = quizAnswers[answerPosition][1];
    let answerThree = document.getElementById("answer_three")
    answerThree.innerHTML = quizAnswers[0][2];
    let answerFour = document.getElementById("answer_four")
    answerFour.innerHTML = quizAnswers[0][3];
}
console.log(loadQuiz)
loadQuiz();

/**
 * 
 */
function nextQuestion() {
    let arrayOfAnswers = quizAnswers.length
    for (let i = 0; i < arrayOfAnswers; i++) {
         answerPosition++
    }
}

nextQuestion();
console.log(answerPosition)