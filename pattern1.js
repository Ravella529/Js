function print(input) {
    document.write(input);
}
function println(input) {
    print(input + "<br>");
}
function pattern(n) {
    if(!n || typeof n !== 'number') {
        println(`n:${n} Provide a Number`);
        return;
    } 
    for(let i = 0; i<n; i++) {
        for(let j = 0; j<=i; j++) {
            print("*");
        }
        println("");
    }
}
pattern(10);
pattern();
pattern(null);
pattern("abcde");
