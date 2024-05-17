const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const CountLabel= document.getElementById("count1");
let count = 0;
btn1.onclick = function(){
   count++;
   if(count>10){
      alert("This number is restart");
      count=0;
      CountLabel.textContent = count;
   }
   else{
      CountLabel.textContent = count;
   }
}
btn2.onclick = function(){
   count--;
   if(count<0){
      alert("Negative number is not exist")
      count=0
      CountLabel.textContent = count;
   }
   else if( count>0 && count<10){
      CountLabel.textContent = count;
      count--
   }
}
btn3.onclick = function(){
   count=0;
   CountLabel.textContent = count;
}
