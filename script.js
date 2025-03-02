const bobaCats = new Map();

// from most extroverted to most introverted
bobaCats.set("MMP", 0); // meow meow passionfruit
bobaCats.set("3JT", 0); // 3j triplets
bobaCats.set("SMM", 0); // strawberry mango minuet
bobaCats.set("HH", 0); // honeydew himalayan
bobaCats.set("CBC", 0); // creme brulee cat
bobaCats.set("MM", 0); // matcha munchkin
bobaCats.set("BSR", 0); // brown sugar ragdoll
bobaCats.set("OC", 0); // oreo cat
bobaCats.set("PMK", 0); // pearl milk kitty
bobaCats.set("TSH", 0); // taro shorthair

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

// after the no question question
function noQuestion(questionNum) {
  document.getElementById(questionNum).style.display = "none";
  document.getElementById(questionNum + 0.5).style.display = "block";
}

function updateScore(cat, score) {
  bobaCats.set(cat, score + bobaCats.get(cat));
  console.log(bobaCats); // debugging
}

function getResults(cat3, cat2, cat1) {
  updateCatScore(cat3, cat2, cat1);

  // find the highest score
  let highestScore = 0;
  let highestScoreCat = "";
  bobaCats.forEach((score, cat) => {
    if (score > highestScore) {
      highestScore = score;
      highestScoreCat = cat;
    }
  });

  document.getElementById("quiz").style.display = "none";
  document.getElementById("results").style.display = "block";

  // display the cat
  document.getElementById("result").innerText = highestScoreCat + "!";
}

function question(cat3, cat2, cat1, questionNum) {
  updateCatScore(cat3, cat2, cat1);
  nextQuestion(questionNum);
}

function updateCatScore(cat3, cat2, cat1) {
  updateScore(cat3, 3);
  updateScore(cat2, 2);
  updateScore(cat1, 1);
}
