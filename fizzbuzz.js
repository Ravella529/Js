"use strict"
const number = prompt("Enter the Number")
if(!number){
    console.log(number)
}
else if(number%3===0 && number%5===0)
{
  console.log("FizzBuzz");
}
else if(number%5===0)
{
  console.log("Fizz");
}
else if(number%3===0)
{
  console.log("Buzz");
}
else
{
  console.log(number)
}