// # Write a function that takes a string as input and returns the reversed string.

function ReversString(str){
    let rever="";
    for(let i=str.length-1;i>=0;i--){
           rever+=str[i]
    }
    return rever
}

let name = "hellow my name is abcd"
let revers = ReversString(name)
console.log(revers)