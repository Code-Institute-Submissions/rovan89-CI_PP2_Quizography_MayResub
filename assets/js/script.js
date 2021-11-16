// This is an array of the questions and their images
let questions = [
    {
        image: '<img src="assets/images/quiz-images/pexels-jf-valeriano-3609894.jpg" alt="Girl in a jacket">',
        answers: [
            {text1: 'Bond', corrent: true},
            {text2: '300', correct: false}
        ]
    },
]


    
function getQuestions() {
    for(let i = 0; i < questions.length; i++){
        console.log(questions[i])
        for(const key of Object.values(questions[i])){
            console.log(`${key} = ${questions[key][text1]}`)
        }
    }

}
getQuestions();

function insertQuestions() {
    let answerDivContainer = document.getElementById('button_group_container');
    answerDivContainer.innerHTML = `
        <button class="quiz_btns" id="answer_one" onclick="checkUserAnswer()">${questions.values()}</button>
        <button class="quiz_btns" id="answer_two" onclick="checkUserAnswer()">Answer Two</button>
        <button class="quiz_btns" id="answer_three" onclick="checkUserAnswer()">Answer Three</button>
        <button class="quiz_btns" id="answer_four"  onclick="checkUserAnswer()">Answer Four</button>
        `;
}
window.DOMContentLoaded = insertQuestions();




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