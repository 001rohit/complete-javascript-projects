// console.log(myFunction())
// function myFunction(){
//     return "hellow i am rohit"
// }

//  const arroFunct =()=>"hellow good morning"
// console.log(arroFunct())
// console.log(myFunction())    

let isName="jack";
let val
let res = isName.length>0 ? (isName)=>`Hellow ${isName}`  :
                                             (isName) =>  `${isName} is not  valid name.please enter valid name`
       
    console.log(res(isName))
