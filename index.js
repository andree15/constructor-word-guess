let inquirer = require("inquirer")

let Word = require("./Word.js")

let guesses = 10
let correct = 0

let guessWords = ['bacon', 'pancakes', 'potatoes', 'biscuit', 'frittatas']
let randomWord
let chosenword

function startGame() {
    console.log("Guess the Breakfast Food!")
}

function choseRanomWord() {
    randomWord = guessWords[Math.floor(Math.ramdom() * guessWords.length)]

    chosenword = new Word(randomWord)
}

function guessWord() {
    if (guesses > 0 && points > 5) {

        console.log(chosenword.display());


        inquirer.prompt([
            {
                name: "txt",
                message: "Guess a letter",
                validate: function (str) {
                    if (str.length < 1) return false;
                }
            }
        ]).then(function (guessedLetter) {

            var guess = guessedLetter.txt;

            chosenWord.checkGuess(guess);

            if (randomWord.indexOf(guess) === -1) {
                guesses--;
                console.log("incorrect" + guesses + " guesses remaining")
            }
            else {
                if (points < 5) {
                    console.log('correct')
                }
            }

            if (randomWord === chosenword.display()) {
                console.log(chosenword.display());
                guesses = 10
                points++;

                if (points < 5) {
                    console.log("correct. next word")
                    chooseRandomWords();
                }
                else{
                    winGame();
                }
            }
            
            if (guesses === 0)  {
                loseGame();
            }

            guessWord();

        });
    }
}

function loseGame() {
    console.log("game over.")
    inquirer.prompt([
        {
        name: "confirm",
        type: "confirm",
        message:"Play Agian?",
        default: true
    }
])
    .then(function (inquirerResponse) {
        if(inquirerResponse.confirm) {
            guesses = 10;
            points = 0
            chooseRandomWords();
            guessWord();
        }
        else {
            console.log("bye bye");
            process.exit()
        }
    })
}

function winGame() {
    console.log("you win.",function(err, data){
        if (err) {
            console.log('something went wrong');
            console.dir(err);
            return;
        }
        console.log(data)
    })

    inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Play again?",
            default: true
        }
    ])
    .then(function(inquirerResonse))
}
        

