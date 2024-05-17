// array based question
// Write a function to find the maximum number in an array.
// Write a function to find the minimum number in an array.
// Write a function to calculate the sum of all numbers in an array.
// Write a function to calculate the average of numbers in an array.
// Write a function to check if an array contains a specific element.
// Write a function to remove duplicate elements from an array.
// Write a function to reverse an array.
// Write a function to sort an array of numbers in ascending order.
// Write a function to sort an array of strings in alphabetical order.
// Write a function to filter out even numbers from an array.
// Write a function to find the index of a specific element in an array.
// Write a function to concatenate two arrays.
// Write a function to convert all elements in an array to uppercase.
// Write a function to map each element in an array to its square.
// Write a function to find the intersection of two arrays.
// Write a function to find the union of two arrays.
// Write a function to flatten a nested array.
// Write a function to remove falsy values (false, null, 0, "", undefined, and NaN) from an array.
// Write a function to count the occurrences of each element in an array.

// Write a function to check if all elements in an array satisfy a given condition.


//1)  Write a function to find the maximum number in an array.
let array = [2,77,3,4,5,8,45]
let max = array[0]
for(let i=0;i<array.length;i++){
    if(array[i]>max){
        max = array[i]
    }
}
console.log(max)

//2  Write a function to find the minimum number in an array.
let array1 = [2,77,3,4,5,8,45]
let min = array1[0]
for(let i=0;i<array1.length;i++){
    if(array1[i]<min){
        min = array1[i]
    }
}
console.log(min)

// 3 Write a function to calculate the sum of all numbers in an array.
let array2 = [2,77,3,4,5,8,45]
let sum = 0
for(let i=0;i<array2.length;i++){
    sum+=array2[i]
}
console.log(sum)
// 4 Write a function to calculate the average of numbers in an array.
let average = sum/array2.length
console.log(average)

// 5 Write a function to check if an array contains a specific element.

function specific(arr,val){
   for(var i = 0 ; i<arr.length;i++){
    if(arr[i]==val){
        return true
    }
   }
   return false
}
let list = [2,3,4,5,6,7,8]
let res = specific(list,51)
console.log(res)

// Write a function to remove duplicate elements from an array.
let list1 = [1,2,3,4,6,8,10]
let new_lst = []
for(let i=0;i<list1.length;i++){
      if(list1[i]%2==0){
          new_lst.push(list1[i])
    }
    }
    // console.log(new_lst)

// Write a function to reverse an array.
// string reverse
let name="Hello welcome"
let reverse =""
let removeSpace =" "
let res1 =""
for(let i=name.length-1;i>=0;i--){
    if( name[i]!=removeSpace){
        reverse+=name[i]
    }
    
}
// console.log(reverse)
for(let i=0;i<name.length;i++){
    if( name[i]!=removeSpace){
        res1+=name[i]
    }
}
// console.log(res1)
// number reverse

// let num = [2,3,4,5,6,7]
// var reverNum = 0
// for(let i=num.length;i>0;i--){
//          reverNum-=num[i]
//          console.log(num)
// }
// c?onsole.log(num)
// console.log(reverNum)

let num = [6,2,3,4,5]

// Write a function to sort an array of numbers in ascending order.
let ascending = num.sort()
console.log(ascending)

let descending = num.sort((a,b)=>b-a)
console.log(descending)

// let reverNum1=[]
// for(let i=num.length-1;i>=0;i--){
//     reverNum1.push(num[i])
// }
// console.log(reverNum1)

// Write a function to sort an array of strings in alphabetical order.
let str = "hellow"
let sort= str.split("").sort().join("")
console.log(sort)

let name1 = ["rohit","mohit","ankit","yogesh"]
let sort1 = name1.sort()
console.log(sort1)


// Write a function to filter out even numbers from an array.
// let arr1 =[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// let odd = []
// for(let i=0;i<arr1.length;i++){
//     if(arr1[i]%2!=0){
//         odd.push(arr1[i])
//     }
// }
// console.log(odd)

// Write a function to find the index of a specific element in an array.

// function findElement(arr,val){
//         for(let i = 0;i<arr.length;i++){
//             if(arr[i]==val){
//                 return true
//             }
//         }
//         return false
// }
// let arr2 = [1,2,3,4,5,6,7]
// let res2 = findElement(arr2,12)
// console.log(res2)

// Write a function to concatenate two arrays.

function concatTwoArray(arr1,arr2){
    // let new_arr = arr1.concat(arr2)
    let addArr =[]
    for(let i=0;i<arr1.length;i++){
        addArr.push(arr1[i])
    }
    for(let i=0;i<arr2.length;i++){
        addArr.push(arr2[i])
    }
    return addArr

}
let ar1 = [1,2,3,4]
let ar2 = [5,6,7,8]
let re1 = concatTwoArray(ar1,ar2)
console.log(re1)

// Write a function to convert all elements in an array to uppercase.

let fruits = ["apple","graps","mango","orange","banana"]
let upper = []
for(let i =0;i<fruits.length;i++){
    upper.push(fruits[i].toLocaleUpperCase())
}
console.log(upper)

// Write a function to map each element in an array to its square.

function square(arr){
    let squar = []
    for(i=0;i<arr.length;i++){
        squar.push(arr[i]*arr[i])
    }
//  console.log(squar)
return squar
}
let arra1 =[1,2,3,4,5,6,7,8,9,10,11,12,13]

square(arra1)
let squarResult = square(arra1)
console.log(squarResult)



// Write a function to find the intersection of two arrays.

// Write a function to remove falsy values (false, null, 0, "", undefined, and NaN) from an array.

function removeFalsey(arr){
    let newArr=[]
    arr.forEach(element => {
        if(element){
            newArr.push(element);
        }
    });
    return newArr
}
let arr = [23,0,false,true,0,"",[],NaN,"he"]
console.log(removeFalsey(arr))

// / Write a function to count the occurrences of each element in an array.
function countElement(arr,val){
  let count=0
 for(let i=0;i<arr.length;i++){
    if(arr[i]==val){
        count++
    }
 }
 return count
}
let arra2 = [22,3,4,3,5,6,5,3,3,3]
let res3 = countElement(arra2,3)
console.log(res3)

// find second largest element in array
let arra01 = [34,55,67,72,50]
let first = arra01[0]
let second = arra01[0]
let third = arra01[0]
for(let i = 0;i<arra01.length;i++){
    if(arra01[i]>first){
        third = second
        second = first
        first =arra01[i]
    }
    else if(arra01[i]!=first && arra01>second){
        second = arra01[i]
    }
    else if(arra01[i]!=second && arra01>third){
        third = arra01[i]
    }
}
console.log("First ",first)
console.log("second ",second)
console.log("third ",third)