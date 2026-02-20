/// 1. Takes character and check if it is a number, uppercase or lowercase letter

///////////////     Answer       /////////////////////



// var char = prompt("Enter a character:");
// var ascii = char.charCodeAt(0);

// if (char.length === 1) {
//     if (ascii >= 48 && ascii <= 57) {
//     document.writeln("It is a number.");
// }
// else if (ascii >= 65 && ascii <= 90) {
//     document.writeln("It is an uppercase letter.");
// }
// else if (ascii >= 97 && ascii <= 122) {
//     document.writeln("It is a lowercase letter.");
// }
// else {
//     document.writeln("Invalid input.");
// }
// }
// else {
//     document.writeln("Please enter only one character!");
// }



/// 2. “Find larger of two integers. show if both are  equal

///////////////     Answer       /////////////////////

// var num1= +prompt("Enter First Number");
// var num2= +prompt("Enter Second Number");
// if(num1>num2){document.writeln(`${num1} is greater`);}
// else if(num1<num2){document.writeln(`${num2} is greater`);}
// else{document.writeln(`Both numbers are equal`)}




/// 3.Check if a number is positive, negative, or zero

///////////////     Answer       /////////////////////

// var num = +prompt("Enter a Number!");
// if (num>0 ) {
//     document.writeln(`${num} is Positive`);
// }else if (num<0) {
//     document.writeln(`${num} is Negative`);
// }
// else{document.writeln(`${num} is Zero`);}





/// 4.Check if a character is a vowel

///////////////     Answer       /////////////////////

// var char = prompt("Enter a character").toLocaleLowerCase();
// if (char.length === 1) {
//     if (char === "a" || char === "e"|| char === "i"|| char === "o"|| char === "u" ) {
//          document.writeln(`${char} is a vowel`);
//     }
//     else{
//          document.writeln(`${char} is not a vowel`);
//     }
// }
//  else{
//          document.writeln(`Please Enter only one Character`);
//     }


/// 5.Check if entered password is correct

///////////////     Answer       /////////////////////


// var correctPass = "my password";
// var userPass = prompt("Enter your password.");
// if (!userPass) {
//      document.writeln(` Please enter your password`)
// }else  if (userPass === correctPass) {
//          document.writeln(`Correct! The password you entered matches the original password`);
// }

//     else{document.writeln(`Incorrect password`)}
  



/// 6. This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// else 
// greeting = "Good evening"; 
// }

///////////////     Answer       /////////////////////


// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; }
// else { 
// greeting = "Good evening"; 
// }
// document.writeln(greeting)

/// 7.Convert 24-hour time to 12-hour format.

///////////////     Answer       /////////////////


// var time = prompt("Enter time in 24-hour format (e.g., 1900):");

// var hours = time.slice(0, 2);
// var minutes = time.slice(2, 4);

// var period;

// if (hours === 0) {
//     hours = 12;
//     period = "AM";
// } 
// else if (hours < 12) {
//     period = "AM";
// } 
// else if (hours === 12) {
//     period = "PM";
// } 
// else {
//     hours = hours - 12;
//     period = "PM";
// }

// document.writeln(hours + ":" + minutes + " " + period);









