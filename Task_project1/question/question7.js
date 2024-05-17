// # Write a function that takes a string as input and returns true if the string is a palindrome, otherwise false.

function StrPal(val){
    var checkPalindrom = ""
    for(let i=val.length-1;i>=0;i--){
        checkPalindrom +=val[i]
    }
    if(val==checkPalindrom){
        console.log("give string is pallindrom")
    }
    else{
        console.log("give string is not pallindrom")
    }
}
let num = "nitin"
StrPal(num)
