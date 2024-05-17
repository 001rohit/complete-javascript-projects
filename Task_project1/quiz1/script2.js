const quizData = [
    {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
    },
    {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
    },
  ];

let submit1 = document.getElementById("submit")
let option1 = document.getElementById("a_text")
let option2 = document.getElementById("b_text")
let option3 = document.getElementById("c_text")
let option4 = document.getElementById("d_text")
let questionElement = document.getElementById("question")
let answareElement = document.querySelectorAll(".answar")
let quiz01 = document.getElementById("quiz1")
let currentQuize = 0;
let score=0;

// #check wrong answare
// #check right anware
//fatch data 
// #compare data to array object

const wrongAns1=()=>{
    answareElement.forEach((ans)=>(ans.checked)=false);
}
const rightAns1 = ()=>{
    let rightAns;
    answareElement.forEach((answareElement)=>{
        if(answareElement.checked){
            rightAns = answareElement.id;
        }
    });
    return rightAns;
}

const loadQuiz1 = () =>{
    wrongAns1();
    const currectQuize1 = quizData[currentQuize];
    questionElement.innerHTML = currectQuize1.question
    option1.innerHTML = currectQuize1.a
    option2.innerHTML = currectQuize1.b
    option3.innerHTML = currectQuize1.c
    option4.innerHTML = currectQuize1.d
}
loadQuiz1();

submit1.addEventListener("click",()=>{
    const answareElement = rightAns1();
    if(answareElement){
        if(answareElement===quizData[currentQuize].correct)score++;
        currentQuize++;
        if(currentQuize<quizData.length)
        loadQuiz1();
    else{
        quiz01.innerHTML =  `<h1>your score is ${score} out of total question ${quizData.length} </h1>
      <button onclick="history.go(0)">Again Restart</button>`  
    }
    }
})
console.log("hellow")