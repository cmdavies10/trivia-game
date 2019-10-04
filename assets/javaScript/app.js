// add document ready function
//create variables
var questionArray = {
    questions: [
        "What time is it?",
    ],
    answers: [
        "Game time",
    ]
};

console.log(questionArray.questions[0]);
console.log(questionArray.answers[0]);

var userGuess = [];
var countdown = 30;
var interalID = setInterval(count, 1 * 1000);


// create starting page on load
window.onload = function() {
    var a = $("<button>");
    a.text("Start!");
    a.addClass("btn btn-lg start-button");
    $(".question").append(a);
    $(".start-button").on("click", start);
};

function start() {
    countdown = 30;
    $(".timer").text("Time Remaining: " + countdown);
    count();

    for (var i = 0; i < questionArray; i++) {
        $(".question").text(questionArray.questions[0]);
        $(".answers").text(questionArray.answers[i]);
    }
    
    
    
};

function resetClock() {
    countdown = 30;
    $(".timer").text("Time Remaining: " + countdown);
    count();
};
console.log(resetClock());
resetClock();


function count() {
    // decrement the countdown variable by 1
    countdown--;
    // change the current time display
    
};
 
// once starting button clicked, start game - load = timer 30 seconds, question and four answer choices
// $(".btn").on("click", function () {
    

// });