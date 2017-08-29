var inquirer = require("inquirer");
var clozeQuestions = require("./questions.json");
var counter = 0;
var correctAnswerCount = 0;

function ClozeCard(cloze, partial){
  this.cloze = cloze;
  this.partial = "..." + partial;
  this.fullText = [cloze] + " " +partial;
  this.returnCloze = function(){
    console.log("Answer: " + this.cloze);
};
  this.returnPartial = function(){
  console.log(this.partial);
};
  this.returnFullText = function(){
  console.log(this.fullText);

};

};
var askQuestions = function (){

    if(counter < 5){

    inquirer.prompt([

      {type: "input",
        message: "..." + clozeQuestions[counter].partial,
        name: "question"
        }//if
   ]).then(function(answer){

    var userInput = answer.question.toLowerCase();

      if(userInput === clozeQuestions[counter].cloze){
            console.log("\nCorrect!");
            correctAnswerCount++;
          }//if

          else{
            console.log("\nWrong!");
          }//else

    console.log(clozeQuestions[counter].fullAnswer);
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
  var questionOneCloze = new ClozeCard("Antarctica", "is the continent that has the fewest flowering plants.");

  var questionTwoCloze = new ClozeCard("Five", "U.S. states border the Gulf of Mexico.")

  var questionThreeCloze = new ClozeCard("Christopher Colombus", "is the person who introduced pigs to North America.")

  var questionFourCloze = new ClozeCard("Pennsylvania", "is the only American state to begin with the letter 'p'.")

  var questionFiveCloze = new ClozeCard("Greenland", "is the world's biggest island.")
