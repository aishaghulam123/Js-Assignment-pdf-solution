/// 1.Take first and last name, combine as fullName, greet user.

///////////////     Answer       /////////////////////

// var fName = prompt("Enter your First Name");
// var lName = prompt("Enter your Last Name");
// var fullName = fName +" "+ lName;
// alert("Hello " + fullName);


/// 2. Take favorite mobile model input and display its length.

///////////////     Answer       /////////////////////

// var mobile = prompt("Enter your Favourite Mobile name");
// var length = mobile.length;

//   document.writeln(`My Favourite Mobile is ${mobile} <br><br> Length of String is ${length} `); 


/// 3. Find and display index of letter “n” in “Pakistani”. 
///////////////     Answer       /////////////////////

// var str= "Pakistani";
// var indexOfN = str.indexOf("n");
// document.writeln(`String : <b> ${str}  </b><br><br> Index of n : <b> ${indexOfN}  </b> `); 

/// 4. Find and display last index of “l” in “Hello World”.

///////////////     Answer       /////////////////////

// var str= "Hello World";
// var indexOfL = str.lastIndexOf("l");
// document.writeln(`String : <b> ${str}  </b><br><br>Last Index of l : <b> ${indexOfL}  </b> `); 


/// 5.Find and display character at 3rd index in “Pakistani”.

///////////////     Answer       /////////////////////

// var str= "Pakistani";
// var index3 = str[3];
// document.writeln(`String : <b> ${str}  </b><br><br> Characterat index 3 is  : <b> ${index3}  </b> `);



/// 6.Repeat Q1 using string concat() method.

///////////////     Answer       /////////////////////

// var fName = prompt("Enter your First Name");
// var lName = prompt("Enter your Last Name");
// var fullName = fName .concat(" ", lName);
// alert("Hello " + fullName);




/// 7. replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result

///////////////     Answer       /////////////////////

// var city = "hyderabad";
// var replace = city.replace("hyder","Islam");
// document.writeln(`City : <b> ${city}  </b><br><br> After Replacement  : <b> ${replace}  </b> `);





/// 8. Replace all "and" occurrences in a string with "&" and display it.

///////////////     Answer       /////////////////////

// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// for (let i = 0; i < message.length; i++) {
//    if (message.slice(i,i+3) === "and") {
//     message= message.slice(0,i) + "&" + message.slice(i+3) 
//    }
    
// } 

// document.writeln(message);


/// 9. converts a string “472” to a number 472. Display the values & types 

///////////////     Answer       /////////////////////

// var str = "472";
// var num = parseInt(str);


//    document.writeln(` Value : ${str} <br><br>`); 
//    document.writeln(` Type :${typeof str } <br><br>`);
//    document.writeln(` Value :${num} <br><br>`); 
    
//    document.writeln(` Type :${typeof num }<br><br>`); 


/// 10. Convert user input in capital letters.

///////////////     Answer       /////////////////////


// var user = prompt("Enter any word");

//  document.writeln(` User input :${user } <br><br>`);
//    document.writeln(` Upper case :${user.toUpperCase()} <br><br>`); 


/// 11 .Convert user input in Title case.

///////////////     Answer       /////////////////////

// var user = prompt("Enter any word");

//  document.writeln(` User input :${user } <br><br>`);
// document.writeln(` Title case :${user.slice(0,1).toUpperCase() }${user.slice(1).toLowerCase() } <br><br>`); 



/// 12 .variable num to string. Remove the dot to 

///////////////     Answer       /////////////////////

// var num = 35.36
// var str =  num.toString().replace(".","") ;
//  document.writeln(` Number :${num } <br><br>`);
//  document.writeln(` String :${str }`);




/// 13 .

///////////////     Answer       /////////////////////

var username = prompt("Enter your username:");
var isValid = true;

for (var i = 0; i < username.length; i++) {
    var code = username.charCodeAt(i);

    if (code === 33 || code === 44 || code === 46 || code === 64) {
        isValid = false;
        break;
    }
}

if (isValid) {
    alert("Valid username: " + username);
} else {
    alert("Please enter a valid username (no @ . , ! allowed)");
}



/// 14 .Search user input in array and show if the item is found or not.

///////////////     Answer       /////////////////////

//  var items =  ["cake", "apple pie","cookie","chips", "patties"]; 
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



/// 15 .

///////////////     Answer       /////////////////////


var password = prompt("Enter your password:");

var hasAlphabet = false;
var hasNumber = false;
var isValid = true;

// condition c: minimum length
if (password.length < 6) {
    isValid = false;
}

// condition b: should not start with number
var firstCode = password.charCodeAt(0);
if (firstCode >= 48 && firstCode <= 57) {
    isValid = false;
}

// check alphabets and numbers
for (var i = 0; i < password.length; i++) {
    var code = password.charCodeAt(i);

    // A-Z or a-z
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        hasAlphabet = true;
    }

    // 0-9
    if (code >= 48 && code <= 57) {
        hasNumber = true;
    }
}

if (!hasAlphabet || !hasNumber) {
    isValid = false;
}

if (isValid) {
    alert("Valid Password");
} else {
    alert("Please enter a valid password");
}


/// 16 . string to an array using string split method

///////////////     Answer       /////////////////////

// var university = "University of Karachi"; 
// var split = university.split('');

// for (let i = 0; i < split.length; i++) {
//    document.writeln(split[i] +" <br>")
    
// }


/// 17 . last character of a user input.

///////////////     Answer       /////////////////////

// var input = prompt("Enter a word");

// var lastChar = input.slice(-1);
// document.writeln(lastChar)

//  document.writeln(` User Input :${input } <br><br>`);
//  document.writeln(` Last Character :${lastChar }`);


/// 18 .count number of occurrences of word “the” in given string

///////////////     Answer       /////////////////////

// var str = "the quick brown fox jumps over the lazy dog";
// var occurance =[]
// for (let i = 0; i <str.length ; i++) {
//  if (str.slice(i,i+3) == "the") {
//    occurance++;
   
//  }
   
// } 

//  document.writeln(` TEXT :${str} <br><br>`);
//  document.writeln(` There are  ${occurance } occursnce(s) of word "the`);

