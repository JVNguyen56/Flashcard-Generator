var inquirer = require("inquirer");
var basicQuestions = require("./basic-questions.json");
var counter = 0;
var correctAnswerCount = 0;

var BasicCard = function(frontArg, backArg){
 this.frontArg = frontArg;
 this.backArg = backArg;
};


var askQuestions = function (){

  if(counter < 5){

  inquirer.prompt([

    {type: "input",
      message: basicQuestions[counter].frontCard,
      name: "question"
      }//if


 ]).then(function(answer){

  var userInput = answer.question.toLowerCase();

    if(userInput === basicQuestions[counter].backCard){
          console.log("\nCorrect!");
          correctAnswerCount++;
        }//if

        else{
          console.log("\nWrong!");
        }//else

  console.log(basicQuestions[counter].fullAnswer);
  counter++
  askQuestions();

  });//closing then
} //closing if

else{
  console.log("\nGame Over!")
  console.log("Correct Answers: " + correctAnswerCount);
  inquirer.prompt([

      {type: "confirm",
        message: "Do you want to play again?",
        name: "playAgain",
        default: true
        }
    ]).then(function(answer){

      if (answer.playAgain === true){
        counter = 0;
        correctAnswerCount = 0;
        askQuestions();

      }
      else{
        console.log("Thank you for playing!");
      }

  });
}

}; //closing function

askQuestions();

var questionOne = new BasicCard("What continent has the fewest flowering plants?", "Antarctica");
// console.log(questionOne.frontArg, questionOne.backArg);

var questionTwo = new BasicCard("How many U.S. states border the Gulf of Mexico ?", "Five");

var questionThree = new BasicCard("What explorer introduced pigs to North America?" , "Christopher Colombus");

var questionFour = new BasicCard("Which is the only American state to begin with the letter 'p' ?", "Pennsylvania");

var questionFive = new BasicCard("Name the worlds biggest island?", "Greenland");

module.exports = BasicCard;
