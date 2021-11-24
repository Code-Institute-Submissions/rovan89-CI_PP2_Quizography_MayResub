// This is an array of the questions and their images
let questions = [
    {
        image: "assets/images/quiz-images/movie_one.PNG",
        answer: ["Bond", "The Matrix", "Happy Gilmore", "You"],
        correctAnswer: "The Matrix"
    },
    {
        image: "assets/images/quiz-images/movie_two.jpg",
        answer: ["Thor", "The Hulk", "Black Panther", "Captian America"],
        correctAnswer: "The Hulk"
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
]
let questionImage = document.getElementById("main_image_container");
let questionOne = document.getElementById("answer_one");
let questionTwo = document.getElementById("answer_two");
let questionThree = document.getElementById("answer_three");
let questionFour = document.getElementById("answer_four");
let buttonsClass = document.getElementsByClassName("quiz_btns");
let nextBtnClicked = document.getElementById("next_btn");

let checkAnswer;
let newVal = {};
let count = 0;
let score = 0;
let newImg;

/**
 * The countIncrement function adds one each time the function is called
 */
function conutIncrement() {
    count++;
}
nextBtnClicked.addEventListener('click', conutIncrement);
nextBtnClicked.addEventListener('click', originalColor);
nextBtnClicked.addEventListener('click', insertImage);

/**
 * quiz answers add answers to button options
 */
function quizAnswers(){
    for( let i = 0; i < questions.length; i++){
        console.log(questionImage.innerHTML)
        questionOne.innerHTML = questions[count].answer[0];
        questionTwo.innerHTML = questions[count].answer[1];
        questionThree.innerHTML = questions[count].answer[2];
        questionFour.innerHTML = questions[count].answer[3];
        newVal = questions[count].correctAnswer;
        newImg = questions[count].image
        console.log(newImg)
    }
}

function insertImage(){
    questionImage.innerHTML = `<img id="quiz_image" src="${newImg}" alt="#"> `;
    console.log(questionImage.innerHTML)
}
/**
 * 
 */
function checkUserAnswer(clicked_id){
    let clicked_value = document.getElementById(clicked_id).innerHTML;
    let clicked_answer = document.getElementById(clicked_id);
    let keep_score = document.getElementById("score_count")
    
    if(clicked_value === newVal){
        clicked_answer.style.backgroundColor = "green";
        score++
        keep_score.innerHTML = score;
    } else {
        clicked_answer.style.backgroundColor = "red";
    }
   
}

/**
 * originalColor resets the color to white for the next set of answers
 */
 function originalColor(){
    questionOne.style.backgroundColor = "white"
    questionTwo.style.backgroundColor = "white"
    questionThree.style.backgroundColor = "white"
    questionFour.style.backgroundColor = "white"
}

/**
 * The scoreTracker function increments the score if the user has correctly answered
 */
function scoreTracker() {
   
}
//This array holds user names
let userName = [];

/**
 * addToUserNameList function adds user names to an array
 */
function addToUserNameList() {
    let userInput = document.getElementById("user_name").value;
    userName.push(userInput);
    console.log(userName)

    let changeToUserName = document.getElementById("user_name_container");
    changeToUserName.innerHTML = `<h2>${userName}</h2>`
}
//console.log(userName)
//console.log(addToUserNameList)





