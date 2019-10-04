// add document ready function
//create variables
var questionArray = [
    {
        question: "What time is it?",
        answers: [
            "Four",
            "Midnight",
            "High Noon",
            "Game Time"
    ],
        correctAnswer: "Game Time"
    },
    {
        question: "What color is the sky",
        answers: {
            a: "Blue",
            b: "Red",
            c: "Green",
            d: "Up"
        },
        correctAnswer: "Blue"
    }
];
//     questions: [
//         "What time is it?",
//         "What color is the sky",
//     ],
//     answers: [
//         "Game time",
//         "Blue",
//     ]
// };

var answersFirst = ["Four", "Midnight", "High Noon", "Game time"];
var answersSecond = ["Blue", "Red", "Green", "Up"]

console.log(questionArray[0].answers);


console.log(questionArray[0].answers.b);
// console.log(questionArray);
// console.log(questionArray.answers[0]);

var userGuess = [];
var countdown = 30;
var clockRunning = false;
var numCorrect = 0;
var numWrong = 0;


// create starting page on load
window.onload = function() {
    var a = $("<button>");
    a.text("Start!");
    a.addClass("btn start-button");
    $(".question").append(a);
    $(".start-button").on("click", start);
    
    console.log(questionArray[0].answers);

};

// click an answer choice --> displays gif of correct answer, changes results, generates new question + answer choices  
$(".choices").on("click", function (event) {
    event.preventDefault();
    var userGuess = $(this).val();
    // console.log($(this).val());
})

// function that starts the game by pressing the start button
function start() {
    if (!clockRunning) {
        interalID = setInterval(count, 1 * 1000);
        clockRunning = true;
    }
    // resetClock();
    // countdown = 30;
    // $(".timer").text("Time Remaining: " + countdown);
    // count();

    // question 1:
    $(".question").text(questionArray[0].question);
    // answer choices 1:
    for (var i = 0; i < answersFirst.length; i++) {
        console.log(answersFirst);
        var b = $("<button>");
        b.text(answersFirst[i]);
        b.addClass("choices")
        $(".answers").append(b);
    };

    // question 2:
    // if clock = zero OR user chooses an anwer, then --> display gif of correct answer, update score wins/losses, generate next question
    if (countdown === 0) {
        resetClock();
        $(".question").text(questionArray[1].question);
        for (var i = 0; i < answersSecond.length; i++) {
            var b = $("<button>");
            b.text(answersSecond[i]);
            b.addClass("choices")
            $(".answers").append(b);
        };
    }


    // first range of answers:
    // for (var i = 0; i < answersFirst.length; i++) {
    //     var b = ("<button>");
    //     b.addClass("btn btn-lg choices");
    //     b.attr("data-name", answersFirst[i]);
    //     b.text(answersFirst[i]);
    //     $(".answers").append(b);
    // }

    //     $(".answers").text(questionArray.answers[i]);
    // };
};

function resetClock() {
    // set clock to 30 seconds
    countdown = 30;

    count();
};

function count() {
     // show/change the current time display
    $(".timer").text("Time Remaining: " + countdown);
    // decrement the countdown variable by 1
    countdown--;
   
    

    if (countdown === 0) {
        stop();
        resetClock();
    }
};

function stop() {
    clearInterval(interalID);
    clockRunning = false;
}