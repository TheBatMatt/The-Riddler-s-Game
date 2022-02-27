
/*Criteria*/

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//Variables
var batmanBegins = document.getElementById("batman-begins");
var riddles = document.getElementById("quiz-questions");
var riddleQuiz = document.getElementById("start-quiz");
var quizIndex = 0;
var correctAnswers = 0;
var interval, timer = 120;

//Timer at 120 seconds or 2 minutes
const clocksTicking = 120000;
var timeRemaining = document.getElementById("time-left");

//Questions
var riddleMeThis = [

    //Q01
    {
        number: "Question 1",
        question: "What do they call the team of Batman, Robin, Nightwing, Batgirl and Red Hood?",
        options: ["A. Bat-Clan", "B. Bat-Family", "C. Team-Bat", "D. The Bats"],
        answer: "B. Bat-Family"
    },

    //Q02
    {
        number: "Question 2",
        question: "Who is Batman's closest ally in the Police Force?",
        options: ["A. Harvey Bullock", "B. Barbara Gordon", "C. Renee Montoya", "D. Jim Gordon"],
        answer: "D. Jim Gordon"
    },

    //Q03
    {
        number: "Question 3",
        question: "What is the name of the car Batman drives?",
        options: ["A. Baterang", "B. Bat-Car", "C. Bat-Monster-Truck", "D. Batmobile"],
        answer: "D. Batmobile"
    },

    //Q04
    {
        number: "Question 4",
        question: "Who once broke Batman's back?",
        options: ["A. Mr. Freeze", "B. Bane", "C. Killer Croc", "D. Joker"],
        answer: "B. Bane"
    },

    //Q05
    {
        number: "Question 5",
        question: "Besides 'Dark Knight', which of these is a Batman moniker?",
        options: ["A. World's Greatest Detective", "B. Earth's Smartest Detective", "C. The Planet's Best Detective", "D. The Most Intelligent Detective"],
        answer: "A. World's Greatest Detective"
    },

    //Q06
    {
        number: "Question 6",
        question: "What institution do the majority of Batman's enemies end up after being arrested?",
        options: ["A. Gotham Prison", "B. Bat-Cave", "C. Blackgate Prison", "D. Arkham Asylum"],
        answer: "D. Arkham Asylum"
    },

    //Q07
    {
        number: "Question 7",
        question: "Which of these groups is Batman one of the three founders of?",
        options: ["A. Legion of Doom", "B. Justice Society", "C. Justice League", "D. Justice Squad"],
        answer: "C. Justice League"
    },

    //Q08
    {
        number: "Question 8",
        question: "What is the name of the armoured suit designed by Batman and forged by the Justice League to use in battles beyond his strength level?",
        options: ["A. Hellbat Armor", "B. Bat-Tech Armor", "C. Battle-Bat Armor", "D. Warbat Armor"],
        answer: "A Hellbat Armor"
    },

    //Q09
    {
        number: "Question 9",
        question: "How did Batman get sent back in time at the end of the 'Final Crisis' Event?",
        options: ["A. Lex Luthor's Lexorian Armor", "B. Darkseid's Omega Beams", "C. Joker Stole a Time Machine", "D. The Anti-Life Equation"],
        answer: "B. Darkseid's Omega Beams"
    },

    //Q10 
    {
        number: "Question 10",
        question: "Who took on the mantle of 'Batman' before the original was pulled back from the past?",
        options: ["A. Nightwing", "B. Robin", "C. Red-Hood", "D. Batgirl"],
        answer: "A. Nightwing"
    },

    //Q11
    {
        number: "Question 11",
        question: "What is the name of the evil Batman, leader of the Dark Knights whom invaded Earth from the Dark Multiverse, who came from Earth -22?",
        options: ["A. Dawnbreaker", "B. The Drowned", "C. Red Death", "D. Merciless", "E. Devestator", "F. Grim Knight", "G. The Machine", "H. The Batman Who Laughs"],
        answer: "H. The Batman Who Laughs"
    },

    //Q12
    {
        number: "Question 12",
        question: "What infeced the Batman Who Laughs to make him a hybrid of both Batman and the Joker?",
        options: ["A. Joker-Formula", "B. Joker-Poison", "C. Joker-Toxin", "D. Joker-Infection"],
        answer: "B. Joker-Toxin"
    },

    //Q13
    {
        number: "Question 13",
        question: "Who did Batman team up with to stop the Batman Who Laugh's first reign of terror?",
        options: ["A. Superman", "B. Wonder Woman", "C. Robin", "D. Joker"],
        answer: "D. Joker"
    },

    //Q14
    {
        number: "Question 14",
        question: "What did the Batman Who Laughs call himself after becoming God of the Multiverse?",
        options: ["A. The God Bat", "B. The Darkest Knight", "C. The Dark God", "D. The Bat"],
        answer: "B. The Darkest Knight"
    },

    //Q15
    {
        number: "Question 15",
        question: "Finally, who destroyed the Darkest Knight aka the Batman Who Laughs by throwing him into the sun at the end of time itself?",
        options: ["A. Superman", "B. Batman", "C. Wonder Woman", "D. The Entire Justice Leage"],
        answer: "C. Wonder Woman"
    }
];

//Function to Start the Quiz
function startRiddlerGame() {

    if (quizIndex >= riddleMeThis.length) {
        clearInterval(interval);
        showResults();
        return;
    }

    renderQuizQuestion(quizIndex);
    quizIndex++;
};


//Check Answers Function
function checkAnswers() {

    var selectedAnswer = document.querySelector("input[name=answers]:checked");

    if (selectedAnswer.value === riddleMeThis[quizIndex-1].answer) {
        correctAnswers++
    } else {
        timer -= 10;
    }

    console.log(correctAnswers);

    startRiddlerGame();

}

//Timer
var ticker = function(display) {
    return setInterval(function () {
        var minutes = parseInt(timer / 60);
        var seconds = parseInt(timer % 60);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerText = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            showResults();
        }
    }, 1000);
}


//Start Timer
function startTheClock() {
    console.log(timeRemaining);
    interval = ticker(timeRemaining);
    startRiddlerGame();
}
  
 //Function for showing results
function showResults() {

    var score = document.createElement("h1");
    var results = document.createElement("h2");
    var nameBox = document.createElement("input");
    var resultsButton = document.createElement("button");

    nameBox.type = "text";
    nameBox.placeholder = "Type Name Here";
    resultsButton.innerText = "Submit Name";

    score.innerText = "Final Results";
    results.innerText = correctAnswers;

    results.style["font-size"] = "150px";
    results.style.color = "goldenrod";

    riddleQuiz.innerHTML = "";

    riddleQuiz.appendChild(score);
    riddleQuiz.appendChild(results);
    riddleQuiz.appendChild(nameBox);
    riddleQuiz.appendChild(resultsButton);

    resultsButton.addEventListener("click", function(){
        var name = nameBox.value;
        localStorage.setItem("score", { name:name, correctAnswers:correctAnswers });
    });
}

//Generate Quiz Questions
function renderQuizQuestion(i) {
    var quizItem = riddleMeThis[i];
    var questionTitle = document.createElement("h1");
    var quizDetail = document.createElement("p");
    var quizOptions = document.createElement("div");
    var submitButton = document.createElement("button");
    submitButton.id = "bat-signal";
    submitButton.textContent = "Submit";

    submitButton.className = "bat-button";

    quizOptions.className = "answers";
    

    questionTitle.innerText = quizItem.number;
    quizDetail.innerText = quizItem.question;

    for (var index = 0; index < quizItem.options.length; index++) {
        var quizAnswers = document.createElement("input");
        var radioLabel = document.createElement("label");

        quizAnswers.name = "answers";

        quizAnswers.type = "radio";
        radioLabel.innerText = quizItem.options[index];
        quizAnswers.value = quizItem.options[index];

        if (index === 0) {
            quizAnswers.checked = true;
        }   

        submitButton.style["margin-top"] = "145px";

        quizOptions.appendChild(quizAnswers);
        quizOptions.appendChild(radioLabel);
    }

    riddleQuiz.innerHTML = "";

    riddleQuiz.appendChild(questionTitle);
    riddleQuiz.appendChild(quizDetail);
    riddleQuiz.appendChild(quizOptions);
    riddleQuiz.appendChild(submitButton);

    submitButton.addEventListener("click", checkAnswers);

};


//Event Listener to start the Riddle's Game
batmanBegins.addEventListener("click", startTheClock);
