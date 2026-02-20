/// 1.Create and initialize an empty multidimensional array.

///////////////     Answer       /////////////////////

// var arr = [
//     [],
//     [],
//     []
// ];


/// 2. Declare and initialize a multidimensional matrix array.

///////////////     Answer       /////////////////////

// var arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// for (var i = 0; i < arr.length; i++) {
//     document.writeln(`${arr[i].join(" ") } <br>`)
    
// }

/// 3. Write a program to print numeric counting from 1 to 10. 
///////////////     Answer       /////////////////////

// for (var i = 1; i <=10; i++) {
// document.writeln(i +"<br>")   
// }


/// 4. Print multiplication table using for loop with user input number and length.

///////////////     Answer       /////////////////////

// var table = +prompt("Enter a number to Show its multiplication table");
// var length = +prompt("Enter Length for multiplication table");

// document.writeln("Table of "+table + "<br><br>");
// for (var i = 1; i <=length; i++) {
//    document.writeln(table+ " x "+ i +" = " + table*i + "<br>");
    
// }


/// 5.Print all items of the given fruits array using a for loop.

///////////////     Answer       /////////////////////

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"] ;
// for (var i = 0; i < fruits.length; i++) {
//     document.writeln(fruits[i]+"<br><br>");  
// }
// for (var i = 0; i < fruits.length; i++) {
    
//     document.writeln(`Element at Index ${i} is ${fruits[i]}<br><br>`);
// }



/// 6.Generate counting, reverse, even, odd, and k-series in browser.

///////////////     Answer       /////////////////////

  //////////////////////////// a
//  document.writeln (`<h3>Counting:</h3>`);

//   for (var i = 1; i <=15; i++) {
     

//     if (i <15) {
//          document.writeln(i+",");
//     }
//     else{
//          document.writeln(i);
//     }
//   }

//    document.writeln(`<br><br>`);

//   //////////////////////////// b
//  document.writeln (`<h3> Reverse counting:</h3>`);
//   for (var i = 10; i >=1; i--) {
//      if (i  >1) {
//          document.writeln(i+",");
//     }
//     else{
//          document.writeln(i);
//     }
//   }


//   //////////////////////////// c

//  document.writeln (`<h3> Even: </h3>`);
//   for (var i = 0; i <=20; i++) {
//     if (i % 2 === 0) {
//          if (i  <20) {
//          document.writeln(i+",");
//     }
//     else{
//          document.writeln(i);
//     }
//     }
  
//   }


//   //////////////////////////// d

//  document.writeln (`<h3> Odd: </h3>`);
//   for (var i = 0; i <=20; i++) {
//     if (i % 2 !== 0) {
//          if (i  <19) {
//          document.writeln(i+",");
//     }
//     else{
//          document.writeln(i);
//     }
//     }
  
//   }


//   //////////////////////////// e

//  document.writeln (`<h3> Series:</h3>`);
//   for (var i = 2; i <=20; i+=2) {
   
//          if (i  <20) {
//          document.writeln(i+"k,");
//     }
//     else{
//          document.writeln(i+"k");
//     }
    
  
//   }



/// 7.Search user input in array and show if the item is found or not.

///////////////     Answer       /////////////////////

// var items =  ["cake", "apple pie","cookie","chips", "patties"]; 
// var user = prompt("Welcome too ABC bakery . what do you want to order sir/ma'am?").toLowerCase();
// var isItemFound = false;

// for (var i = 0; i < items.length; i++) {
//     if (user === items[i]) {
//         isItemFound = true;
//     document.writeln(`${user} is <b>avaible</b> at Index ${i} in our bakery  <br><br>`);
// break;
//     }
 
//     }

// if (isItemFound === false) {
//     document.writeln(` We are sorry ${user} is <b>not avaible</b> in our bakery  <br><br>`); 
// }



/// 8. Find the largest number in the given array

// var a  = [24, 53, 78, 91, 12];
//     document.writeln(`Array items ${a} <br><br>`);

//   var largest = a[0];
//   for (var i = 0; i < a.length; i++) {
//     if (a[i]> largest) {
//         largest= a[i];
   
   
//     }
    
//   }
//    document.writeln(` The largest number is ${largest} `); 



/// 9. Find the smallest number in the given array

// var a  = [24, 53, 78, 91, 12] ;
//     document.writeln(`Array items ${a} <br><br>`);

//   var smallest = a[0];
//   for (var i = 0; i < a.length; i++) {
//     if (a[i]< smallest) {
//         smallest= a[i];
   
   
//     }
    
//   }
//    document.writeln(` The smallest number is ${smallest} `); 


/// 1.Print all multiples of 5 from 1 to 100.


// for (var i= 1; i <= 100; i++) {
//      if (i % 5 === 0) {
//          if (i  <100) {
//          document.writeln(i+",");
//     }
//     else{
//          document.writeln(i);
//     }
//     }
    
// }
