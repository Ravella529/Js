/*
    write a isValidPassword function
    It accepts 2 arguments:   password and username
    Password must:
        - be atleast 8 characters
    canot contain spaces
    cannot contain the username

    if everything is ok, this function return true else returns false.
    
    isValidPassword('89Fjj9nms', 'catluvr'); // true
    isValidPassword('catluvr123!', 'catluvr'); //false
    isValidPassword('hello1', 'catluvr'); //false
    isValidPassword('hello @1', 'catluvr'); //false
*/

// default values are ""
function isValidPassword(password , username){
    return (Boolean(password) && password.length >= 8 // atleast 8 characters
            && !password.includes(" ") // no spaces
            && !password.includes(username)); // not include username
       
}
/*
let  result = isValidPassword('89Fjj9nms', 'catluvr');
result = isValidPassword('zyz');
result = isValidPassword();
result = isValidPassword("");
result = isValidPassword(null);
result = isValidPassword(" hello hello");
result = isValidPassword("hello", "hello");
result = isValidPassword("hello123abc", "hello123");

result = isValidPassword('89Fjj9nms', 'catluvr'); // true
result = isValidPassword('catluvr123!', 'catluvr'); //false
result = isValidPassword('hello1', 'catluvr'); //false
result = isValidPassword('hello @1', 'catluvr'); //false

console.log(result);
*/