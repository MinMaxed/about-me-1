'use strict';

// document.getElementById('Emery').onclick = function(){

// Ask user their name

var userName = (prompt('Can you remind me of your name?'));
console.log('Usersname is ' + userName);

var correctAnswer = 0;

question1();
question2();
question3();
question4();
question5();
question6();
question7();

// var q1 = document.getElementById('Emery').onclick = function(){
// question #1
function question1() {

  var transportation = (prompt('Do I ride a bike to Code Fellows? Yes or No?')).toLowerCase();

  if (transportation === 'yes' || transportation === 'y') {
    alert('Your wrong, I ride the bus to CF');
    console.log('User guessed incorrectly, I ride the bus to CF');
  } else{
    alert('You\'re correct, I ride the bus to CF');
    console.log('You\'re correct, I ride the bus to CF');
    correctAnswer++;
  }
}

// question #2
function question2() {
  var oldEnough = (prompt('Am I old enough to drive a car? Y or N?')).toLowerCase();

  if (oldEnough === 'yes' || oldEnough === 'y') {
    alert('You\'re correct! I am legally old enough to drive a car');
    console.log('User guessed correctly, I am old enough to drive a car');
    correctAnswer++;
  } else{
    alert('Wrong answer! I am old enough to drive legally');
    console.log('Wrong answer, I am old enough to drive legally');
  }
}

// question #3
function question3() {
  var travel = (prompt('Does traveling the world excite me? Yes or No?')).toUpperCase();

  if (travel === 'YES' || travel === 'Y') {
    alert('You\'re amazing, I love to travel!');
    console.log('Correct, I love to travel!');
    correctAnswer++;
  } else {
    alert('Wrong answer, traveling the world causes a rush of excitement within me');
    console.log('Wrong answer, traveling the world is a favorite hobby for me');
  }
}
// question #4
function question4() {
  var married = (prompt('Do you think I am married?')).toLowerCase();

  if (married === 'yes' || married === 'y') {
    alert('Correct answer, I have been married for 1 year.');
    console.log('Correct answer, I have been married for 1 year');
    correctAnswer++;
  } else {
    alert('Wrong answer, I have been married for 1 year');
    console.log('Wrong answer, I have been married for 1 year');
  }
}
// question #5
function question5() {
  var codePro = (prompt('Am I a professional coder? Yes or No? and be careful of your response...')).toLowerCase();

  if (codePro === 'yes' || codePro === 'y') {
    alert('Thanks for the confidence boost but I am not a pro yet');
    console.log('Thanks for the confidence boost but I am not a pro yet');
  } else {
    alert('You\'re right, I am not a pro but am striving to be one soon');
    console.log('You\'re right, I am not a pro but am striving to be one soon');
    correctAnswer++;
  }
}
// Question #6
function question6() {
  for (var i = 0; i < 4; i++) {

    var cars = parseInt(prompt('How many cars have I owned? You only get 4 guesses so guess wisely!'));

    if (cars === 5 ) {
      alert('Correct!');
      console.log('Correct! I have owned 5 different cars in my life.');
      correctAnswer++;
      break;
    } else if(cars < 5) {
      alert('Too low, try again');
      console.log('Too low, try again');
    } else if(cars > 5){
      alert('Too high, guess again');
      console.log('Too high, guess again');
    }
  }
}
// Question #7
function question7() {
  var favColor = ['red', 'blue', 'orange', 'green']; //est var array

  var answer = false; //set answer to false
  var guessCount = 0; //set # of guesses to 0

  while (answer === false){ //while anwwer = 0, run this code

    if(guessCount === 0){ //if guess count = 0, run the following code
      var userColor = prompt('Can you guess 1 of my 4 favorite colors?').toLowerCase(); // prompt user and store as var
      guessCount++; //update guessCount var by adding 1
    } else if(guessCount < 6 && guessCount > 0) { //else if guessCount is less than 6 and greater than 0, run the following code
      userColor = prompt('Nope guess again').toLowerCase(); //prompt user to answer question, store answer in var
      guessCount++; //update guessCount var by adding 1 each time this code runs
    } else if(guessCount === 6){ //else if count === 6, run the following code
      alert('Close but no cigar, my 4 favorite colors are ' + favColor); //alert the user if this condition is met
      console.log('Close but no cigar, my 4 favorite colors are ' + favColor);
      break; //stop the loop once the count = 6
    }

    for(var j = 0; j < favColor.length; j++){ //use for loop to iterate through the length of the array favColor

      if (userColor === favColor[j]){ //if user input is equal to an element in the array
        alert('You\'re right, my 4 favorite colors are ' + favColor); //alert the user youre correct if this condition is met
        console.log('You\'re right, my 4 favorite colors are ' + favColor);
        guessCount++; //increment the guess count
        answer = true; //flip the value of answer to true if the for loop evaluates to be true
      }
    }
  }
}
alert('Good work ' + userName + ' you guessed ' + correctAnswer + ' out of 7 answers to be correct'); //alert user of their score
console.log('Good work ' + userName + ' you guessed ' + correctAnswer + ' out of 7 answers to be correct');
