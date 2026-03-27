/// 1.Display current date and time

///////////////     Answer       /////////////////////

// document.writeln(new Date());
      



/// 2.Display current month name in alert

///////////////     Answer       /////////////////////

// var now = new Date();

// var months = ["January","February","March","April","May","June",
//               "July","August","September","October","November","December"];

// var currentMonth = months[now.getMonth()];

// alert("Current month: " + currentMonth);

/// 3. Display first three letters of current day in alert

///////////////     Answer       /////////////////////

// var now = new Date();

// var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

// var today = days[now.getDay()];

// alert(today);



/// 4. Display “It’s Fun day” if today is Saturday or Sunday.

///////////////     Answer       /////////////////////

// var now = new Date();
// var day = now.getDay();
// document.writeln(day  +"<br>");

// if (day == 0 || day == 6) {
//     document.writeln("It's Fun day")
// }


/// 5.Check date and display first or last days of month.

///////////////     Answer       /////////////////////

// var now = new Date();

// var date = now.getDate();
// document.writeln(date +"<br>");
// if (date<= 15 ) {
//     document.writeln("First fifteen days of the month");
// } else {
//         document.writeln("Last days of the month");

// }



/// 6.Find minutes since Jan 1, 1970 using JavaScript Date object.

///////////////     Answer       /////////////////////

// var today = new Date();
// var mili = today.getTime();

// var min = mili / (1000 * 60);
//  document.writeln(`Current date : <b> ${today}  </b><br><br> 
//  Elapsed miliseconds sice January 1, 1970 : <b> ${mili}  </b> 
//       <br><br> 
//      Elapsed minutes sice January 1, 1970 : <b> ${min} `);



/// 7.Check time and display AM or PM using JavaScript

///////////////     Answer       /////////////////////

// var now = new Date();
// var hour = now.getHours();

// if (hour < 12) {
//     document.writeln("IT'S AM")
// } else {
//       document.writeln("IT'S PM")
// }




/// 8. Create Date object for December 31, 2020 and assign to variable.

///////////////     Answer       /////////////////////

// var laterDate = new Date(2020, 11, 31); 
// document.writeln(laterDate)


/// 9. Calculate days passed since 1st Ramadan, June 18, 2015.

///////////////     Answer       /////////////////////

// var now =new Date();
// var ramdanDate = new Date(2015, 5, 18); 
// var miliPassed = now - ramdanDate;
// var dayPassed = Math.floor(miliPassed /(1000 * 60 * 60 * 24));
// document.writeln( dayPassed + " Days have passed since 1st Ramadan, 2015 ");



/// 10. Calculate seconds elapsed from reference date to January 1, 2015.

///////////////     Answer       /////////////////////

// var referenceDate = new Date();
// var start2015 = new Date(2015, 0, 1);

// var milli = referenceDate - start2015;
// var seconds = Math.floor(milli / 1000);

//   document.writeln(`On reference date  <b> ${referenceDate}  </b><br><br> 
//   <b> ${seconds}  </b>   Seconds has passed since begning of 2015
//       `);

/// 11. Add one hour to current date and display updated Date object.

///////////////     Answer       /////////////////////

// var currentDate = new Date();

// var hours = currentDate.getHours();
// document.writeln(`Current date  <b> ${currentDate}  </b><br><br> `);
// currentDate.setHours(hours + 1);


// document.writeln(`1 hour ahead, it will <b> ${currentDate}  </b>  `);

/// 12. Create a date object and display date set 100 years back.

///////////////     Answer       /////////////////////

// var currentDate = new Date();

// var oldyear = currentDate.getFullYear();
// document.writeln(`Current date  <b> ${currentDate}  </b><br><br> `);
// currentDate.setFullYear(oldyear-100);


// document.writeln(`100 years back, is was <b> ${currentDate}  </b>  `);



/// 13. Ask user’s age and display calculated birth year in browser.

///////////////     Answer       /////////////////////

// var age = parseInt(prompt("Enter Your age"));
// var now = new Date();
// var currentYear = now.getFullYear();

// var birthYear = currentYear -age;
//  document.writeln(`Your Age is   <b> ${age}  </b><br><br> 
//     your Birth year is  ${birthYear}`);
 


/// 14. Write a browser program generating K-Electric bill with units,name,Net Amount Payable, charges,late chages,  Gross Amount Payable .

///////////////     Answer       /////////////////////

// var name = prompt("Enter Your Name");
// var month = prompt("Enter Month");
// var units = prompt("Enter the number of units you used this month. ");
// var chargesPerUnit  = prompt("Charges per unit");
// var netAmount =units * chargesPerUnit;
// var latePayment = 350;
// var grossAmount =netAmount + latePayment;


// document.writeln(`Customer name :  <b> ${name}  </b><br><br> 
//     Month :  <b> ${month}  </b><br><br> 
//     Number of Units :  <b> ${units}  </b><br><br> 
//     Charges per unite :  <b> ${chargesPerUnit}  </b><br><br><br>
//     Net Amount Payable (within Due Date)  :  <b> ${netAmount}  </b><br><br> 
//      Late Payment Surcharge :  <b> ${latePayment}  </b><br><br> 
//    Gross Amount Payable (after Due Date) :  <b> ${grossAmount}  </b><br><br> `);
    
    
 