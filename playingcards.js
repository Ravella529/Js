/*
Playing Card has a number and a suit.

a suit:  clubs, spades, hearts, diamonds
a value: 2,3,4,5,6,7,8,9,10,J,Q,K,A

Write  program to randomly generate a playing card object.

{
    value: 'K',
    suit: 'clubs'
}

{
    value: '10',
    suit: 'diamonds'
}

*/
/*const values = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"] 
const suits = ["clubs", "spades", "hearts", "diamonds"]*/

const value=[2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
const suit=["clubs", "spades", "hearts", "diamonds"];

const randomvalue = Math.floor(Math.random()*value.length);
console.log("Value :  "+ value[randomvalue]);
const randomsuit = Math.floor(Math.random()*suit.length);
console.log("Suit : "+ suit[randomsuit]);