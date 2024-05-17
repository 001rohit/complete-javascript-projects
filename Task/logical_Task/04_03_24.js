// prototype method
// find the  specific number in array using function

function NumSpecific(arr,val){
   let res;
    for(let i=0;i<arr.length;i++){
           if(arr[i]==val){
             res =true
             break
           }
           res = false
  }
  return res
}
let array = [1,2,3,4,5,6]
let find_specificNum = NumSpecific(array,3)
console.log(find_specificNum)

// count the element  how many to time to repeate the number in array   

function countSpecificElement(arr1,val){
    let count=0
    for(let i = 0;i<arr1.length;i++){
        if(arr1[i]==val){
            count++
        }
    }
    return count
}
let array1 = [1,2,3,4,5,6,5,4,6,4,4]
let final_result = countSpecificElement(array1,4)
console.log(final_result)

// remove repeat number  in the array
// function removeRepeatNum(arr){
//     let removeRepeat =[]
//     for(let i=0;i<arr.length;i++){
//         var current = arr[i]
//         if(removeRepeat.indexOf(current)<0){
//             removeRepeat.push(current)
//         }
//     }
//     return removeRepeat;
// }

// let array2 = [1,2,3,4,5,6,5,4,6,4,4]
// let removeDublicate=removeRepeatNum(array2)
// console.log(removeDublicate)
// filter method
function removeDublicate1(data){
    return data.filter((value,index)=>data.indexOf(value)===index);
}
let data = [2,3,4,5,5,4,4,5,6,7]
let removeDublicate2 =removeDublicate1(data) 
console.log(removeDublicate2)

// forEach method
let arr1 = ["apple","apple","lemon","lemon","orange","mango"]
let forEachResult = removeElement(arr1)
console.log(forEachResult)
function removeElement(data){
    let  unique = [];
    data.forEach(element => {
        if(!unique.includes(element)){
            unique.push(element)
        }
    });
    return unique;
}
let arr2 = ["apple","apple","lemon","lemon","orange","mango"]
let res2 = arr2.includes("apple1")
console.log(res2)

// reduce1 method use
let arr3 = ["apple","apple","lemon","lemon","orange","mango"]
let reduce = removeElementRedu(arr3)
function removeElementRedu(data){
    let unique = data.reduce(function(a,b){
        if(a.indexOf(b)<0){
            a.push(b)
        }
        return a
    },[]);
    return unique;
}
console.log(reduce)

// reduce2 method
let arr4 = ["apple","apple","lemon","lemon","orange","mango"]
let redu2 = removeDublicate1(arr4)
function removeDublicateRed1(data){
        return data.reduce((prev,curr)=>prev.includes(curr)?prev : [...prev,curr],[])
}
console.log(redu2)

// get repeat value in array
let arr5 = ["apple","apple","lemon","lemon","orange","mango","lemon"]
let getRepeat = getRepeatVal(arr5)
function getRepeatVal(data){
    return data.filter((value,index)=>data.indexOf(value)!==index);
}
console.log(getRepeat)


// use method set
let arr6 = ["apple","apple","lemon","lemon","orange","mango","lemon"]
let res7 = removeDulp(arr6)
function removeDulp(data){
     return [...new Set(data)]
}
console.log(res7)