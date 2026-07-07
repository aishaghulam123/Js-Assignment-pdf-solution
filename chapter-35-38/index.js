/// 1.function that Display current date and time

///////////////     Answer       /////////////////////

// function dateAndTime() {
//    document.writeln(new Date()); 
// }
// dateAndTime();
      



/// 2.function that Take first and last name, combine as fullName, greet user.

///////////////     Answer       /////////////////////

// function greet() {
//   var fName = prompt("Enter your First Name");
// var lName = prompt("Enter your Last Name");
// var fullName = fName +" "+ lName;
// alert("Hello " + fullName);  
// }
// greet();

/// 3.function that adds two numbers (input by user)

///////////////     Answer       /////////////////////

// function sum() {
//     var num1 = +prompt("Enter a number ");
// var num2 = +prompt("Enter another number ");
// var sum = num1 + num2;
// document.writeln("Sum of "+num1 +" and" + num2 + " is " +sum)
// }
// sum();



/// 4.Create a function using num1, num2, operator to display result.

///////////////     Answer       /////////////////////

// function calculate(num1, num2, operator) {
//   var result;

//   if (operator === "+") result = num1 + num2;
//   else if (operator === "-") result = num1 - num2;
//   else if (operator === "*") result = num1 * num2;
//   else if (operator === "/") result = num1 / num2;

//   return result;
  
// }

// document.writeln(calculate(10, 5, "+"));


/// 5.function that squares its argument

///////////////     Answer       /////////////////////

// function square(a) {
   
//     document.writeln(a*a);
// }

// square(8);

/// 6.function that computes factorial of a number.

///////////////     Answer       /////////////////////

// function factorial(n) {
//     var f = 1;
//     for (var i = 1; i <= n; i++) {
//     f = f * i;
   
        
//     }
//      document.writeln(f);
// }
// factorial(5);

/// 7.function to display counting between start and end numbers.

///////////////     Answer       /////////////////////

// function counting(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.writeln(i + "<br>");
//     }
// }

// counting(1, 10);




/// 8. function that computes hypotenuse of a right angle triangle.  

///////////////     Answer       /////////////////////

// function calculateHypotenuse(base, perpendicular) {

//     function calculateSquare(num) {
//         return num * num;
//     }

//     var hypotenuse = Math.sqrt(
//         calculateSquare(base) + calculateSquare(perpendicular)
//     );

//     document.writeln(hypotenuse);
// }

// calculateHypotenuse(3, 4);


/// 9. Create a function to calculate rectangle area using width and height.

///////////////     Answer       /////////////////////

// function area(width,height) {
//     return width*height
// }
//    1 Arguments as value
// document.writeln(area(20,10)+ "<br>");

// 2. Arguments as variables 
//  var w = 10
//  var h= 5
//  document.writeln(area(w,h));





/// 10. Create a function to check whether a given string is palindrome.

///////////////     Answer       /////////////////////

// function isPalindrome(str) {
//     var reversed = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     if (str === reversed) {
//         document.writeln(str + " is a Palindrome");
//     } else {
//         document.writeln(str + " is Not a Palindrome");
//     }
// }

// isPalindrome("level");

/// 11.Create a function to capitalize the first letter of each word.

///////////////     Answer       /////////////////////

// function titleCase(str) {
//     var words = str.split(" ");
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     var result = words.join(" ");
//     document.writeln(result);
// }


// titleCase("hello world from javascript");


/// 12. Create a function to find the longest word in a string.

///////////////     Answer       /////////////////////

// function LongestWord(str) {
//     var words = str.split(" ");
//     var longest = "";

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }

//     document.writeln("Longest word: " + longest);
// }


// LongestWord("JavaScript is a versatile programming language");




/// 13. Create a function to count occurrences of a letter in string.

///////////////     Answer       /////////////////////

// function countLetter(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     document.writeln("Letter '" + letter + "' occurs " + count + " times.");
// }


// countLetter('JSResourceS.com', 'o');

 


/// 14. Create two functions to calculate a circle’s circumference and area.

///////////////     Answer       /////////////////////

// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.writeln("The circumference is " + circumference + "<br>");
// }

// function calcArea(radius) {
//     var area = Math.PI * radius * radius;
//     document.writeln("The area is " + area);
// }


// calcCircumference(5);
// calcArea(5);

