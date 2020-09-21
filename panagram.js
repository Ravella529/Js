/*a pangram is a sentence 
that contains every letter of the alphabet

The quick brown fox jumps over the lazy dog

Write a function which checks to see if a given sentence
contains every letter of the alphabet.
*/
"use strict";
function isPangram(sentence){
    if(!sentence) {
        return false;
    }
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const lowerSentence = sentence.toLowerCase();
   
    for(let char of alphabets) {
        if(!lowerSentence.includes(char))
        {
            return false;
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"))//true
console.log(isPangram("The five boxing wizards jump quickly")) // true
console.log(isPangram("The five boxing")) // false
console.log(isPangram()) // false
console.log(isPangram(null)) // false
console.log(isPangram("aaaaaaa")) // false
console.log(isPangram("AAAAA")) // false