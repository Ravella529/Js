function rollDie() {
    // Math.random gives values between 0 and 1
    // we want a number between 1 and 6.
   return Math.floor(Math.random() * 6) + 1;
}
function rollDice(n) {
    while(n > 0) {
        console.log(rollDie());
        n--;
    }
}
rollDice(100);