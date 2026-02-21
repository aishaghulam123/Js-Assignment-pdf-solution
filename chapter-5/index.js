/// 1. take two number add them in new variable show result in broweser

///////////////     Answer       /////////////////////

//var num1 = 3;
// var num2 =5;
// var sum = num1 + num2;
// document.writeln("The sum of " + num1 + " and " + num2 + " is " + sum) ;


/// 2. Repet task 1 for subtraction, multiplication, division & modulus

///////////////     Answer       /////////////////////

//////////////////////////////////////////  Subtraction
//var num1 = 3;
// var num2 =5;
// var sum = num1 - num2;
// document.writeln("The difference of " + num1 + " and " + num2 + " is " + sum) ;


//////////////////////////////////////////  Multiplication
//var num1 = 3;
// var num2 =5;
// var sum = num1 * num2;
// document.writeln("The product of " + num1 + " and " + num2 + " is " + sum) ;



//////////////////////////////////////////  Division
//var num1 = 3;
// var num2 =5;
// var sum = num1 / num2;
// document.writeln("The quotient of " + num1 + " and " + num2 + " is " + sum) ;



////////////////////////////////////////// Modulus
//var num1 = 3;
// var num2 =5;
// var sum = num1 % num2;
// document.writeln("The remainder of " + num1 + " and " + num2 + " is " + sum) ;





/// 3. do the following using js math experssion


///////////////     Answer       /////////////////////

/////////////////// a) Declare a variable.

// var value;


/////////////////// b) show the value of variable in browser 


// document.writeln("value after variable declaration is : " + value )



/////////////////// c) Intialize the variable with some number.


// value = 5;



/////////////////// d) show the value of variable in browser 



// document.writeln("<br> Initial value : " + value );   



/////////////////  e)Increment the variable


// value++;



////////////////// f) show the value of variable in browser 


// document.writeln("<br>value after increment is : " + value );  



////////////////// g)Add 7 to the variable



// value = value + 7;



/////////////////// h) show the value of variable in browser 



// document.writeln("<br>value after addition is : " + value );  



//////////////////  i)Decrement the variable


// value--;



/////////////////// j) show the value of variable in browser 



// document.writeln("<br>value after decrement is : " + value ); 



/////////////////////// k) show the remainder after dividing the variable's value by 3.


// var remainder = value % 3;



/////////////////////// l)show the value of variable in browser 



// document.writeln("<br>The remainder is : " + remainder ); 



/// 4. store ticket price 600pkr in variable & show total cost of buying 5 tickets

///////////////     Answer       /////////////////////

// var ticket = 600;
// var totalCost = ticket*5;
// document.writeln("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");



/// 5.Display multiplication of any number in your browser

///////////////     Answer       /////////////////////

// var num =4;
// document.writeln("Table of "+num + "<br><br>");
// for (var i = 1; i <=10; i++) {
//    document.writeln(num+ " x "+ i +" = " + num*i + "<br>");
    
// }



/// 6.Temperature Converter:
// a) Store a Celsius value in a variable.
// b) Convert it to Fahrenheit and print: “NN°C is NN°F”.
// c) Store a Fahrenheit value in a variable.
// d) Convert it to Celsius and print: “NN°F is NN°C”.

///////////////     Answer       /////////////////////


// var celsius = 25;
// var fahrenheit = (celsius *9/5) + 32;
// document.writeln(celsius + "°C is " + fahrenheit + "°F <br><br>");

// var fahrenheit2 = 70;
// var celsius2 = (fahrenheit2 - 32) * 5/9;
// document.writeln(fahrenheit2 + "°F is " + celsius2 + "°C <br><br>");





/// 7.Shopping Cart Checkout Program:
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges
// Calculate the total cost and display the receipt in the browser.

///////////////     Answer       /////////////////////

// var price1 = 650;
// var price2 = 100;
// var quantity1 = 3;
// var quantity2 = 7;
// var shippingCharges = 100;
// var totalCost = (price1*quantity1) + (price2*quantity2) + shippingCharges;

// document.writeln(`    <h1>Shopping Cart Receipt</h1> <br>
//     <p>price of item 1 : ${ price1 }</p>
//      <p>Quantity of 1 : ${quantity1 }</p>
//      <p>price of item 2 : ${ price2 }</p>
//      <p>Quantity of 2 : ${quantity2}</p>
//       <p>Shipping charges : ${shippingCharges}</p><br>
//        <p>Total cost of your order is : ${totalCost}</p>

//     `)



/// 8.Percentage Calculator Program:
// Store total marks and obtained marks in variables, calculate the percentage, and display the result in the browser.


///////////////     Answer       /////////////////////


// var total = 980;
// var obtained =804;
// var percentage =(obtained/total)*100;

// document.writeln(`    <h1>Mark Sheet</h1> <br>
//      <p>total marks :${ total }</p>
//       <p>marks obtained : ${obtained}</p>
//       <p>percentage : ${ percentage }</p>
//      `)


/// 9.Convert 10 USD and 25 SAR into Pakistani Rupees in one expression.
// (Rates: 1 USD = 104.80 PKR, 1 SAR = 28 PKR)

///////////////     Answer       /////////////////////

// document.writeln(`    <h1>Currency in PKR</h1> <br>
//      <p>total currency in PKR is :${ 10 * 104.80 + 25 * 28 }</p>
     
//      `)



/// 10.Write a program that takes a number and performs: +5, ×10, ÷2 in a single expression.

///////////////     Answer       /////////////////////

// var num = 10;
//          document.writeln(`    
//      <p>Answer :${ num +5 *10 /2 }</p>
     
//      `)


/// 11.Write a program to calculate a person’s two possible ages using current year and birth year, and display: “They are either NN or NN years old.”

///////////////     Answer       /////////////////////


// var year = 2016;
// var birthYear = 1992;
// var age1 = year-birthYear;
// var age2 = age1-1;
// document.writeln(`They are either ${age2} or ${age1} years old.`);

// document.writeln(`<h1>Age calculator</h1> <br>
//       <p>Current year :${ year }</p>
//         <p>Birth year :${birthYear}</p>
//           <p>Age :${ age1 }</p>`);
        


/// 12. The Geometrizer – Circle Calculation
// a)Store a radius in a variable.
// b)Calculate the circumference using the formula: Circumference = 2 × π × r (π = 3.142)
// c)Calculate the area using the formula: Area = π × r² (π = 3.142)

///////////////     Answer       /////////////////////

// var radius = 20;
// var pi = 3.142;
// var circum = 2 * pi * radius;
// var area = pi* radius*radius;

// document.writeln(`    <h1>The Geometrizer</h1> <br>
//     <p>Radius of circle : ${ radius }</p>
//      <p>The circumference is : ${circum }</p>
//      <p>The area is : ${ area }</p>
     
//     `)



/// 13.The Lifetime Supply Calculator
// a)Store your favorite snack in a variable.
// b)Store your current age in a variable.
// c)Store your maximum age in a variable.
// d)Store the estimated amount eaten per day in a variable.
// e)Calculate the total amount needed for the rest of your life.


///////////////     Answer       /////////////////////

// var snack= "chocolate chip";
// var age = 15;
// var maxAge = 65;
// var est = 3;
// var calc= (maxAge-age)* est *365;

// document.writeln(`<h1>The Lifetime Supply Calculator</h1>

//     <p>Favourite Snack: ${ snack }</p>
//     <p>Current age: ${age}</p>
//     <p>Estimated Maximum Age: ${ maxAge }</p>
//     <p>Amount of snacks per day: ${est }</p>
//     <p>You will need  ${calc } chocolate chip to last you until the ripe old age of 65</p>`)