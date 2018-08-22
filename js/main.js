
// clicking on rock will run the game with "rock" as the user choice
// the  computer will randomly generate a choice
// the computer's choice will be compared against the user's choice
// the result will be displayed, and added to the user's history
// average win choice percentage is calculated
$(document).ready( function() {

  var choiceArray = ["Rock", "Paper", "Scissors"];

  var winCount = 0;
  var lossCount = 0;
  var drawCount = 0;

  var rockWinCount = 0;
  var paperWinCount = 0;
  var scissorsWinCount = 0;

  var totalGameCount = 0;

  function calcRock (){
    var rockWinAverage = (rockWinCount / totalGameCount) * 100;

    return rockWinAverage.toFixed(2);
  }
  function calcPaper (){
    var paperWinAverage = (paperWinCount / totalGameCount) * 100;

    return paperWinAverage.toFixed(2);
  }
  function calcScissors (){
    var scissorsWinAverage = (scissorsWinCount / totalGameCount) * 100;

    return scissorsWinAverage.toFixed(2);
  }
  

// clicking on start button REPLACES it with 3 new buttons, "rock" "paper" "scissors"
  $('#strtBtn').click(function() {
    $('#strtBtn').remove();
    $( "#buttons" ).append( '<button id="rockBtn">Rock</button>' ); 
    $( "#buttons" ).append( '<button id="paperBtn">Paper</button>' );
    $( "#buttons" ).append( '<button id="scissorsBtn">Scissors</button>' );
    }
  );



  $('#buttons').on('click','#rockBtn', function() {
// generates a random choice from rock/paper/scissors array, and saves it to a variable, acting as the
// "computer's choice"
    var compRand = choiceArray[Math.floor(Math.random()*choiceArray.length)];

      
// compares random computer choice to user choice, and makes edits/replacesments accordingly.    
    if (compRand == 'Rock') {

      drawCount += 1;
      totalGameCount += 1;

      
      
      $( "#drawCount" ).replaceWith( "<h3 id='drawCount'>Draws: " + drawCount + "</h3>");
      $( "#result" ).replaceWith( "<h3 id='result'>Result: It was a draw!</h3>");
      $( "#userChoice" ).replaceWith( "<h3 id='userChoice'>My Choice: Rock</h3>");
      $( "#computerChoice").replaceWith("<h3 id='computerChoice'>Computer Choice: " + compRand + "</h3>");
    
    } else if (compRand == 'Paper') {

      lossCount += 1;
      paperWinCount =+ 1;
      totalGameCount += 1;

      paperAvg = calcPaper();

      
      
      $( "#lossCount" ).replaceWith( "<h3 id='lossCount'>Losses: " + lossCount + "</h3>");
      $( "#result" ).replaceWith( "<h3 id='result'>Result: You loose!</h3>");
      $( "#userChoice" ).replaceWith( "<h3 id='userChoice'>My Choice: Rock</h3>");
      $( "#computerChoice").replaceWith("<h3 id='computerChoice'>Computer Choice: " + compRand + "</h3>");
      $( "#percentPaper").replaceWith("<h3 id='percentPaper'>Paper: </h3>" + paperAvg + "%</h3>");
    
    } else if (compRand == 'Scissors') {

      winCount += 1;
      rockWinCount += 1;
      totalGameCount += 1;

      rockAvg = calcRock();
    
      $( "#winCount" ).replaceWith( "<h3 id='winCount'>Wins: " + winCount + "</h3>");
      $( "#result" ).replaceWith( "<h3 id='result'>Result: You win!</h3>");
      $( "#userChoice" ).replaceWith( "<h3 id='userChoice'>My Choice: Rock</h3>");
      $( "#computerChoice").replaceWith("<h3 id='computerChoice'>Computer Choice: " + compRand + "</h3>");
      $( "#percentRock").replaceWith("<h3 id='percentRock'>Rock: </h3>" + rockAvg + "%</h3>")
    
    } else {
      //some error
      alert("error!")
    }
    
  });
  
  $('#buttons').on('click','#paperBtn', function() {

    var compRand = choiceArray[Math.floor(Math.random()*choiceArray.length)];
    
    

    if (compRand == 'Rock') {
    
      winCount += 1;
      paperWinCount += 1;
      totalGameCount += 1;

      paperAvg = calcPaper();
    
      $( "#winCount" ).replaceWith( "<h3 id='winCount'>Wins: " + winCount + "</h3>");
      $( "#result" ).replaceWith( "<h3 id='result'>Result: You win!</h3>");
      $( "#userChoice" ).replaceWith( "<h3 id='userChoice'>My Choice: Paper</h3>");
      $( "#computerChoice").replaceWith("<h3 id='computerChoice'>Computer Choice: " + compRand + "</h3>");
      $( "#percentPaper").replaceWith("<h3 id='percentRock'>Paper: </h3>" + paperAvg + "%</h3>")

    } else if (compRand == 'Paper') {
    
      drawCount += 1;
      totalGameCount += 1;

      
    
      $( "#drawCount" ).replaceWith( "<h3 id='drawCount'>Draws: " + drawCount + "</h3>");
      $( "#result" ).replaceWith( "<h3 id='result'>Result: It was a draw!</h3>");
      $( "#userChoice" ).replaceWith( "<h3 id='userChoice'>My Choice: Paper</h3>");
      $( "#computerChoice").replaceWith("<h3 id='computerChoice'>Computer Choice: " + compRand + "</h3>");

    } else if (compRand == 'Scissors') {
    
      lossCount += 1;
      scissorsWinCount += 1;
      totalGameCount += 1;

      scissorsAvg = calcScissors();

      
    
      $( "#lossCount" ).replaceWith( "<h3 id='lossCount'>Losses: " + lossCount + "</h3>");
      $( "#result" ).replaceWith( "<h3 id='result'>Result: You loose!</h3>");
      $( "#userChoice" ).replaceWith( "<h3 id='userChoice'>My Choice: Paper</h3>");
      $( "#computerChoice").replaceWith("<h3 id='computerChoice'>Computer Choice: " + compRand + "</h3>");
      $( "#percentScissors").replaceWith("<h3 id='percentScissors'>Scissors: </h3>" + scissorsAvg + "%</h3>");

    } else {
      alert("error!")
    }
  
  });
  
  $('#buttons').on('click','#scissorsBtn', function() {

    var compRand = choiceArray[Math.floor(Math.random()*choiceArray.length)];
    
    if (compRand == 'Rock') {
    
      lossCount += 1;
      rockWinCount += 1;
      totalGameCount += 1;
      rockAvg = calcRock();
      
      $( "#lossCount" ).replaceWith( "<h3 id='lossCount'>Losses: " + lossCount + "</h3>");
      $( "#result" ).replaceWith( "<h3 id='result'>Result: You loose!</h3>");
      $( "#userChoice" ).replaceWith( "<h3 id='userChoice'>My Choice: Scissors</h3>");
      $( "#computerChoice").replaceWith("<h3 id='computerChoice'>Computer Choice: " + compRand + "</h3>");
      $( "#percentRock").replaceWith("<h3 id='percentRock'>Rock: </h3>" + rockAvg + "%</h3>")

    } else if (compRand == 'Paper') {
    
      winCount += 1;
      scissorsWinCount += 1;
      totalGameCount += 1;
      scissorsAvg = calcScissors();
      
      $( "#winCount" ).replaceWith( "<h3 id='winCount'>Wins: " + winCount + "</h3>");
      $( "#result" ).replaceWith( "<h3 id='result'>Result: You win!</h3>");
      $( "#userChoice" ).replaceWith( "<h3 id='userChoice'>My Choice: Scissors</h3>");
      $( "#computerChoice").replaceWith("<h3 id='computerChoice'>Computer Choice: " + compRand + "</h3>");
      $( "#percentScissors").replaceWith("<h3 id='percentScissors'>Scissors: </h3>" + scissorsAvg + "%</h3>");

    } else if (compRand == 'Scissors') {
    
      drawCount += 1;
      totalGameCount += 1;
  
      $( "#drawCount" ).replaceWith( "<h3 id='drawCount'>Draws: " + drawCount + "</h3>");
      $( "#result" ).replaceWith( "<h3 id='result'>Result: It was a draw!</h3>");
      $( "#userChoice" ).replaceWith( "<h3 id='userChoice'>My Choice: Scissors</h3>");
      $( "#computerChoice").replaceWith("<h3 id='computerChoice'>Computer Choice: " + compRand + "</h3>");

    } else {
      alert("error!")
    }

  });

})
