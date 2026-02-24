/// 1. Write a program that calculates and displays a number’s result in browser.

///////////////     Answer       /////////////////////

// var a = 10;

//  document.writeln(`    <h1>Reults</h1> 
//     <p>The value of a is : ${ a }</p>
//      <p>..............................................</p><br>
//      <p>The value of ++a is : ${++a }</p>
//      <p>Now the value of a is: ${ a }</p><br>
    
//      <p>The value of a++ is : ${a++ }</p>
//      <p>Now the value of a is: ${ a }</p><br>

//      <p>The value of --a is : ${--a }</p>
//      <p>Now the value of a is: ${ a }</p><br>

//      <p>The value of a-- is : ${a-- }</p>
//      <p>Now the value of a is: ${ a }</p>

//     `);


/// 2. Repet task 1 for subtraction, multiplication, division & modulus

///////////////     Answer       /////////////////////

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.writeln(`     
    
//      <p>a is : ${a }</p>
    
//      <p>b is : ${b }</p>
    
//      <p>result is : ${result }</p>


//     <h1>Explanation</h1> 
//     <p><b>Step 1 (--a)</b> Pre-decrement → a becomes 1</p>
     
//     <p><b>Step 2 (--a - --b)</b> a = 1,

// --b → b becomes 0,

// 1 - 0 = 1</p>

//     <p><b>Step 3 (--a - --b + ++b)</b> ++b → b becomes 1,

// 1 + 1 = 2</p>

//     <p><b>Step 4 (--a - --b + ++b + b--)</b> b-- → use 1, then b becomes 0

// 2 + 1 = 3</p>

//     `);

/// 3.Write a program to take username and display greeting.


///////////////     Answer       /////////////////////

// var uName =prompt("Enter Your name ");
// document.writeln("Hello " + uName + " !");

/// 4. store ticket price 600pkr in variable & show total cost of buying 5 tickets

///////////////     Answer       /////////////////////

// var table = +prompt("Enter a number to Show its multiplication table");


// if (table != " ") {
//     document.writeln("Table of "+table + "<br><br>");
//     for (var i = 1; i <=10; i++) {
//    document.writeln(table+ " x "+ i +" = " + table*i + "<br>");
    
// }
    
// }
// else{
//     document.writeln("Table of 5 <br><br>");
//     for (var i = 1; i <=10; i++) {
//    document.writeln(5+ " x "+ i +" = " + 5*i + "<br>");
    
// }
    
// }


/// 5. Take three subjects, calculate total marks and percentage.

///////////////     Answer       /////////////////////

///////////////////////////////// a

// var sub1 = prompt("Enter first subject name ");
// var sub2 = prompt("Enter Second subject name ");
// var sub3 = prompt("Enter Third subject name ");

// ///////////////////////////////// b

// var total= 100;


// ///////////////////////////////// c ,d

// var sub1Marks = prompt("Enter obtained marks for " + sub1);
// var sub2Marks = prompt("Enter obtained marks for " +sub2);
// var sub3Marks = prompt("Enter obtained marks for "+sub3);


// ///////////////////////////////// e

// var totalMarks =total*3
// var obtMarks = sub1Marks + sub2Marks +sub3Marks;
// var percentage = (obtMarks/totalMarks)*100;

// document.writeln(`<table border='1'>
// <tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>

// <tr><td> ${sub1 } </td><td> ${total } </td><td> ${sub1Marks } </td></tr>
// <tr><td> ${sub2 } </td><td> ${total } </td><td> ${sub2Marks } </td></tr>
// <tr><td> ${sub3 } </td><td> ${total } </td><td> ${sub3Marks } </td></tr>

// <tr><th colspan="2">${totalMarks }</th><th> ${obtMarks } </th><th> ${percentage } % </th></tr>
// </table>

// `);
