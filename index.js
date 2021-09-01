const chalk = require("chalk")
var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("Please enter your name to begin: ")
console.log("Welcome " + chalk.green(userName + "!")+ " Let's begin the quiz - ");
console.log("-----------------------")

function myQuiz(question, answer){

    var question = readlineSync.question(chalk.blue(question));
    if (question.toUpperCase() === answer.toUpperCase()) {
      console.log(chalk.green("Correct"))
      score+=2;
    } else {
      console.log("Wrong!")
    }
    console.log("Your score is ", chalk.green(score));
    console.log("---------------------------------------");

}

//Array of objects to be used for the set of arguments in function
var questions = [{
  question : "What is my DOB? ",
  answer : "22 may"
}, {
  question : "Which one I use most? Facebook, Twitter, Instagram, Linkedin? ",
  answer : "linkedin"
}, {
  question : "Where do I live? ",
  answer : "pune"
}, {
  question : "Do I like watching web-series? ",
  answer : "yes"
}, {
  question : "Have I done MBA or PGDM? ",
  answer : "pgdm"
}
];

var highScores = [{
  name: "Sunil",
  highScore: "10"
}, {
  name: "Rekha",
  highScore: "8"
}]

for (let i=0; i<questions.length; i++) {
  myQuiz(questions[i].question, questions[i].answer);
}

if (score >= highScores[1].highScore) {
    console.log(chalk.green("Congratulations!")+" You're one of the top scorers!. Please send me your score screenshot to update it in top scorers list.")
 } else {
    console.log("Looks like you don't know Sunil well!!!")
    console.log("Try again.")
}


console.log("Your highest score is ", score)
console.log("---------------------------------------");
console.log("Checkout the top-scorers in this game:")

function scorers(){
  for(let i=0; i<highScores.length; i++){
    console.log(chalk.bgRed(highScores[i].highScore, highScores[i].name))
  }
}

scorers(highScores);