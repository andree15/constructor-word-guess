let Letter = function (character) {
    this.character = character;
    this.guessed = false;

    this.display = function () {
        if (this.character == ' ') {
            return (' ');
        }

        else if (this.character == "'") {
            return ("'")
        }

        else if (this.character == "-") {
            return ('-')
        }

        else if (this.guessed) {
            return (this.character)
        }

        else if (this.guessed === false) {
            return ("?")
        }
    }
    this.letterGuess = function (guess) {
        if (guess.toLowerCase() === this.character.toLowerCase()) {
            this.guessed = true;
            return true
        }
        return false
    }
}
module.exports = Letter

let a = new Letter("a")
console.log(a)
console.log(a.display)
console.log(a.display())
console.log(a.letterGuess("b"))
console.log(a.display())
console.log(a.letterGuess("a"))
console.log(a.display())
