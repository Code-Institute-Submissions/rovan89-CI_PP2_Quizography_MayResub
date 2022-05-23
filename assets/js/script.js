var questions = [
    {
        image: "assets/images/quiz-images/paris.jpg",
        answer: ["Rome", "Paris", "Los Angeles", "Moscow"],
        correctAnswer: "Paris"
    },
    {
        image: "assets/images/quiz-images/tower_bridge.jpg",
        answer: ["New York", "Madrid", "Belfast", "London"],
        correctAnswer: "London"
    },
    {
        image: "assets/images/quiz-images/barcelona.jpg",
        answer: ["Rio de Janeiro", "Cape Town", "Barcelona", "Edinburgh"],
        correctAnswer: "Barcelona"
    },
    {
        image: "assets/images/quiz-images/singapore.jpg",
        answer: ["Singapore", "Budapest", "London", "Hong Kong"],
        correctAnswer: "Singapore"
    },
    {
        image: "assets/images/quiz-images/phnom_penh.jpg",
        answer: ["Brussels", "Phnom Penh", "Sydney", "Valletta"],
        correctAnswer: "Phnom Penh"
    },
];
var questionImage = document.getElementById("main_image_container");
var questionOne = document.getElementById("answer_one");
var questionTwo = document.getElementById("answer_two");
var questionThree = document.getElementById("answer_three");
var questionFour = document.getElementById("answer_four");
var nextBtnClicked = document.getElementById("next_btn");
var quizAnswerContainer = document.getElementById("button_group_container");
var quizAnserBtns = document.getElementsByClassName("quiz_btns");
var rating_btns = document.getElementById("feedback_form");

var gameOverImage = "assets/images/quiz-images/game_over.jpg";
var userName = [];
var newVal = {};
var count = -1;
var score = 0;
var newImg;

/**
 *  This function changes the button at the end of the quiz
 */
function nextQuestionBtn(){
    nextBtnClicked.innerHTML = "Next Question";
    resetGame()
}

/* This function changes the size of the play button */
function nextBtnSize() {
    if(count == 0 || questions.length +1 == count){
        nextBtnClicked.style.transform = 'scale(1.5,1.5)'
        nextBtnClicked.style.marginTop = '40px';
        nextBtnClicked.style.marginBottom = '40px';
        nextBtnClicked.style.width = '175px';
    } else {
        nextBtnClicked.style.transform = 'scale(1,1)'
        nextBtnClicked.style.marginTop = '40px';
        nextBtnClicked.style.width = '320px';
    }
}

/**
 * The countIncrement function adds one each time the function is called
 */
function conutIncrement() {
    count++;
    nextBtnSize()
    console.log("count", count)
    return count;
}


nextBtnClicked.addEventListener('click', conutIncrement);
nextBtnClicked.addEventListener('click', originalColor);
nextBtnClicked.addEventListener('click', insertImage);

/**
 * This function changes the text in the multiple choice buttons to the appropriate answers.
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
        hideQuizBtns();
        nextBtnSize();
        showRatingBtns();
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
    displayUserName()
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
    questionOne.style.backgroundColor = "#0080FF";
    questionTwo.style.backgroundColor = "#0080FF";
    questionThree.style.backgroundColor = "#0080FF";
    questionFour.style.backgroundColor = "#0080FF";
}

/**
 * addToUserNameList function adds user names to an array
 */
function addToUserNameList() {
    var userInput = document.getElementById("user_name").value;
    userName = userName.push(userInput);
    console.log("This is the username: ", userName);
    displayUserName()
    /*
    var changeToUserName = document.getElementById("user_name_container");
    changeToUserName.innerHTML = `<h2> ${userName}</h2>`;
    */
    return userName
}


/* This function hides the quiz answer buttons */

function hideQuizBtns() {
    if (nextBtnClicked) {
        quizAnswerContainer.style.display = "none";
    } 
  }

/* These functions hide and unhide the raing section */
function hideRatingBtns() {
        rating_btns.style.display = "none";
    }

function showRatingBtns() {
        rating_btns.style.display = "block";
    }
    
hideRatingBtns()

/* This function restarts the game when the Users clicks the play again button */
function resetGame() {
    if(questions.length +1 == count ){
        window.location.href = "quiz.html";
    } else {
        quizAnswerContainer.style.display = "block";
    }
  }


hideQuizBtns()
console.log("length: ", questions.length)
console.log("count: ", count)

conutIncrement()


