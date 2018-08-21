
// clicking on rock will run the game with "rock" as the user choice
// the  computer will randomly generate a choice
// the computer's choice will be compared against the user's choice
// the result will be displayed, and added to the user's history
// average win choice percentage is calculated

$(document).ready( function(){

  var choiceArray = {rock: 'rock', paper:'paper', scissors:'scissors'};

// clicking on start button REPLACES it with 3 new buttons, "rock" "paper" "scissors"
  $('#strtBtn').click(function() {
    $('#strtBtn').remove();
    $( "#buttons" ).append( "<button id='rockBtn'>Rock</button>" );
    $( "#buttons" ).append( "<button id='rockBtn'>Rock</button>" );
    $( "#buttons" ).append( "<button id='rockBtn'>Rock</button>" );
    }
  );

  $('#rockBtn').click(function() {

    }
  );

  $('#rockBtn').click(function() {

    }
  );

  $('#rockBtn').click(function() {

    }
  );

})
