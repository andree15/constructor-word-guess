// constructer function
var Letter = require("./Letter.js");

// constructer function
var Word = function (word) {

    this.buildWord = function (word) {
        var letterStore = [];
        for (var i = 0; i < word.length; i++) {
            var currentLetter = new Letter(word[i]);
            letterStore.push(currentLetter);
        }
        return letterStore
    }

    this.letters = this.buildWord(word)
    this.chosenWord = word;

    this.checkGuess = function (guess) {

        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].letterGuess(guess);
        }
    }

    this.display = function () {
        var letterStore = "";
        for (var i = 0; i < this.letters.length; i++) {
            letterStore += this.letters[i].display();
        }
        return letterStore
    }
}
module.exports = Word