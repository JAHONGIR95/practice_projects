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
const questionEls = document.querySelectorAll('.answer');
const questionEl = document.querySelector('#question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBtn = document.querySelector('#submit');