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

  let submit = document.getElementById("submit")
  let option1 = document.getElementById("a_text")
  let option2 = document.getElementById("b_text")
  let option3 = document.getElementById("c_text")
  let option4 = document.getElementById("d_text")
  let question = document.getElementById("question")
  let answare = document.querySelectorAll(".answare")
let quize = document.getElementById("quize")
  let currentQuize = 0
  let score=0

  const wrongAns=()=>{
    answare.forEach((ans)=>(ans.checked)=false);
  };
  const rightAns=()=>{
    let rightAns1;
      answare.forEach((answare)=>{
        if(answare.checked){
            rightAns1 =answare.id;
        }
      });
      return rightAns1;
  }
  const loadQuiz = ()=>{
    wrongAns();
    const currectQuizeData = quizData[currentQuize];
    question.innerText = currectQuizeData.question
    option1.innerHTML = currectQuizeData.a;
    option2.innerHTML = currectQuizeData.b;
    option3.innerHTML = currectQuizeData.c;
    option4.innerHTML = currectQuizeData.d;
  }
  loadQuiz();

  submit.addEventListener("click",()=>{
    const answar = rightAns();
    if(answar){
        if(answar===quizData[currentQuize].correct)
            score++;
            currentQuize++;
        if(currentQuize <quizData.length)
            loadQuiz();
        
        else{
            quize.innerHTML = `
             <h2>Your answared ${score}/${quizData.length} question correctly </h2>
             <button onclick = "history.go(0)>Play again</button>
            `
        }
    }
  })