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
        answers: [
            "Blue",
            "Red",
            "Green",
            "Up"
        ],
        correctAnswer: "Blue"
    },
    {
        question: "How old am I?",
        answers: [
            "21",
            "18",
            "32",
            "STFU"
        ],
        correctAnswer: "STFU"
    },

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

// var answersFirst = ["Four", "Midnight", "High Noon", "Game time"];
// var answersSecond = ["Blue", "Red", "Green", "Up"]

// console.log(questionArray[0].answers);


// console.log(questionArray[0].answers.b);
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
    // alert("this is working");
    
    // console.log(questionArray[0].answers);
};

// click an answer choice --> displays gif of correct answer, changes results, generates new question + answer choices  
$(".choices").on("click", function () {
//     // event.preventDefault();
    alert("this is working");
    // var userGuess = $(this).val();
    // console.log($(this).val());
    // questionArray++;
    // $(".question").text(questionArray[1].question);
});

// function that starts the game by pressing the start button
function start() {
    if (!clockRunning) {
        interalID = setInterval(count, 1 * 1000);
        clockRunning = true;
    }
    // // resetClock();
    // countdown = 30;
    // $(".timer").text("Time Remaining: " + countdown);
    // count();

    // question 1:
    $(".question").text(questionArray[0].question);
    // console.log(questionArray[0].answers.length);
    // answer choices 1:
    for (var i = 0; i < questionArray[0].answers.length; i++) {
        console.log(questionArray[0].answers.length);
        var b = $("<button>");
        b.text(questionArray[0].answers[i]);
        b.addClass("choices")
        $(".answers").append(b);
    };
};


$(".choices").on("click", function () {
//     stop();
//     // resetClock();
//     // interalID = setInterval(count, 1 * 1000);
});

//     // question 2:
//     // if clock = zero OR user chooses an anwer, then --> display correct answer, update score wins/losses, generate next question

    // if (countdown === 0) {
    //     resetClock();
    //     questionArray++;
    //     $(".question").text(questionArray[1].question);
    //     for (var i = 0; i < answersSecond.length; i++) {
    //         var b = $("<button>");
    //         b.text(answersSecond[i]);
    //         b.addClass("choices")
    //         $(".answers").append(b);
    //     };

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
// };

// function resetClock() {
//     // set clock to 30 seconds
//     countdown = 30;
//     count();

// };

function count() {
//      // show/change the current time display
    $(".timer").text("Time Remaining: " + countdown);
//     // decrement the countdown variable by 1
    countdown--;

    if (countdown < 0) {
        stop();
        alert("this is working");
    //     resetClock();
    };

    $(".choices").on("click", function () {
        // if (!clockRunning) {
        //     interalID = setInterval(count, 1 * 1000);
        //     clockRunning = true;
        // }
        stop();
        $(".question").text(questionArray[1].question);
        $(".answers").empty();
        countdown = 30;
        interalID = setInterval(count, 1 * 1000);
        count();
       
        
        // alert("this is working");
        // questionArray++;
        for (var i = 0; i < questionArray[1].answers.length; i++) {
            console.log(questionArray[1].answers.length);
            var b = $("<button>");
            b.text(questionArray[1].answers[i]);
            b.addClass("choices-2")
            $(".answers").append(b);
        };
        count();
    });

    $(".choices-2").on("click", function () {
        stop();
        countdown = 31;
        $(".question").text(questionArray[2].question);
        $(".answers").empty();

    });


};

function stop() {
    clearInterval(interalID);
    clockRunning = false;
};