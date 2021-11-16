// This is an array of the questions and their images
let quizAnswers = [["Answer One!!!", "Answer Two", "Answer Three", "Answer Four"],["Answer One***", "Answer Two", "Answer Three", "Answer Four"]];

let correctAnswers = {
    QuestionOneAnswer: "Answer Two",
    QuestionTwoAnswer: "Answer One***",
}
console.log(correctAnswers.QuestionOneAnswer)

let quizImages = [
    '<img src="assets/images/quiz-images/pexels-jf-valeriano-3609894.jpg" alt="Girl in a jacket">',
    '<img src="assets/images/quiz-images/pexels-pixabay-162994.jpg" alt="">'
];

let answerPosition = 0;
let imagePosition = 0;
let userAnswer = document.getElementById("answer_one").innerHTML


// Questions 

/**
 * checkTheAnswer function changes the color of the button/answer that has been clicked
 */
function checkTheAnswer() {

    if(userAnswer == correctAnswers.QuestionOneAnswer){
        document.getElementById("answer_one").style.background = "green"
    } else if (userAnswer == correctAnswers.QuestiontwoAnswer) {
        document.getElementById("answer_two").style.background = "green"
    } else if (userAnswer == correctAnswers.QuestionThreeAnswer) {
        document.getElementById("answer_three").style.background = "green"
    } else if (userAnswer == correctAnswers.QuestionFourAnswer) {
        document.getElementById("answer_four").style.background = "green"
    } else {
        document.getElementsByClassName("quiz_btns").style.background = "red"
    }
    
    
}

