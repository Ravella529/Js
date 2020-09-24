const massofJhon = 80;
const heightofJohn = 5.7;
const massofMark = 65;
const heightofMark = 5.9;

const bmiofJohn = massofJhon/(heightofJohn*heightofJohn);
const bmiofMark = massofMark/(heightofMark*heightofMark);
console.log(bmiofJohn);
console.log(bmiofMark)
let greater = new Boolean(bmiofJohn>bmiofMark);
console.log("Is John's BMI higher than Mark's?"+greater)
