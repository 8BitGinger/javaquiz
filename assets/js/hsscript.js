var questionEl = document.getElementById("question");
var outOf = 10;
var recordScore = localStorage.getItem("highscore");
var recordName = localStorage.getItem("name");
var recordScore2 = 11;




function startPage() {
    questionEl.innerHTML = "High Scores: <br>" + recordName  + " - " + recordScore + " " + " / " + outOf;
}


startPage()