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


let testNum = -1;

let testAnswers = Object.values(questions);
    console.log("test ANSWERS: " + testAnswers);

let blah = document.getElementById('next_btn');
blah.addEventListener("click", function() {
    testNum++;
    questions++;
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
console.log(blah);








