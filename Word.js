// constructer function
var Letter = require ("./Letter.js");

// constructer function
var Word = function (word) {

    this.letterStore=[]

    word.split("").forEach(letter => {
        this.letterStore.push(new Letter(letter))
    });

    this.display=function(){
        let result=""
        this.letterStore.forEach(letter=>{
            result+=letter.display()
        })
        return result
    }

    this.wordGuess=guess=>{
        let wrong= true
        this.letterStore.forEach(letter=>{
            if(letter.letterGuess(guess)){
                wrong=false
            }
        })
        return wrong
    }
}

module.exports = Word

// class wordClass{
//     letterStore=[]
//     constructor(word){
//         word.split("").forEach(letter => {
//             this.letterStore.push(new Letter(letter))
//         });
//     }
// }
let test= new Word("quarentine")
console.log(test)
console.log(test.display())
console.log(test.wordGuess("a"))
console.log(test.wordGuess("q"))
console.log(test.wordGuess("r"))
console.log(test.display())
console.log(test.wordGuess("z"))
console.log(test.display())
// let test2= new wordClass("test")
// console.log(test2)
// for (billyBob of "word")console.log(billyBob)