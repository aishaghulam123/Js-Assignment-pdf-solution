/// 1.Enter a positive number and display its round, floor, and ceil values.

///////////////     Answer       /////////////////////

// var num = parseFloat(prompt("Enter a positive integer"));


//  document.writeln(`Number : <b> ${num}  </b><br><br> 
//    round off value  : <b> ${Math.round(num)}  </b> 
//       <br><br> 
//       floor value : <b> ${Math.floor(num)}  </b> 
//       <br><br> 
//       ceil value: <b> ${Math.ceil(num)}  </b>
//       <br><br> `);
      



/// 2. Enter a negative floating number and display its round, floor, and ceil values

///////////////     Answer       /////////////////////

// var num = parseFloat(prompt("Enter a negative floating number"));


//  document.writeln(`Number : <b> ${num}  </b><br><br> 
//    round off value  : <b> ${Math.round(num)}  </b> 
//       <br><br> 
//       floor value : <b> ${Math.floor(num)}  </b> 
//       <br><br> 
//       ceil value: <b> ${Math.ceil(num)}  </b>
//       <br><br> `);


/// 3. Write a program to display the absolute value of a number.

///////////////     Answer       /////////////////////

// var num = parseInt(prompt("Enter a number"));


//  document.writeln(`Absolute value of  ${num}  is  ${Math.abs(num)}`);

/// 4. Write a program to simulate a dice using random() and display result.

///////////////     Answer       /////////////////////
// var dice = Math.floor(Math.random()*6)+1;
//  document.writeln(`Random Dice value :  ${dice} `);



/// 5.Write a program to simulate a coin toss using random() and display result.

///////////////     Answer       /////////////////////

// var coin = Math.ceil(Math.random()*2);
// if (coin === 1) {
//      document.writeln(`${coin}<br>Random Coin value :  Tails `);
// } else {
//     document.writeln(`${coin}<br>Random Coin value :  Heads`);
// }



/// 6.Write a program to display a random number between 1 and 100.

///////////////     Answer       /////////////////////
// var num = Math.floor(Math.random()*100)+1;
//  document.writeln(`Random Number between 1 and 100 :  ${num} `);





/// 7. Ask user weight, parse input, and display weight in browser.

///////////////     Answer       /////////////////////

// var weight = parseFloat(prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs):"));


//  document.writeln(`your weight is  ${weight}  Kilograms.`);





/// 8. Generate secret number 1–10 and check if user guesses correctly.

///////////////     Answer       /////////////////////

// var number = Math.floor(Math.random()*10)+1;
// var userGuess = +prompt("Guess number between 1 and 10");

// if (userGuess === number) {
//    document.writeln("Congratulations! You guessed the correct number.");

// }else if (userGuess === number - 1 || userGuess === number + 1 ) {
//       document.writeln("Close enough to the correct answer! The secret number was " + number);
// }
//  else {
//     document.writeln("Try again! The secret number was " + number);
// }


