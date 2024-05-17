// # Write a function that checks whether a given number is prime or not.
function checkPrime(num){
    var check; 
    var count; 
    if(num<=1){
         check = "give number is not prime"
       }
   for(let i=1;i<num.length;i++){
     if(num%i==0){
           count +=1
    }
   }
   if(count==2){
       check = "give number is prime"
    }
    else{
       check = "give number is not prime"
   }
   return check
}

let number = 41
let result = checkPrime(number)
console.log(result)