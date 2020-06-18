let inquirer = require("inquirer")

let Word = require("./Word.js")

let guesses = 10
let points = 0

let guessWords = ['bacon', 'pancakes', 'potatoes', 'biscuit', 'frittatas']
let randomWord;
let chosenWord;

function startGame() {
    console.log("Guess the Breakfast Food!")
}

function chooseRandomWords() {
    randomWord = guessWords[Math.floor(Math.random() * guessWords.length)]

    chosenWord = new Word(randomWord)
}

function guessWord() {
    if (guesses > 0 && points < 5) {

        console.log(chosenWord.display());


        inquirer.prompt([
            {
                name: "txt",
                message: "Guess a letter!",
                validate: function (str) {
                    if (str.length != 1) return false;
                    var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
                    return regEx.test(str);
                }
            }
        ]).then(function (guessedLetter) {

            var guess = guessedLetter.txt;

            chosenWord.checkGuess(guess);

            if (randomWord.toLowerCase().indexOf(guess.toLowerCase()) === -1) {
                guesses--;
                console.log("incorrect" + guesses + " guesses remaining")
            }
            else {
                if (points < 5) {
                    console.log('correct')
                }
            }

            if (randomWord === chosenWord.display()) {
                console.log(chosenWord.display());
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
    .then(function(inquirerResonse){
        if (inquirerResponse.confirm) {
            guesses = 10;
            points = 0;
            chooseRandomWords();
            guessWord();
        }
        else {
            console.log("bye bye")
            process.exit();
        }
    }
    )
}

startGame();
chooseRandomWords();
guessWord();

