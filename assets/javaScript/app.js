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
        question: "What color is the sky?",
        answers: [
            "Blue",
            "Red",
            "Green",
            "Up"
        ],
        correctAnswer: "Blue"
    },
    {
        question: "What was the first full-length CGI movie?",
        answers: [
            "A Bug's Life",
            "Monsters Inc.",
            "Toy Story",
            "The Lion King"
        ],
        correctAnswer: "Toy Story"
    },
];

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
    // a.attr("value", "start");
    $(".question").append(a);
    $(".start-button").on("click", start);
    // alert("this is working");
    
    // console.log(questionArray[0].answers);
};

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
    console.log($(this).val());
    // console.log(questionArray[0].answers.length);
    // answer choices 1:
    for (var i = 0; i < questionArray[0].answers.length; i++) {
        console.log(questionArray[0].answers.length);
        var b = $("<button>");
        b.text(questionArray[0].answers[i]);
        b.attr("value", questionArray[0].answers[i]);
        b.addClass("choices")
        $(".answers").append(b);
    };
};

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

    $(".choices").on("click", function () {
        stop();
        userGuess = $(this).val();
        if (userGuess === questionArray[0].answers[3]) {
            $(".question").text("Correct!")
            numCorrect++;
        } else {
            $(".question").text("NOPE! The correct answer is Game Time");
            numWrong++;
        };
        if (countdown === 0) {
            stop();
            $(".question").text("TIMES UP! The correct answer is Game Time");
            setTimeout(function (questionOne) {
                $(".question").text(questionArray[1].question);
                $(".answers").empty();
                countdown = 30;
                interalID = setInterval(count, 1 * 1000);
                // count();
                for (var i = 0; i < questionArray[1].answers.length; i++) {
                    console.log(questionArray[1].answers.length);
                    var b = $("<button>");
                    b.text(questionArray[1].answers[i]);
                    b.addClass("choices-2")
                    $(".answers").append(b);
                };
            }, 3 * 1000);
        };

        setTimeout(function (questionOne) {
            stop();
            $(".question").text(questionArray[1].question);
            $(".answers").empty();
            countdown = 30;
            interalID = setInterval(count, 1 * 1000);
            for (var i = 0; i < questionArray[1].answers.length; i++) {
                console.log(questionArray[1].answers.length);
                var b = $("<button>");
                b.text(questionArray[1].answers[i]);
                b.addClass("choices-2")
                b.attr("value", questionArray[1].answers[i]);
                $(".answers").append(b);
            };
        }, 3 * 1000);
    });

    // stop();

    $(".choices-2").on("click", function () {
        stop();
        userGuess = $(this).val();
        if (userGuess === questionArray[1].answers[0]) {
            $(".question").text("Correct!")
            numCorrect++;
        } else {
            $(".question").text("Nope! The correct answer is Blue");
            numWrong++;
        };
        setTimeout(function (questionTwo) {
            stop();
            $(".question").text(questionArray[2].question);
            $(".answers").empty();
            countdown = 30;
            interalID = setInterval(count, 1 * 1000);
            for (var i = 0; i < questionArray[2].answers.length; i++) {
                console.log(questionArray[2].answers.length);
                var b = $("<button>");
                b.text(questionArray[2].answers[i]);
                b.addClass("choices-3")
                b.attr("value", questionArray[2].answers[i]);
                $(".answers").append(b);
            };
        }, 3 * 1000);
    });

    $(".choices-3").on("click", function () {
        // alert("this is working");
        stop();
        $(".timer").empty();
        $(".timer").text("GAME OVER!!!");
        $(".question").text("Correct Guesses: " + numCorrect + "-- Incorrect Guesses: " + numWrong);
        $(".answers").empty();


        var b = $("<button class='start-over'>");
        b.text("START OVER");
        $(".answers").append(b);
        // interalID = setInterval(count, 1 * 1000);
        // count();
    });

    $(".start-over").on("click", function () {
        alert("this is working");
        // if (!clockRunning) {
        stop();
        // $(".question").text(questionArray[0].question);
        // $(".answers").empty();
        // countdown = 30;
        // interalID = setInterval(count, 1 * 1000);
        // count();
            // clockRunning = true;
        // }
        // // resetClock();
        // countdown = 30;
        // $(".timer").text("Time Remaining: " + countdown);
        // count();
    
        // question 1:
        
        // console.log(questionArray[0].answers.length);
        // answer choices 1:
        // for (var i = 0; i < questionArray[0].answers.length; i++) {
        //     console.log(questionArray[0].answers.length);
        //     var b = $("<button>");
        //     b.text(questionArray[0].answers[i]);
        //     b.addClass("choices")
        //     $(".answers").append(b);
        // };
    })


};

function stop() {
    clearInterval(interalID);
    // clockRunning = false;
};