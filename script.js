const bobaCats = new Map();
bobaCats.set("CBC", 0);
bobaCats.set("TSH", 0);
bobaCats.set("SMM", 0);
bobaCats.set("MM", 0);
bobaCats.set("PMK", 0);
bobaCats.set("HH", 0);
bobaCats.set("BSR", 0);
bobaCats.set("3JT", 0);
bobaCats.set("MMP", 0);
bobaCats.set("OC", 0);

// about page
function aboutPage() {
  document.getElementById("start").style.display = "none";
  document.getElementById("about").style.display = "block";
}

// back to start
function backToStart(page) {
  document.getElementById(page).style.display = "none";
  document.getElementById("start").style.display = "block";
}

// start quiz
function startQuiz() {
  document.getElementById("start").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  // show first question only
  document.querySelectorAll(".question").forEach((question) => {
    question.style.display = "none";
  });
  document.getElementById("1").style.display = "block";
}

// next question
function nextQuestion(questionNum) {
  document.getElementById(questionNum).style.display = "none";
  document.getElementById(questionNum + 1).style.display = "block";
}

// when next question isn't actually a question
function noQuestion(questionNum) {
  document.getElementById(questionNum).style.display = "none";
  document.getElementById(questionNum + 0.5).style.display = "block";
}

// after the no question question
function next(questionNum) {
  noQuestion(questionNum);
}

function updateScore(cat, score) {
  bobaCats.set(cat, score + bobaCats.get(cat));
  console.log(bobaCats); // debugging
}

function getResults() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("results").style.display = "block";

  // find the highest score
  let highestScore = 0;
  let highestScoreCat = "";
  bobaCats.forEach((score, cat) => {
    if (score > highestScore) {
      highestScore = score;
      highestScoreCat = cat;
    }
  });

  // display the cat
  document.getElementById("result").innerText = highestScoreCat + "!";
}

function one1() {
  updateScore("SMM", 3);
  updateScore("HH", 2);
  updateScore("BSR", 1);

  nextQuestion(1);
}

function one2() {
  updateScore("TSH", 3);
  updateScore("PMK", 2);
  updateScore("MM", 1);

  noQuestion(1);
}

function two1() {
  updateScore("HH", 3);
  updateScore("BSR", 2);
  updateScore("SMM", 1);

  nextQuestion(2);
}

function two2() {
  updateScore("MMP", 3);
  updateScore("3JT", 2);
  updateScore("OC", 1);

  nextQuestion(2);
}

function two3() {
  updateScore("PMK", 3);
  updateScore("TSH", 2);
  updateScore("CBC", 1);

  nextQuestion(2);
}

function two4() {
  updateScore("BSR", 3);
  updateScore("MM", 2);
  updateScore("CBC", 1);

  nextQuestion(2);
}

function three1() {
  updateScore("TSH", 3);
  updateScore("3JT", 2);
  updateScore("CBC", 1);
  nextQuestion(3);
}
function three2() {
  updateScore("CBC", 3);
  updateScore("OC", 2);
  updateScore("MM", 1);
  nextQuestion(3);
}
function three3() {
  updateScore("SMM", 3);
  updateScore("HH", 2);
  updateScore("MMP", 1);
  nextQuestion(3);
}
function three4() {
  updateScore("BSR", 3);
  updateScore("PMK", 2);
  updateScore("3JT", 1);
  nextQuestion(3);
}

function four1() {
  updateScore("PMK", 3);
  updateScore("CBC", 2);
  updateScore("TSH", 1);
  noQuestion(4);
}

function four2() {
  updateScore("MMP", 3);
  updateScore("3JT", 2);
  updateScore("OC", 1);
  noQuestion(4);
}

function four3() {
  updateScore("HH", 3);
  updateScore("BSR", 2);
  updateScore("SMM", 1);
  noQuestion(4);
}

function four4() {
  updateScore("3JT", 3);
  updateScore("MM", 2);
  updateScore("BSR", 1);
  noQuestion(4);
}

function five1() {
  updateScore("MM", 3);
  updateScore("BSR", 2);
  updateScore("CBC", 1);
  nextQuestion(5);
}

function five2() {
  updateScore("HH", 3);
  updateScore("TSH", 2);
  updateScore("OC", 1);
  nextQuestion(5);
}

function five3() {
  updateScore("3JT", 3);
  updateScore("SMM", 2);
  updateScore("PMT", 1);
  nextQuestion(5);
}

function five4() {
  updateScore("MMP", 3);
  updateScore("SMM", 2);
  updateScore("BSR", 1);
  nextQuestion(5);
}

function six1() {
  updateScore("OC", 3);
  updateScore("3JT", 2);
  updateScore("MM", 1);
  nextQuestion(6);
}

function six2() {
  updateScore("CBC", 3);
  updateScore("MM", 2);
  updateScore("TSH", 1);
  nextQuestion(6);
}

function six3() {
  updateScore("PMK", 3);
  updateScore("HH", 2);
  updateScore("TSH", 1);
  nextQuestion(6);
}

function six4() {
  updateScore("MMP", 3);
  updateScore("OC", 2);
  updateScore("BSR", 1);
  nextQuestion(6);
}

function seven1() {
  updateScore("OC", 3);
  updateScore("CBC", 2);
  updateScore("TSH", 1);
  nextQuestion(7);
}

function seven2() {
  updateScore("BSR", 3);
  updateScore("TSH", 2);
  updateScore("CBC", 1);
  nextQuestion(7);
}

function seven3() {
  updateScore("MM", 3);
  updateScore("PMK", 2);
  updateScore("3JT", 1);
  nextQuestion(7);
}

function seven4() {
  updateScore("HH", 3);
  updateScore("SMM", 2);
  updateScore("MMP", 1);
  nextQuestion(7);
}

function seven5() {
  updateScore("MMP", 3);
  updateScore("OC", 2);
  updateScore("SMM", 1);
  nextQuestion(7);
}

function eight1() {
  updateScore("MM", 3);
  updateScore("TSH", 2);
  updateScore("OC", 1);
  getResults();
}

function eight2() {
  updateScore("SMM", 3);
  updateScore("MMP", 2);
  updateScore("HH", 1);
  getResults();
}

function eight3() {
  updateScore("CBC", 3);
  updateScore("PMK", 2);
  updateScore("MM", 1);
  getResults();
}

function eight4() {
  updateScore("OC", 3);
  updateScore("3JT", 2);
  updateScore("CBC", 1);
  getResults();
}
