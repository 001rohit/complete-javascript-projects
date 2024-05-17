// function myfun(){
//     x = 10
//     console.log(x)
// }
// console.log(x)
// myfun()

// const num = [1,2,3,4,5,null,""]
// let res = num.filter((e)=>e<2)
// console.log(res)

// let str = num.map((e)=>{
//     if(e){
//         return e;
//     }
// })
// console.log(str)
// console.log(typeof(str))

let val = document.getElementById("val")
let btn = document.getElementById("btn")
let count =0

// let click = true;
// btn.onclick = function(){
//         setInterval(() => {
//             count++
//             if(count>10){
//                 count=1
//                 console.log(count)
//                 val.textContent = count
    
//             }
//             else{
//                 val.textContent = count
//                 console.log(count)
//             } 
//         },1000);
// }
let stop = setInterval( start, 1000);

function start(){
               count++
                if(count>10){
                    count=1
                    console.log(count)
                    val.textContent = count     
                }
                else{
                    val.textContent = count
                    console.log(count)
                } 
                // val.textContent = count
}
btn.addEventListener("click",btnFun)

function btnFun(){
    clearInterval(stop)
}