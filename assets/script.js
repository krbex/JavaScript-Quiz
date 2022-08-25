var questionCards = document.querySelector("#questions");
var answerCard1 = document.querySelector("#answer-card-1");
var answerCard2 = document.querySelector("#answer-card-2");
var answerCard3 = document.querySelector("#answer-card-3");
var answerCard4 = document.querySelector("#answer-card-4");
var questions = document.querySelector("#questions");
var timerEl = document.querySelector("#timer");
var startButton = document.querySelector("#start-button");
var leaderboard = document.querySelector("#leaderboard")
var choiceCards = document.querySelector(".choiceCard")
var aside = document.querySelector("#answer-check")
// Calls elements for use in javascript

document.getElementById("question-cards").style.visibility = "hidden";
// Hides question cards until the start button is pressed

var timer = timerEl.textContent;
var timerCount;
var isWin = false;
var initials;
var leaderboard = {
    initialsLB: [],
    scoreLB: [],
};
// Establishes variables for use later

var questionsObj = {
    questions: ["Who is Lews Therin Telemon?", "How does Egwene cement her power over the Little Tower sitters?", "Who's name is first on the list burned into Rand al'Thor's soul?"]
}
var correctAnswers = {
    correct: ["All of the above.", "By declaring war on Elaida.", "Moiraine Damodred"],
}
var wrongAnswers = {
    wrong1: ["The Dragon", "Kinslayer", "Lord of the morning"],
    wrong2: ["By inventing new weaves and impressing the Aes Sedai.", "By cleansing Saidin with the Dragon Reborn.", "By demoting Romanda and Lelaine from the Shawl to Accepted."],
    wrong3: ["Egwene al'Vere", "Lan Fear", "Lews Therin Telemon"],
}
// Establishes questions, correct answers, and wrong answers

function init() {
    getInitials();
};
init();
// Calls the scores and initials from local storage

function startGame() {
    isWin = false;
    startButton.disabled = 'true';
    choiceCards.visibility = 'visible';
    startTimer();
    questionOne();

    // Starts the timer and resets the won flag

    function startTimer() {
        timerCount = 60;
        timer = setInterval(function () {
            timerCount--;
            timerEl.textContent = timerCount;
            if (timerCount <= 0) {
                timerCount = 0
                clearInterval(timer);
                loseGame();
            };
        }, 1000);
    };
    // Sets the game to end when the timer ends

    function questionOne() {
        document.getElementById("question-cards").style.visibility = "visible";
        questionCards.textContent = questionsObj.questions[0];
        answerCard1.textContent = wrongAnswers.wrong1[0];
        answerCard1.addEventListener("click", function (event) {
            event.preventDefault;
            aside.textContent = "Wrong!";
            timerCount -= 10;
            event.stopPropagation;

        });
        answerCard2.textContent = wrongAnswers.wrong1[1];
        answerCard2.addEventListener("click", function (event) {
            event.preventDefault;
            aside.textContent = "Wrong!";
            timerCount -= 10;
            event.stopPropagation;

        });
        answerCard3.textContent = wrongAnswers.wrong1[2];
        answerCard3.addEventListener("click", function (event) {
            event.preventDefault;
            aside.textContent = "Wrong!";
            timerCount -= 10;
            event.stopPropagation;

        });
        answerCard4.textContent = correctAnswers.correct[0];
        answerCard4.addEventListener("click", function (event) {
            event.preventDefault;
            aside.textContent = "Correct!";
            questionTwo();
        });
    }
    // Sets the question and answers for question one, calls function questionTwo on correct answer

    function questionTwo() {
        document.getElementById("question-cards")
        questionCards.textContent = questionsObj.questions[1];
        answerCard1.textContent = wrongAnswers.wrong2[0];
        answerCard1.addEventListener("click", function (event) {
            event.preventDefault;
            aside.textContent = "Wrong!";
            timerCount -= 10;
            event.stopPropagation;
        });
        answerCard2.textContent = correctAnswers.correct[1];
        answerCard2.addEventListener("click", function (event) {
            event.preventDefault;
            aside.textContent = "Correct!";
            timerCount +=10;
            questionThree();
        });
        answerCard3.textContent = wrongAnswers.wrong2[2];
        answerCard3.addEventListener("click", function (event) {
            event.preventDefault;
            aside.textContent = "Wrong!";
            timerCount -= 10;
            event.stopPropagation;

        });
        answerCard4.textContent = wrongAnswers.wrong2[1];
        answerCard4.addEventListener("click", function (event) {
            event.preventDefault;
            aside.textContent = "Wrong!";
            timerCount -= 10;
            event.stopPropagation;

        });
    }
    // Sets the questions and answers for question two, calls function questionThree on correct answer

    function questionThree() {
        document.getElementById("question-cards")
        questionCards.textContent = questionsObj.questions[2];
        answerCard1.textContent = correctAnswers.correct[2];
        answerCard1.addEventListener("click", function (event) {
            event.preventDefault;
            aside.textContent = "Correct!";
            clearInterval(timer);
            timerCount +=20
            winGame();
        });
        answerCard2.textContent = wrongAnswers.wrong3[0];
        answerCard2.addEventListener("click", function (event) {
            event.preventDefault;
            aside.textContent = "Wrong!";
            timerCount -= 10;
        });
        answerCard3.textContent = wrongAnswers.wrong3[2];
        answerCard3.addEventListener("click", function (event) {
            event.preventDefault;
            aside.textContent = "Wrong!";
            timerCount -= 10;
        });
        answerCard4.textContent = wrongAnswers.wrong3[1];
        answerCard4.addEventListener("click", function (event) {
            event.preventDefault;
            aside.textContent = "Wrong!";
            timerCount -= 10;
        });
    }
    // Sets the questions and answers for question three, calls function winGame on correct answer
}

function winGame() {
    questions.textContent = ["You won with " + timerCount + "seconds left!"];
    choiceCards.visibility = 'hidden';
    isWin = true;
    startButton.disabled = false;
    setLeaderboard();
};
// Displays a game end screen and calls the setLeaderboard function

function loseGame() {
    questions.textContent = "You lose!";
    startButton.disabled = false;
    // choiceCards.disabled = true;

};
// Displays a game over screen

function setLeaderboard() {
    if (isWin) {
        updateLeaderboard = window.confirm("Would you like to add your score to the leaderboard?");
        if (updateLeaderboard) {
            storedInitials = window.prompt("Please enter your initials");
            if (storedInitials);
            setInitials();
        };
    };
};
// Allows players the option to add their score to the leaderboard

var updateLeaderboard = '';

leaderboard = JSON.stringify(updateLeaderboard);

function setInitials() {
    storedInitials = leaderboard.initialsLB
    localStorage.setItem("Score", leaderboard)
    timerCount = leaderboard.scoreLB
    localStorage.setItem("leaderboard", leaderboard)
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}
// Uses input from setLeaderboard to add initials to local storage

startButton.addEventListener("click", startGame);
// Ties the game start to the start button

function getInitials() {
    localStorage.getItem("Initials")
}
// Calls stored initials