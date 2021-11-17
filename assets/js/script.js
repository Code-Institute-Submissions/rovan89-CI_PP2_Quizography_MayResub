// This is an array of the questions and their images
let questions = [
    {
        answerOne: "Bond",
        answerTwo: "The Matrix",
        answerThree: "Happy Gilmore",
        answerFour: "Ironman",
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


    
function getQuestions() {
    for(let i = 0; i < questions.length; i++){
        console.log(questions[i].answerOne)
        }
    }
document.getElementById("next_btn").addEventListener('click', getQuestions)


getQuestions();

function insertQuestions() {
    let answerDivContainer = document.getElementById('button_group_container');
    answerDivContainer.innerHTML = `
        <button class="quiz_btns" id="answer_one" onclick="checkUserAnswer()">${getQuestions[0].answerOne}</button>
        <button class="quiz_btns" id="answer_two" onclick="checkUserAnswer()">${questions[1].answerTwo}</button>
        <button class="quiz_btns" id="answer_three" onclick="checkUserAnswer()">${questions[2].answerThree}</button>
        <button class="quiz_btns" id="answer_four"  onclick="checkUserAnswer()"></button>
        `;
        console.log(insertQuestions())
}






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