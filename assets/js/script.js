// This is an array of the questions and their images
let quizAnswers = [
    {
        image: '<img src="assets/images/quiz-images/pexels-jf-valeriano-3609894.jpg" alt="Girl in a jacket">',
        answers: [
            {text: 'Bond', corrent: true},
            {text: '300', correct: false}
        ]
    }
    
    ["Answer One!!!", "Answer Two", "Answer Three", "Answer Four"],["Answer One***", "Answer Two", "Answer Three", "Answer Four"]];

let correctAnswers = {
    QuestionOneAnswer: "Answer Two",
    QuestionTwoAnswer: "Answer One***",
}
console.log(correctAnswers.QuestionOneAnswer)

let quizImages = [
    
    '<img src="assets/images/quiz-images/pexels-pixabay-162994.jpg" alt="">'
];

let answerPosition = 0;
let imagePosition = 0;
let userAnswer = ["Answer Two"]


// Questions 

/**
 * checkTheAnswer function changes the color of the button/answer that has been clicked
 */
document.addEventListener("DOMContentLoaded", function() {
    let answerBtns = document.getElementsByClassName("quiz_btns");
    console.log(answerBtns);

    for (let answer of answerBtns) {
        answer.addEventListener("click", function() {
            if (this.getAttribute('id').innerHTML === userAnswer){
                answer.style.background = "green";
            }
            console.log(answer);
        })
    }
})

