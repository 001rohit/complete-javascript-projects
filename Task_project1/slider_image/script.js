
let image = document.querySelectorAll(".image");
let mainbox = document.getElementById("mainbox");
let slider =1;

// function left() {
//    mainbox.style.transform = `translateX(-${(slider-1)*420}px)`;
//   slider--
// }
// function getFirst(){
//     mainbox.style.transform = `translateX(0px)`;
//     slider=1
// }
// function right() {
//    if(slider<image.length){
//     mainbox.style.transform = `translateX(-${slider*420}px)`;
//     slider++
//    }
//    else{
//            getFirst()
//    }
   
// }


function left1(){
   mainbox.style.transform = `translateX(-${(slider-1)*340}px)`;
    slider--;
 }

 function getRestart(){
   mainbox.style.transform = `translateX(0px)`
        slider=1
 }
 function right1(){
    if(slider<image.length){
       mainbox.style.transform = `translateX(-${slider*340}px)`;
       slider++;
    }
    else{
       
        getRestart()
    }
 }
console.log("hellow this is profile card slider")