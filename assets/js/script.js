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

let testNum = 0;

function getQuestions() {
    for(let i = 0; i < questions.length; i++){
       // testNum = [i];
        testAnswers = Object.values(questions[i]);
        } 
    }


let blah = document.getElementById('next_btn');
blah.addEventListener("click", function() {
    testNum++;
    let answerDivContainer = document.getElementById('button_group_container');
    answerDivContainer.innerHTML = `
        <button class="quiz_btns" id="answer_one" onclick="checkUserAnswer()">${testAnswers[testNum]}</button>
        <button class="quiz_btns" id="answer_two" onclick="checkUserAnswer()">${testAnswers[testNum]}</button>
        <button class="quiz_btns" id="answer_three" onclick="checkUserAnswer()">${testAnswers[testNum]}</button>
        <button class="quiz_btns" id="answer_four"  onclick="checkUserAnswer()">${testAnswers[testNum]}</button>
        `;
    insertQuestions();
    });
    
    console.log(testNum);
    console.log("Please change");
    insertQuestions();
    console.log(insertQuestions());

console.log(`Answer index position:${testNum}`);
console.log("Answer text:" + testAnswers);
console.log(blah);
console.log(getQuestions())








