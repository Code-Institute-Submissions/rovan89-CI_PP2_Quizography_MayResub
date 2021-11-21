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


function quizAnswers(){
    let count = 0;
    console.log("This is count: " + count);
    let questionOne = document.getElementById("answer_one");
    let questionTwo = document.getElementById("answer_two");
    let questionThree = document.getElementById("answer_three");
    let questionFour = document.getElementById("answer_four");
    count++;
    for( let i = 0; i < questions.length; i++){
        questionOne.innerHTML = questions[count].answer[0];
        questionTwo.innerHTML = questions[count].answer[1];
        questionThree.innerHTML = questions[count].answer[2];
        questionFour.innerHTML = questions[count].answer[3];
    }
    console.log("Count at end of function" + count);
}
console.log("Outside function: " + count);
console.log("Why is console log not working?")








