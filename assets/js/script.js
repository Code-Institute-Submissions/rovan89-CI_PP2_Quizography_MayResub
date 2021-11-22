// This is an array of the questions and their images
console.log("Hi")
let questions = [
    {
        answer: ["Bond", "The Matrix", "Happy Gilmore", "You"],
        correctAnswer: "Bond"
    },
    {
        answer: ["Thor", "The Hulk", "Black Panther", "Captian America"],
        correctAnswer: "The Hulk"
    },
]

let questionOne = document.getElementById("answer_one");
let questionTwo = document.getElementById("answer_two");
let questionThree = document.getElementById("answer_three");
let questionFour = document.getElementById("answer_four");
let buttonsClass = document.getElementsByClassName("quiz_btns");
let count = 0;
let nextBtnClicked = document.getElementById("next_btn");
/**
 * The countIncrement function adds one each time the function is called
 */
function conutIncrement() {
    count++;
}
nextBtnClicked.addEventListener('click', conutIncrement);

/**
 * quiz answers add answers to button options
 */
function quizAnswers(){
    for( let i = 0; i < questions.length; i++){
        questionOne.innerHTML = questions[count].answer[0];
        questionTwo.innerHTML = questions[count].answer[1];
        questionThree.innerHTML = questions[count].answer[2];
        questionFour.innerHTML = questions[count].answer[3];
    }
}

var newjib = questions.map(function (correctAnswer));
console.log(newjib)

console.log(questions[count][correctAnswer])
/**
 * 
 */
function checkUserAnswer(){
    if(questionOne.innerHTML == questions.correctAnswer) {
        alert("button was clicked");
    } else if(questionTwo == questions.correctAnswer){
        alert("button Two was clicked");
    }
}
buttonsClass.addEventListener('click', checkUserAnswer)
let score = 0;
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
    changeToUserName.innerHTML = `<h2>${userName}</h2>
                                  <p>score: </p>`
}
console.log(userName)
console.log(addToUserNameList)





