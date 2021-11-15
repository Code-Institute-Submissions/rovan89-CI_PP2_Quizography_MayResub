// This is an array of the questions and their images
let quizAnswers = [["Answer One!!!", "Answer Two", "Answer Three", "Answer Four"],["Answer One***", "Answer Two", "Answer Three", "Answer Four"]]
let quizImages = ['<img src="assets/images/quiz-images/pexels-jf-valeriano-3609894.jpg" alt="Girl in a jacket" width="500" height="600">']
let answerPosition = 0;
let imagePosition = 0;


// Questions 

function loadQuizImage() {
    let showQuizImage = document.getElementById("main_image_container");
    showQuizImage.innerHTML = quizImages[0] ;   
}
loadQuizImage();
function changeQuizImage() {
    let arrayOfImages = quizImages.length
    for (let i = 0; i < arrayOfImages; i++) {
         imagePosition++;
    }
    
}




/**
 * This function loads the image to the quiz
 */
function loadQuiz() {
    let answerOne = document.getElementById("answer_one")
    answerOne.innerHTML = quizAnswers[answerPosition][0];
    let answerTwo = document.getElementById("answer_two")
    answerTwo.innerHTML = quizAnswers[answerPosition][1];
    let answerThree = document.getElementById("answer_three")
    answerThree.innerHTML = quizAnswers[answerPosition][2];
    let answerFour = document.getElementById("answer_four")
    answerFour.innerHTML = quizAnswers[answerPosition][3];
    console.log(answerOne)
}
console.log(loadQuiz)
loadQuiz();

/**
 * This function allows the program to change the index position in the loadQuiz function and iterate through the answer options
 */
function nextQuestion() {
    let arrayOfAnswers = quizAnswers.length
    for (let i = 0; i < arrayOfAnswers; i++) {
         answerPosition++;
    }
}

nextQuestion();
console.log(answerPosition)

function checkTheAnswer() {

}

