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
            console.log("\nThat is incorrect!");
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
  var questionOneCloze = new ClozeCard("Big Top", "is a large tent used to house a circus.");

  var questionTwoCloze = new ClozeCard("Millennium", "is a time span of one thousand years.")

  var questionThreeCloze = new ClozeCard("360", "degrees are found in a circle.")

  var questionFourCloze = new ClozeCard("64", "squares are found on a chess board.")

  var questionFiveCloze = new ClozeCard("Marilyn Monroe", "is commonly known as Norma Jean Baker.")
