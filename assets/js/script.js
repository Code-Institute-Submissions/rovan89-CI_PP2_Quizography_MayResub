// This is an array of the questions and their images
let quizAnswers = [["Answer One!!!", "Answer Two", "Answer Three", "Answer Four"],["Answer One!!!", "Answer Two", "Answer Three", "Answer Four"]]



/**
 * This function loads the image to the quiz
 */
function loadQuiz() {
    //let quizBtns = document.getElementsByClassName("quiz_btns");
    let answerOne = document.getElementById("answer_one")
    answerOne.innerHTML = quizAnswers[0][1];
}

loadQuiz();
console.log(quizBtns)
