/// 1. Declare an empty array for student names.

///////////////     Answer       /////////////////////

// var student = [];



/// 2. Create an empty array using object notation.

///////////////     Answer       /////////////////////

//var students = new Array();



/// 3. Declare and initialize a strings array.

///////////////     Answer       /////////////////////

// var arr = ["john","doe"];



/// 4.  Declare and initialize a numbers array.

///////////////     Answer       /////////////////////

// var arr =[1,2,3,4];



/// 5. Declare and initialize a boolean array.

///////////////     Answer       /////////////////////

// var arr = [true,false];



/// 6.Declare and initialize a mixed array.

///////////////     Answer       /////////////////////

// var arr = ["john",1,true];



/// 7.Declare and display education qualifications in browser.

///////////////     Answer       /////////////////////


// var qualifications = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS"," M. Phil.", "PhD"];
// document.writeln(`<h1>qualifications</h1> `) 
// for (var i = 0; i < qualifications.length; i++) {
//     document.writeln (`<p>${qualifications[i]}</p>`);
    
// }


/// 8. Store 3 students' names, marks, calculate percentages.

// var students =["Michael","John","Tony"];
// var score = [320,230,480]; 
// var total = 500;

// for (var i = 0; i< students.length; i++) {
// var percentage = (score[i]/total)*100;
// document.writeln(`Score of ${students[i] } is ${score[i]} . Percentage is : ${percentage}%`);
//  document.writeln(`<br> `) 

//     }



/// 9. Manage colors array: add, delete, update by user input.

// var color = ["Red ","Green ","Blue"];

//   document.writeln(`<h3>Initial colours: ${color }</h3>`);

  ////////////////////////////a. add at begning

//   var addStart = prompt("Which color do you want to add to the beginning?");
//   color.unshift(addStart);
//   document.writeln(`<h3>After adding at beginning: ${color } </h3>`);

 /////////////////////////////b. add at end

//     var addEnd = prompt("Which color do you want to add to the end?");
//   color.push(addEnd);
//   document.writeln(`<h3>After adding at End: ${color } </h3>`);

 /////////////////////////////c. Add two more colors to beginning

// color.unshift("purple ","Orange ");
//   document.writeln(`<h3>After adding two colours at beginning: ${color } </h3>`);

  ////////////////////////////d. Delete first color

// color.shift();
//   document.writeln(`<h3>After deleting first color: ${color } </h3>`);

    //////////////////////////e. Delete last color

// color.pop();
//   document.writeln(`<h3>After deleting last color: ${color } </h3>`);

  ////////////////////////////f. Add color at specific index

//   var addIndex = +prompt("At which index do you want to add a color?");
//   var addColor = prompt("Enter colour name");
//   color.splice(addIndex,0,addColor);
//     document.writeln(`<h3>After adding colours at Index ${addIndex }: ${color } </h3>`);

 /////////////////////////////g. Delete color(s) from specific index

// var deletIndex = +prompt("At which index do you want to delete color(s)?");
// var deletColour = +prompt("How many colors do you want to delete?");
// color.splice(deletIndex,deletColour);
//   document.writeln(`<h3>After deleting color(s): ${color } </h3>`);

///10.Store student scores and sort in ascending order.

// var scores = [320, 230, 480, 120];

// document.writeln(`Original Scores: ${scores }  <br><br>`);

// scores.sort();

// document.writeln(`Sorted Scores (Ascending):  ${scores }`);


///11.Initialize cities array and copy 3 elements to another array.

// var cities =["Karach ","Lahore","Islamabad ","Quetta","Peshawar"];
// var cityCopy = cities.slice(2,5);
// document.writeln(`<h3>Cities List:  </h3><h3>${cities }</h3>`);
// document.writeln(`<h3>Selected Cities:</h3> <h3> ${cityCopy }</h3>`);


///12.Join array elements into single string using join() method.

// var arr = ["This" , " is ","  my ","  cat"]; 
// var string = arr.join("");
// document.writeln(`<h3>Array:  </h3><h3>${arr }</h3>`);
// document.writeln(`<h3>String:</h3> <h3> ${string }</h3>`);


///13.Create array and access values using FIFO method.

// var arr =[];
// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Printer ");
// arr.push("Monitor");
// document.writeln(`<h3>Devices:  </h3><h3>${arr }</h3>`);

// document.writeln(`<h3>Out:  </h3><h3>${arr.shift() }</h3>`);
// document.writeln(`<h3>Out:  </h3><h3>${arr.shift() }</h3>`);
// document.writeln(`<h3>Out:  </h3><h3>${arr.shift() }</h3>`);
// document.writeln(`<h3>Out:  </h3><h3>${arr.shift() }</h3>`);

///14.Create array and access values using LIFO method.

// var arr =[];
// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Printer ");
// arr.push("Monitor");
// document.writeln(`<h3>Devices:  </h3><h3>${arr }</h3>`);

// document.writeln(`<h3>Out:  </h3><h3>${arr.pop() }</h3>`);
// document.writeln(`<h3>Out:  </h3><h3>${arr.pop() }</h3>`);
// document.writeln(`<h3>Out:  </h3><h3>${arr.pop() }</h3>`);
// document.writeln(`<h3>Out:  </h3><h3>${arr.pop() }</h3>`);


/// 15.Store phone brands in array and display dropdown menu.

// var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.writeln("<select>");
// for (var i = 0; i < phones.length; i++) {
//    document.writeln(`<option> ${phones[i] } </option>`);

    
// }
// document.writeln("</select>");