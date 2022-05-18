var questions = [
    {
        image: "assets/images/quiz-images/movie_one.PNG",
        answer: ["Bond", "The Matrix", "Happy Gilmore", "You"],
        correctAnswer: "The Matrix"
    },
    {
        image: "assets/images/quiz-images/movie_two.jpg",
        answer: ["Thor", "The Hulk", "Black Panther", "Captian America"],
        correctAnswer: "Black Panther"
    },
    {
        image: "assets/images/quiz-images/movie_three.jpg",
        answer: ["Lockstock", "RocknRolla", "Snatch", "The Gentelmen"],
        correctAnswer: "Snatch"
    },
    {
        image: "assets/images/quiz-images/movie_four.jpg",
        answer: ["The Untouchables", "American Gangster", "Black Mass", "Goodfellas"],
        correctAnswer: "Goodfellas"
    },
    {
        image: "assets/images/quiz-images/movie_five.jpg",
        answer: ["50/50", "Don Jon", "500 Days Of Summer", "10 Things I hate About You"],
        correctAnswer: "500 Days Of Summer"
    },
];
var questionImage = document.getElementById("main_image_container");
var questionOne = document.getElementById("answer_one");
var questionTwo = document.getElementById("answer_two");
var questionThree = document.getElementById("answer_three");
var questionFour = document.getElementById("answer_four");
var nextBtnClicked = document.getElementById("next_btn");

var gameOverImage = "assets/images/quiz-images/game_over.jpg";
var userName = [];
var newVal = {};
var count = 0;
var score = 0;
var newImg;

/**
 *  This function changes the button at the end of the quiz
 */
function nextQuestionBtn(){
    nextBtnClicked.innerHTML = "Next Question";
}


/**
 * The countIncrement function adds one each time the function is called
 */
function conutIncrement() {
    count++;
    console.log("count", count)
    return count;
}


nextBtnClicked.addEventListener('click', conutIncrement);
nextBtnClicked.addEventListener('click', originalColor);
nextBtnClicked.addEventListener('click', insertImage);

/**
 * quiz answers add answers to button options
 */
function quizAnswers(){
    nextQuestionBtn()
    enableQuizBtns()
    for( var i = 0; i < questions.length; i++){
        questionOne.innerHTML = questions[count].answer[0];
        questionTwo.innerHTML = questions[count].answer[1];
        questionThree.innerHTML = questions[count].answer[2];
        questionFour.innerHTML = questions[count].answer[3];
        newVal = questions[count].correctAnswer;
        newImg = questions[count].image;
    }
}

/**
 * This function adds the image to the question
 */
function insertImage(){
    if(questions.length +1 == count ){
        nextBtnClicked.innerHTML = "Play again!";
        questionImage.innerHTML = `<img id="quiz_image" src=" ${gameOverImage}" alt="#"> `;
    }else{
        questionImage.innerHTML = `<img id="quiz_image" src=" ${newImg}" alt="#"> `;
    }
    console.log(questionImage.innerHTML);
}

/**
 * This functions checks if the user has given the correct answer
 * Also changes the color based on answer
 */
function checkUserAnswer(clicked_id){
    var clicked_value = document.getElementById(clicked_id).innerHTML;
    var clicked_answer = document.getElementById(clicked_id);
    var keep_score = document.getElementById("score_count");
    
    if(clicked_value === newVal){
        clicked_answer.style.backgroundColor = "green";
        score++;
        keep_score.innerHTML = score;
    } else {
        clicked_answer.style.backgroundColor = "red";
    }
    disableQuizBtns()
}
/**
 * These functions disable and enable the quiz buttons
 */
function disableQuizBtns() {
    questionOne.disabled = true;
    questionTwo.disabled = true;
    questionThree.disabled = true;
    questionFour.disabled = true;
    nextBtnClicked.disabled = true;
    return true
}

function enableQuizBtns() {
    questionOne.disabled = false;
    questionTwo.disabled = false;
    questionThree.disabled = false;
    questionFour.disabled = false;
    nextBtnClicked.disabled = false;
    return false
}

/**
 * originalColor resets the color to white for the next set of answers
 */
 function originalColor(){
    questionOne.style.backgroundColor = "navy";
    questionTwo.style.backgroundColor = "navy";
    questionThree.style.backgroundColor = "navy";
    questionFour.style.backgroundColor = "navy";
}

/**
 * addToUserNameList function adds user names to an array
 */
function addToUserNameList() {
    var userInput = document.getElementById("user_name").value;
    userName.push(userInput);
    console.log(userName);

    var changeToUserName = document.getElementById("user_name_container");
    changeToUserName.innerHTML = `<h2> ${userName}</h2>`;
}

/*function playAgainBtn() {
    if(questions.length == count){
        nextBtnClicked.innerHTML = "Play again!";
        if(nextBtnClicked){
            console.log("Play again has been clicked")
        }
    }
}
*/


    


console.log("length: ", questions.length)
console.log("count: ", count)

conutIncrement


