// This is an array of the questions and their images
let quizAnswers = [["Answer One!!!", "Answer Two", "Answer Three", "Answer Four"],["Answer One!!!", "Answer Two", "Answer Three", "Answer Four"]]



/**
 * This function loads the image to the quiz
 */
function loadQuiz() {
    //let quizBtns = document.getElementsByClassName("quiz_btns");
    let answerOne = document.getElementById("answer_one")
    answerOne.innerHTML = quizAnswers[0][0];
    let answerTwo = document.getElementById("answer_Two")
    answerOne.innerHTML = quizAnswers[0][1];
    let answerThree = document.getElementById("answer_Three")
    answerOne.innerHTML = quizAnswers[0][2];
    let answerFour = document.getElementById("answer_Four")
    answerOne.innerHTML = quizAnswers[0][3];
}

loadQuiz();
console.log(loadQuiz)

function nextQuestion() {
    let arrayOfAnswers = quizAnswers.length
    for (let questionIncrementation = 0; questionIncrementation < arrayOfAnswers; questionIncrementation++ ) {
        
    }
}
    nextQuestion();
    console.log(arrayOfAnswers[questionIncrementation]);