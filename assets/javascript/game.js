var win = 0;
var loss = 0;
var targetNumber;
var currentScore = 0;
resetStart();

$(document).on("click", "img", function() {
    //adds the value of the crystal clicked to score
    currentScore += +$(this)[0].dataset.crystalvalue;
    console.log(currentScore);
    //displays new score
    $('#currentScore').html(currentScore);
    console.log(currentScore);

    if (currentScore == targetNumber) {
        win++;
        resetStart();
    } else if (currentScore > targetNumber) {
        loss++;
        resetStart();
    } 
});


function resetStart() {

    // generates random number between 20-100
    targetNumber = Math.floor(Math.random() * 81) + 20;

    // displays targetNumber on page
    $("#number-to-guess").text(targetNumber);

    console.log(targetNumber);
    currentScore = 0; 
   //displays reset score
    $('#currentScore').html(currentScore);
   //displays total losses and w
    $('#losses').html(loss);
    $('#wins').html(win);

    var numberOptions = [];

    for (var i = 0; i < 4; i++) {
        // generates random number between 1-9
        var randNum = Math.floor(Math.random() * 9) + 1;
        numberOptions.push(randNum);
    }

    console.log(numberOptions);

    $("#red").attr("data-crystalvalue", numberOptions[0]);
    $("#purple").attr("data-crystalvalue", numberOptions[1]);
    $("#green").attr("data-crystalvalue", numberOptions[2]);
    $("#clear").attr("data-crystalvalue", numberOptions[3]);

    console.log($('#red').attr("data-crystalvalue"));
    console.log($('#purple').attr("data-crystalvalue"));
    console.log($('#green').attr("data-crystalvalue"));
    console.log($('#clear').attr("data-crystalvalue"));

    

}

