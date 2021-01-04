var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("Hi, Please enter your name to begin: ")
console.log("Welcome " + userName + "! Let's begin the quiz - ");
console.log("-----------------------")

function myQuiz(question, answer){

  var userQue = readlineSync.question(question);

  if (userQue.toUpperCase() === answer.toUpperCase()) {
    console.log("WOAH! You know it! Its Correct.")
    score++;
  } else {
    console.log("OOPS! You got it wrong!")
  }
  console.log("Your score is ", score);
  console.log("---------------------------------------");
  // if (score === 5){
  // console.log("CONGRATULATIONS! You know me like nobody else!")
  // }
}

//Array of objests to be used for the set of arguments in function
var questions = [{
  question : "What is my full DOB? ",
  answer : "22 may 1989"
}, {
  question : "Which one I use most? Facebook, Twitter, Instagram, Linkedin ",
  answer : "linkedin"
}, {
  question : "Where do I live? ",
  answer : "varanasi"
}, {
  question : "Do I like watching web-series? ",
  answer : "yes"
}, {
  question : "Have I done MBA or PGDM? ",
  answer : "pgdm"
}
];

var highScore = [{
  name: "Sunil",
  myscore: "5"
}, {
  name: "Rekha",
  myscore: "4"
}]

for (var i=0; i<questions.length; i++) {
  myQuiz(questions[i].question, questions[i].answer);
}

// for (var j=0; j<highScore.length; j++) {
  if (score == highScore[0].myscore) {
    console.log("Out of 5, your score is ", score)
    console.log("Congratulations! You're a top scorer! You know Sunil like nobody else.")
  } else {
    console.log("Out of 5, your score is", score)
    console.log("Looks like you don't know Sunil well!!!")
    console.log("Try again.")
  }
// }