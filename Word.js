var Letter = require ("./Letter.js");

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
    //this.doubler=num=>num*2
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

// class wordClass{
//     letterStore=[]
//     constructor(word){
//         word.split("").forEach(letter => {
//             this.letterStore.push(new Letter(letter))
//         });
//     }
// }
let test= new Word("test")
console.log(test)
console.log(test.display())
console.log(test.wordGuess("a"))
console.log(test.display())
console.log(test.wordGuess("t"))
console.log(test.display())
// let test2= new wordClass("test")
// console.log(test2)
for (billyBob of "word")console.log(billyBob)