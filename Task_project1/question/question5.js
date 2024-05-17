// # Write a function that takes a string as input and returns the number of vowels in the string.
function checkStr(val){
    //  val = val.split("");
     var res = "aeiou"
     var count =0;
    //  res = res.split("")
     for(let i=0;i<val.length;i++){
        for(let j=0;j<res.length;j++){
          if(val[i]==res[j]){
            count+=1;
          }
        }
    }
    return count;
}
let name = "rohit kumre"
let string = checkStr(name)
console.log(string)