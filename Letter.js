//constructer function
let Letter = function (character) {
    this.character = character;
    this.guessed = false;
// displays to the user the "_ _ _"
    this.display = function () {

        if (this.guessed) {
            return (this.character)
        }

        else if (this.guessed === false) {
            return (" _ ")
        }
    }
    //The user guesses the letter here
    this.letterGuess = function (guess) {
        if (guess === this.character) {
            this.guessed = true;
            return true
        }
        return false
    }
}
//allows for export
module.exports = Letter

//tests
// let a = new Letter("a")
// console.log(a)
// console.log(a.display)
// console.log(a.display())
// console.log(a.letterGuess("b"))
// console.log(a.display())
// console.log(a.letterGuess("a"))
// console.log(a.display())
