var questionEl = document.getElementById("question");
var outOf = 10;
var recordScore = localStorage.getItem("highscore");
var recordName = localStorage.getItem("name");
var recordScore2 = 11;


console.log(recordName);


function startPage() {
    questionEl.innerHTML = "Top 5 <br>" + recordScore + " " + " / " + outOf;
}


startPage()