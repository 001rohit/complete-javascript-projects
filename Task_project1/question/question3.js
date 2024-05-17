// # Write a function that takes an array of numbers and returns the largest number in the array.

function Largest(arr){
    let max = arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
   return max
}
let array = [2,3,4,5,32,56,47,87,2,45]
let  largest = Largest(array)
console.log(largest)



function Smallest(arr){
    let min = arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }
   return min
}
let array1 = [2,3,4,5,32,56,47,87,2,45]
let  small = Smallest(array1)
console.log(small)