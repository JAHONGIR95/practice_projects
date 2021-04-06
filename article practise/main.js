const quizData = [
    {
        question: "Uzbekistonning poytaxti qayer",
        a: "Toshkent",
        b: "Samarqand",
        c: "Bukhara",
        d: "Qarshi",
        correct: "a",
    },
    {
        question: "Dunyodagi eng uzun daryo",
        a: "Qashqadaryo",
        b: "Nill",
        c: "Amudaryo",
        d: "Surxondaryo",
        correct: "b",
    },
    {
        question: "Koreadagi eng mashhur texnologik konpaniya",
        a: "Apple",
        b: "Heunday",
        c: "Lenovo",
        d: "Sumsung",
        correct: "d",
    },
    {
        question: "Italiya qaysi qitada joylashgan",
        a: "Osiyo",
        b: "Afrika",
        c: "Yevropa",
        d: "Janubiy Amerika",
        correct: "c",
    },
    {
        question: "Uzbekistonning pul birligi nima?",
        a: "Sum",
        b: "Dollar",
        c: "Yevro",
        d: "Dinor",
        correct: "a",
    }
];

const quiz = document.querySelector('#quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.querySelector('#question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBtn = document.querySelector('#submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswer(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerEls.forEach(answerEl => {
      if(answerEl.checked){
          answer = answerEl.id;
      }  
    })
    return answer;
}

submitBtn.addEventListener('click', () =>{
    const answer = getSelected();
    
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
    
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2><button onclick="location.reload()">Reload</button>`
        }
    }

})