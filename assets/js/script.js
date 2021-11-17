// This is an array of the questions and their images
let questions = [
    {
        answerOne: "Bond",
        answerTwo: "The Matrix",
        answerThree: "Happy Gilmore",
        answerFour: "You"
    },
    {
        answerOne: "Thor",
        answerTwo: "The Hulk",
        answerThree: "Black Panther",
        answerFour: "Captian America"
    },
    {
        answerOne: "",
        answerTwo: "",
        answerThree: "",
        answerFour: ""
    },
]
let testAnswers = Object.values(questions[0]);
console.log("Test:" + testAnswers)


testNum = 0;
function addOne(){
   testNum = ++testNum;
}
console.log("Testing:" + testNum);

function getQuestions() {
    for(let i = 0; i < questions.length; i++){
        console.log("Here:" + Object.entries(questions[i]));
        } 
    }
getQuestions();

//document.getElementById("next_btn").addEventListener('click', getQuestions);
let nextPosition = 0;
function nextBtn(){
    for(i = 0; i < questions.length; i++){
        nextPosition = questions[i];
    }
nextPosition = questions[i];
}
console.log("NP: " + nextPosition)

getQuestions();

function insertQuestions() {
    let answerDivContainer = document.getElementById('button_group_container');
    answerDivContainer.innerHTML = `
        <button class="quiz_btns" id="answer_one" onclick="checkUserAnswer()">${testAnswers[0]}</button>
        <button class="quiz_btns" id="answer_two" onclick="checkUserAnswer()">${testAnswers[1]}</button>
        <button class="quiz_btns" id="answer_three" onclick="checkUserAnswer()">${testAnswers[2]}</button>
        <button class="quiz_btns" id="answer_four"  onclick="checkUserAnswer()">${testAnswers[3]}</button>
        `;
        console.log(insertQuestions());
}
window.onload(insertQuestions());






function checkUserAnswer(){
    for(let i = 0; i < questions.length; i++){
        let userAnswer = document.getElementsByClassName("quiz_btns").innerHTML;
        if(userAnswer == questions[i].answers){
            
            alert("It's working");
        } else {
            alert("else is working")
        }
    }
}