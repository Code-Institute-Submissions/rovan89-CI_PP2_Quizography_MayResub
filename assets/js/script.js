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
        answerOne: "Hey",
        answerTwo: "",
        answerThree: "",
        answerFour: ""
    },
]

let testAnswers = Object.values(questions[0]);
console.log("Test:" + testAnswers)

let testNum = -1;

function getQuestions() {
    for(let i = 0; i < questions.length; i++){
        testNum = [i];
        testAnswers = Object.values(questions[i]);
        } 
    }
    console.log("test ANSWERS: " + testAnswers)

let blah = document.getElementById('next_btn');
blah.addEventListener("click", function() {
    testNum++;
    getQuestions();
    let answerDivContainer = document.getElementById('button_group_container');
    answerDivContainer.innerHTML = `
        <button class="quiz_btns" id="answer_one" onclick="checkUserAnswer()">${testAnswers[testNum]}</button>
        <button class="quiz_btns" id="answer_two" onclick="checkUserAnswer()">${testAnswers[testNum]}</button>
        <button class="quiz_btns" id="answer_three" onclick="checkUserAnswer()">${testAnswers[testNum]}</button>
        <button class="quiz_btns" id="answer_four"  onclick="checkUserAnswer()">${testAnswers[testNum]}</button>
        `;
    });
    
    console.log(testNum);
    console.log("Please change");

console.log(`Answer index position:${testNum}`);
console.log("Answer text:" + testAnswers);
console.log(blah);








