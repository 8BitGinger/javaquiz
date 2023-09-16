var questions = [
    {
        question: ".0 <br> ------<br>Hello! I'm Jumpy the Java Frog! <br>  <br>Help me answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize our score-time by 10 seconds! <br><br> After you select an answer the next button will appear and your timer will begin.  <br> Try it out by clicking: 'Start Quiz'",
        answers: [
            {text: "Start Quiz", correct: true},

        ]
    },

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
var questionLength = questions.length - 1;

let currentQuestionIndex = 0;
let score = 0;




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
    let questionNo = currentQuestionIndex;
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
    }else{
        selectedBtn.classList.add("incorrect");
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
        startQuiz();
    }
})

function showScore() {
    resetState();
    questionEl.innerHTML = "Final Score:";
    scoreEl.innerHTML = score -1 + "   out of   " + questionLength;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

startQuiz();