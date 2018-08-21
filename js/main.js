
// clicking on rock will run the game with "rock" as the user choice
// the  computer will randomly generate a choice
// the computer's choice will be compared against the user's choice
// the result will be displayed, and added to the user's history
// average win choice percentage is calculated
$(document).ready( function() {
  var choiceArray = ["rock", "paper", "scissors"];
  var winCount = 0;
  var lossCount = 0;
  var drawCount = 0;

// clicking on start button REPLACES it with 3 new buttons, "rock" "paper" "scissors"
  $('#strtBtn').click(function() {
    $('#strtBtn').remove();
    $( "#buttons" ).append( '<button id="rockBtn">Rock</button>' ); 
    $( "#buttons" ).append( '<button id="paperBtn">Paper</button>' );
    $( "#buttons" ).append( '<button id="scissorsBtn">Scissors</button>' );
    }
  );



  $('#buttons').on('click','#rockBtn', function() {

    var compRand = choiceArray[Math.floor(Math.random()*choiceArray.length)];
      
    if (compRand == 'rock') {
      drawCount += 1;

    } else if (compRand == 'paper') {
      lossCount += 1;

    } else if (compRand == 'scissors') {
      winCount += 1;
      
    } else {
      //some error
      alert("error!")
    }
    
  });
  
  $('#buttons').on('click','#paperBtn', function() {
    var compRand = choiceArray[Math.floor(Math.random()*choiceArray.length)];
    
    if (compRand == 'rock') {
      winCount += 1;
    } else if (compRand == 'paper') {
      drawCount += 1;
    } else if (compRand == 'scissors') {
      lossCount += 1;
    } else {
      //some error
    }
  
  });
  
  $('#buttons').on('click','#scissorsBtn', function() {
    var compRand = choiceArray[Math.floor(Math.random()*choiceArray.length)];
    
    if (compRand == 'rock') {
      lossCount += 1;
    } else if (compRand == 'paper') {
      winCount += 1;
    } else if (compRand == 'scissors') {
      drawCount += 1;
    } else {
      //some error
    }

  });

})