// document.body.innerHTML ="hellow welcome ...how can i help you"

let body = document.body

// body.innerHTML ="hellow"
// let object1 =[
//     {name:"Rohit",age:26,hobby:"reading and writing"}
// ]

// let num1 = Math.floor(Math.random()*10)
// let num2 =  Math.floor(Math.random()*10)
// let sum = num1+num2
// body.innerHTML = `The sum of two number ${num1} + ${num2} = ${sum}`

// if(num1>num2){
//     body.innerHTML = `"number2" ${num2} is greater then "numer1" ${num1} `
// }
// else{
//     body.innerHTML = ` "number1" ${num1} is greater then" number2" ${num2} `
// }
// for(let val of object1){
//    let item = document.createElement("h1")
//    item.id = "Object-List"
//    item.innerHTML = ` your name is : ${val.name} <br> 
//      you age is: ${val.age} <br>
//     your hobby is : ${val.hobby} `
//    body.append(item)
// }

let personAge = Math.floor(Math.random()*50)

if(personAge>0 && personAge<=10){
body.innerHTML = `you are a child . because age is ${personAge}`
}
else if(personAge>10 && personAge<=20){
    body.innerHTML = `you are a younger .because age is ${personAge}`
    }
 else   if(personAge>20 && personAge<=30){
        body.innerHTML = `you are adult .because age is ${personAge}`
        }
else if(personAge>30 && personAge<=40){
            body.innerHTML = `you are matuar.because age is  ${personAge}`
         }
    else if(personAge>40 && personAge<=50){
    body.innerHTML = `your age is crossed (0 to 40).because age is  ${personAge}`
    }
