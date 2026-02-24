/// 1. Take city name and display special welcome message.

///////////////     Answer       /////////////////////

// var city = prompt("Enter your city name").toLowerCase();
// if (city === "karachi") {
//     alert("Welcome to city of lights")
    
// }
// else{
//     alert("Sorry. try another city name");
    
// }

/// 2.Take gender input and display appropriate greeting message.

///////////////     Answer       /////////////////////

// var gender = prompt("Enter your gender (male/female):").toLowerCase();

// if (gender === "male") {
//     alert("Good Morning Sir.");
// }
// else if (gender === "female") {
//     alert("Good Morning Ma’am.");
// }
// else {
//     alert("Good Morning!");

//     }
/// 3. Take traffic signal color input and display appropriate warning message.


///////////////     Answer       /////////////////////

// var color = prompt("Enter traffic signal color (red, yellow, green):").toLowerCase();
//  if (color === "red") {
//         alert("Must Stop!");
//     } else if (color === "yellow") {
//         alert("Ready to move");
//     } else if (color === "green") {
//         alert("Move now");
//     } else {
//         alert("Invalid color!");
//     }



/// 4. Check car fuel input and alert if less than 0.25 litres.

///////////////     Answer       /////////////////////

// var fuel = prompt("Enter remaining fuel in your car");



// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }else{
//     alert("Have a good day");
// }



/// 5.

///////////////     Answer       /////////////////////

// var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// }
//  var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// } 
//  var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 
// if (c === 13){ 
// alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
// alert("condition 3 is true"); 
// } 
// if(c === 14){ 
// alert("condition 4 is true"); 
// } 
//  var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// } 
//  if (true){ 
// alert("True"); 
// } 
// if (false){ 
// alert("False"); 
// }
//  if("car" < "cat"){ 
// alert("car is smaller than cat"); 
// }

/// 6.Write a program to input marks obtained in three subjects and total marks, calculate the percentage, determine the grade and remarks using this table:

///////////////     Answer       /////////////////////


// var marks1 =+prompt("Enter marks obtained in subject 1:");
// var marks2 =+prompt("Enter marks obtained in subject 2:");
// var marks3 =+prompt("Enter marks obtained in subject 3:");
// var totalMarks =300;

// var obtainedMarks = marks1 + marks2 + marks3;
// var percentage = (obtainedMarks / totalMarks) * 100;

// var grade, remarks;

// if (percentage >= 80) {
//   grade = "A-one";
//   remarks = "Excellent";
// } else if (percentage >= 70) {
//   grade = "A";
//   remarks = "Good";
// } else if (percentage >= 60) {
//   grade = "B";
//   remarks = "You need to improve";
// } else {
//   grade = "Fail";
//   remarks = "Sorry";
// }

// document.writeln(`<h2>Result:</h2>
// Total Marks: ${totalMarks }    <br>
// Marks Obtained: ${obtainedMarks }    <br>
// Percentage: ${percentage }  %<br>
// Grade:  ${grade }   <br>
// Remarks: ${remarks }    <br>`);





/// 7.Create a guess game with secret number and close guess check.

///////////////     Answer       /////////////////////

// var secretNumber = Math.floor(Math.random()*10)+1;


// var guess = Number(prompt("Guess the secret number (1-10):"));

// if (guess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Try again!");
// }





/// 8.Check if number is divisible by 3 and show message.


///////////////     Answer       /////////////////////


var num = +prompt("Enter a number:");

if (num % 3 === 0) {
    alert(num + " is divisible by 3");
} else {
    alert(num + " is not divisible by 3");
}


/// 9. Check if a number is even or odd and display result.

///////////////     Answer       /////////////////////

var num = +prompt("Enter a number:");

if (num % 2 === 0) {
    alert(num + " is an even number");
} else {
    alert(num + " is an odd number");
}


/// 10.Take temperature input and display message according to given range.

///////////////     Answer       /////////////////////

// var temp = +prompt("Enter the temperature in °C:");

// if (temp > 40) {
//     alert("It is too hot outside.");
// } else if (temp > 30) {
//     alert("The Weather today is Normal.");
// } else if (temp > 20) {
//     alert("Today's Weather is cool.");
// } else if (temp > 10) {
//     alert("OMG! Today's weather is so Cool.");
// } else {
//     alert("It's very cold today!");
// }


/// 11.Create a simple calculator using if statements for basic operations.
///////////////     Answer       /////////////////////


// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// var operator = prompt("Enter operation (+, -, *, /, %):");
// var result;

// if (operator === "+") {
//     result = num1 + num2;
// } else if (operator === "-") {
//     result = num1 - num2;
// } else if (operator === "*") {
//     result = num1 * num2;
// } else if (operator === "/") {
//     result = num1 / num2;
// } else if (operator === "%") {
//     result = num1 % num2;
// } else {
//     alert("Invalid operator!");
// }

// if (result !== undefined) {
//     alert("Result: " + result);
// }
        

