// write a function the computes average of given array
function average(arrOfNums) {
    let sum = 0;
    for(let i of arrOfNums) {
        sum += i;
    }
    return sum/arrOfNums.length;
}

console.log(average([10, 20, 30, 40]));
console.log(average([5, 15, 25, 35, 45, 55]));