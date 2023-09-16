var questions = [
    {
        question: "What is Question 1",
        answers: [
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
            {text: "right answer", correct: true},
            {text: "wrong answer", correct: false},
        ]
    },

    {
        question: "What is Question 2",
        answers: [
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
            {text: "right answer", correct: true},
            {text: "wrong answer", correct: false},
        ]
    },

    {
        question: "What is Question 3",
        answers: [
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
            {text: "right answer", correct: true},
            {text: "wrong answer", correct: false},
        ]
    },

    {
        question: "What is Question 4",
        answers: [
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
            {text: "right answer", correct: true},
            {text: "wrong answer", correct: false},
        ]
    },

    {
        question: "What is Question 5",
        answers: [
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
            {text: "right answer", correct: true},
            {text: "wrong answer", correct: false},
        ]
    },

    {
        question: "What is Question 6",
        answers: [
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
            {text: "right answer", correct: true},
            {text: "wrong answer", correct: false},
        ]
    },

    {
        question: "What is Question 7",
        answers: [
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
            {text: "right answer", correct: true},
            {text: "wrong answer", correct: false},
        ]
    },

    {
        question: "What is Question 8",
        answers: [
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
            {text: "right answer", correct: true},
            {text: "wrong answer", correct: false},
        ]
    },

    {
        question: "What is Question 9",
        answers: [
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
            {text: "right answer", correct: true},
            {text: "wrong answer", correct: false},
        ]
    },

    {
        question: "What is Question 10",
        answers: [
            {text: "wrong answer", correct: false},
            {text: "wrong answer", correct: false},
            {text: "right answer", correct: true},
            {text: "wrong answer", correct: false},
        ]
    },
];

var questionEl = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
    });
}

function resetState() {
    nextButton.style.disply = "none";
    while(answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer() {
    var selectedBTN = e.target;
    var isCorrect = selectedBGN.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
}


startQuiz ();