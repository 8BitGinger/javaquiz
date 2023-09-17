var questions = [
 

    {
        question: "Inside which Element do you put JavaScript?",
        answers: [
            {text: "< var >", correct: false},
            {text: "< section >", correct: false},
            {text: "< script >", correct: true},
            {text: "< code >", correct: false},
        ]
    },

    {
        question: "If you type the following code in the console window, what result will you get? 3 > 2 > 1 === false",
        answers: [
            {text: "false", correct: false},
            {text: "true", correct: true},

        ]
    },

    {
        question: "JavaScript is a _____-side Scripting Language",
        answers: [
            {text: "Client", correct: false},
            {text: "Server", correct: false},
            {text: "Both", correct: true},
            {text: "None", correct: false},
        ]
    },

    {
        question: "Which of the following will write the message 'Hello DataFlair!' in an alert box?",
        answers: [
            {text: "alert('Hello DataFlair!')", correct: true},
            {text: "alertBox('Hello DataFlair!')", correct: false},
            {text: "alert(Hello DataFlair!)", correct: false},
            {text: "msgAlert('Hello DataFlair!')", correct: false},
        ]
    },

    {
        question: "Which JavaScript label catches all the values, excep for the ones specified?",
        answers: [
            {text: "catch", correct: false},
            {text: "default", correct: true},
            {text: "label", correct: false},
            {text: "try", correct: false},
        ]
    },

    {
        question: "Which are the correct 'if' statemetns to execute certain code if 'x' is equal to 2?",
        answers: [
            {text: "if(x 2)", correct: false},
            {text: "if(x=2)", correct: false},
            {text: "if(x == 2)", correct: true},
            {text: "if(x != 2)", correct: false},
        ]
    },

    {
        question: "What will the code return?: Boolean(3 < 7)",
        answers: [
            {text: "true", correct: true},
            {text: "false", correct: false},
            {text: "NaN", correct: false},
            {text: "SyntaxError", correct: false},
        ]
    },

    {
        question: "A JavaScript File has an Extension of",
        answers: [
            {text: ".Java", correct: false},
            {text: ".Js", correct: true},
            {text: ".javascript", correct: false},
            {text: ".xml", correct: false},
        ]
    },

    {
        question: "Which Function is Used To Parse a String To Int?",
        answers: [
            {text: "Integer.Parse", correct: false},
            {text: "Int.Parse.String", correct: false},
            {text: "Parse.Int", correct: false},
            {text: "Int.Parse", correct: true},
        ]
    },

    {
        question: "Which Of The Dialog Box Display a Message And a Data Entry Field?",
        answers: [
            {text: "Alert()", correct: false},
            {text: "Confirm()", correct: false},
            {text: "Prompt()", correct: true},
            {text: "Msg()", correct: false},
        ]
    },
];
var scoreEl = document.getElementById("score");
var questionEl = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-btn");
var saveButton = document.getElementById("saveScore");
var questionLength = questions.length;
var resultEl = document.getElementById("result");
var startOver = document.getElementById("btn1");
var timeLeft = 75;
var timerEl = document.getElementById('Timer');
var timerId = setInterval(countdown, 1000);
var nameEl = document.getElementById("name");
var submitScoreEl = ("#submit");
var highscore = 0;

let currentQuestionIndex = 0;
let score = 0;


function countdown() {

    if (timeLeft == 0) {
      clearTimeout(timerId);
      timerEl.innerHTML = "Expired"
      timerEl.classList.add("expired");
      showScore();
    } else {
      timerEl.innerHTML = "🕑 " + timeLeft + ' seconds left';
      timeLeft--;
    }
  }


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEl.innerHTML = questionNo + ". " + currentQuestion.question;
    scoreEl.innerHTML = " ";
    nextButton.style.display = "none";


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

function selectAnswer(e) {
    var selectedBtn = e.target;
    var isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score += 1;
        resultEl.innerHTML = "🐸Correct!";
    }else{
        selectedBtn.classList.add("incorrect");
        resultEl.innerHTML = "Incorrect!🐸"
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        timerEl.innerHTML = " ";
        startQuiz();
    }
})

function newField() {
    var input = document.createElement('input');
    input.className = 'input';
    input.type = 'input';
    input.id = 'input';
    input.value = 'Enter Name Here';

    answerButtons.appendChild(input);
}


function showScore() {
    resetState();
    newField();
    questionEl.innerHTML = "Final Score:";
    scoreEl.innerHTML = score  + "   out of   " + questionLength;
    nextButton.style.display = "none";
    saveButton.innerHTML = "Save Score";
    saveButton.style.display = "block";
    resultEl.classList.add("hide");
    
}

function setHighScore() {
   var enterName = document.getElementById(nameEl).value;
    localStorage.setItem("highscore", score);
    localStorage.setItem("name", enterName);
    console.log(enterName);
}

function handleNextButton() {
    resetResult();
    countdown();
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
     
        showQuestion();
    }else{
        showScore();
    }
}

function resetResult() {
    document.getElementById("result").innerHTML = " ";
}

startQuiz();

