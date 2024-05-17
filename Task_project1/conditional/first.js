// let count = 0
// function loop(){
//     count++
//     if(count>10){
//            console.log("above 10",count)
//     }
//     else{
//         console.log(count)
//     }
// }
// setInterval(loop,1000)

// color apply in background for body

// function btn(){
//     let val = document.getElementById("val").value;
//         document.getElementById("val").value = " "
//         alert(`you enter color is ${val}`)
//         document.body.style.background =  val
// }

// find person  who can vote  can or not vote

// let root = document.getElementById("root")
           
// function btn(){
//   var age = parseInt(document.getElementById("val").value);
//      console.log(typeof(age));
//     let res1 =  age>18 ? ()=>"you can vot" : ()=>"you can not vote"
//         root.innerHTML= res1()
//      } 

 //    use switch statement 
//  according day to find status

//  let root = document.getElementById("root")
//  function btn(){
//    var day  = document.getElementById("val").value;
//    day = day.toLowerCase()
//    console.log(day)
//    var val;
//     switch(day){
//       case "sunday" : val = "You can enjoy sunday"
//            break;
//       case "monday": 
//       case "Tuesday": val = "You can join meeting "
//           break;
//      case "wedensday":
//       case "thursday": val = "You can achieve level"
//       break;
//      case "frieday":
//      case "saterday": val = "You can accept next challenge"
//        break;
//       default: val = "Please enter your valid day"

//     }
//     root.innerHTML = val
//   }

// change body color 
let count = 0
function btn(){
 if(count%2==0){
     count++
      document.body.style.background = "brown" 
 }
 else{
     count++
     document.body.style.background = "cyan" 
 }
 }