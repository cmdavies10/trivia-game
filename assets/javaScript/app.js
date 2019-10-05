//create variables
var questionArray = [
    {
        question: "Which of the following is NOT a name of one of the Spice Girls?",
        answers: [
            "Sporty Spice",
            "Fred Spice",
            "Scary Spice",
            "Posh Spice"
    ],
        correctAnswer: "Fred Spice"
    },
    {
        question: "Which NBA team won the most titles in the 90s?",
        answers: [
            "New York Knicks",
            "Portland Trailblazers",
            "Los Angeles Lakers",
            "Chicago Bulls"
        ],
        correctAnswer: "Chicago Bulls"
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

var userGuess = [];
var countdown = 30;
var numCorrect = 0;
var numWrong = 0;

// create starting page on load
window.onload = function() {
    var a = $("<button>");
    a.text("Start!");
    a.addClass("btn btn-lg btn-success start-button");
    // a.attr("value", "start");
    $(".question").append(a);
    $(".start-button").on("click", start);
};

// stop function -- clear interval
function stop() {
    clearInterval(interalID);
};

// function that starts the game by pressing the start button
function start() {
    // set interval
    interalID = setInterval(count, 1 * 1000);

    // display question one and first answer array as buttons
    $(".question").text(questionArray[0].question);
    for (var i = 0; i < questionArray[0].answers.length; i++) {
        var b = $("<button>");
        b.text(questionArray[0].answers[i]);
        b.attr("value", questionArray[0].answers[i]);
        b.addClass("choices btn btn-lg btn-primary")
        $(".answers").append(b);
    };
};

// count function -- contains nested functions 
function count() {
    $(".timer").text("Time Remaining: " + countdown + " seconds");
    countdown--;

    // First answer array 
    $(".choices").on("click", function () {
        stop(); 
        userGuess = $(this).val();

        // user guess logic -- score tally not functioning?? add stop function after??
        if (userGuess === questionArray[0].answers[1]) {
            $(".question").text("Correct!")
            numCorrect++;
        } else {
            $(".question").text("NOPE! The correct answer is Fred Spice");
            numWrong++;
        };

        // if statement logic for timer -- not functioning (move outside the on click function?)
        if (countdown === 0) {
            stop();
            $(".question").text("TIMES UP! The correct answer is Fred Spice");
            numWrong++;

            setTimeout(function (questionOne) {
                $(".question").text(questionArray[1].question);
                $(".answers").empty();
                countdown = 30;
                interalID = setInterval(count, 1 * 1000);
                for (var i = 0; i < questionArray[1].answers.length; i++) {
                    var b = $("<button>");
                    b.text(questionArray[1].answers[i]);
                    b.addClass("btn btn-lg btn-primary choices-2")
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
                var b = $("<button>");
                b.text(questionArray[1].answers[i]);
                b.addClass("btn btn-lg btn-primary choices-2")
                b.attr("value", questionArray[1].answers[i]);
                $(".answers").append(b);
            };
        }, 3 * 1000);
    });

    // SECOND ANSWER ARRAY
    $(".choices-2").on("click", function () {
        stop();
        userGuess = $(this).val();

        if (userGuess === questionArray[1].answers[3]) {
            $(".question").text("Correct!")
            numCorrect++;
        } else {
            $(".question").text("Nope! The correct answer is Chicago Bulls");
            numWrong++;
        };

        setTimeout(function (questionTwo) {
            stop();
            $(".question").text(questionArray[2].question);
            $(".answers").empty();
            countdown = 30;
            interalID = setInterval(count, 1 * 1000);
            for (var i = 0; i < questionArray[2].answers.length; i++) {
                var b = $("<button>");
                b.text(questionArray[2].answers[i]);
                b.addClass("btn btn-lg btn-primary choices-3")
                b.attr("value", questionArray[2].answers[i]);
                $(".answers").append(b);
            };
        }, 3 * 1000);
    });

    // THIRD ANSWER ARRAY 
    $(".choices-3").on("click", function () {
        stop();
        userGuess = $(this).val();

        if (userGuess === questionArray[2].answers[2]) {
            $(".question").text("Correct!")
            numCorrect++;
        } else {
            $(".question").text("Nope! The correct answer is Toy Story");
            numWrong++;
        };

        setTimeout(function (questionThree) {
            stop();
            // intervalID = setInterval(count, 1 * 1000);
            $(".question").text(questionArray[2].question);
            $(".answers").empty();
            $(".timer").empty();
            $(".timer").text("GAME OVER!!!");
            // var newDiv = $("<div>");
            // newDiv.text("Correct:  ");
            $(".question").text("Correct Guesses: " + numCorrect + " / Incorrect Guesses: " + numWrong);
            $(".answers").empty();
            var b = $("<button class='btn btn-lg btn-danger start-over'>");
            b.text("START OVER");
            $(".answers").append(b);
        }, 3 * 1000);
        stop();
    });

    // START OVER BUTTON -- on click that resets the game without re-loading the page 
    $(".start-over").on("click", function () {
        stop();
        console.log("this is working");
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

