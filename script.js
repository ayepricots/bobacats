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

// array to store the cats with the highest score
let highestScoreCats = [];

// switch between pages
function switchPage(page1, page2) {
  document.getElementById(page1).style.display = "none";
  document.getElementById(page2).style.display = "block";
}

// start quiz
function startQuiz() {
  // reset scores
  for (let cat of bobaCats.keys()) {
    bobaCats.set(cat, 0);
  }

  highestScoreCats = [];

  switchPage("start", "quiz");

  // show first question only
  document.querySelectorAll(".question").forEach((question) => {
    question.style.display = "none";
  });
  document.getElementById("1").style.display = "block";
}

// next question
function nextQuestion(questionNum) {
  switchPage(questionNum, questionNum + 1);
}

// after the no question question
function noQuestion(questionNum) {
  switchPage(questionNum, questionNum + 0.5);
}

function updateScore(cat, score) {
  bobaCats.set(cat, score + bobaCats.get(cat));
  console.log(bobaCats); // debugging
}

function getResults(cat3, cat2, cat1) {
  updateCatScore(cat3, cat2, cat1);

  // find the highest score and take note of cats that share the highest score
  let highestScore = 0;

  for (let [cat, score] of bobaCats) {
    if (score > highestScore) {
      highestScore = score;
      highestScoreCats = [cat]; // reset the array
    } else if (score === highestScore) {
      highestScoreCats.push(cat); // add to the array
    }
  }

  console.log(highestScoreCats); // debugging

  // if there is a tie, go the the tiebreaker question
  if (highestScoreCats.length > 1) {
    console.log("tiebreaker");
    switchPage("10", "tiebreaker");

    // only show the cats that are in the tie
    document.querySelectorAll("#tiebreaker button").forEach((cat) => {
      if (highestScoreCats.includes(cat.id)) {
        cat.style.display = "block";
      } else {
        cat.style.display = "none";
      }
    });
  } else {
    console.log("no tiebreaker");
    highestScoreCat = highestScoreCats[0];
    console.log(highestScoreCat);
    displayResult(highestScoreCat);
  }
}

function displayResult(highestScoreCat) {
  console.log("displaying results");

  switchPage("quiz", "results");

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
