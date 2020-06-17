var inquirer = require("inquirer")

var Word = require("./Word.js")

var guesses = 10
let correct = 0

let guessWords = ['bacon','pancakes','potatoes','biscuit', 'frittatas']
let randomWord
let chosenword

function startGame(){
    console.log("Guess the Breakfast Food!")
}

function startGame(){
    randomWord = guessWords[Math.floor(Math.ramdom()*guessWords.length)]

    chosenword = new Word(randomWord)
}

function guessWord () {
    if (guesses > 0 && points > 5){
        console.log(chosenword.display())
    }
}