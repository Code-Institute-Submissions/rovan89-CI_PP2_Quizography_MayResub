// This is an array of the questions and their images
let questions = [
    {
        image: '<img src="assets/images/quiz-images/pexels-jf-valeriano-3609894.jpg" alt="Girl in a jacket">',
        answers: [
            {text: 'Bond', corrent: true},
            {text: '300', correct: false}
        ]
    },
]


function createQuestions() {
    let answerDivContainer = document.getElementById('button_group_container');
    answerDivContainer.innerHTML = `
        <button class="quiz_btns" id="answer_one" onclick="checkUserAnswer()">Answer One</button>
        <button class="quiz_btns" id="answer_two" >Answer Two</button>
        <button class="quiz_btns" id="answer_three">Answer Three</button>
        <button class="quiz_btns" id="answer_four" >Answer Four</button>
        `;
}
window.DOMContentLoaded = createQuestions();




function checkUserAnswer(){
    for(let i = 0; i < questions.length; i++){
        let userAnswer = document.getElementsByClassName("quiz_btns");
        
    }

}

