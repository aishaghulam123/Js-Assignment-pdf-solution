/// 1. calculate the value of a raised to b

///////////////     Answer       /////////////////////

// function power(a,b) {
//     if (b === 0) {
//         return 1;
//     }
//     var result = 1;
//     var absolute = Math.abs(b)
//     for (let i = 0; i < absolute; i++) {
//       result*= a;
        
//     }
//     if (b < 0) {
//         return 1;
//     } 
//     else {
//        return result 
//     }
// }
//     console.log(`2^3 = ${power(2, 3)}`);   // Output: 2^3 = 8
// console.log(`5^0 = ${power(5, 0)}`);   // Output: 5^0 = 1
// console.log(`4^2 = ${power(4, 2)}`);   // Output: 4^2 = 16
// console.log(`2^-2 = ${power(2, -2)}`); // Output: 2^-2 = 0.25  



/// 2.check leap year

///////////////     Answer       /////////////////////

// var year = +prompt("Enter year")
// function isLeapYear(year) {
//   if (year % 400 === 0) {
//     return "Yes, Its a leap year";
//   }
//   if (year % 100 === 0) {
//     return "No, its not a leap year";
//   }
//   if (year % 4 === 0) {
//     return "Yes, Its a leap year";
//   }
//   return "No,its not a leap year";
// }
// console.log(`${year} is a leap year? ${isLeapYear(year)}`); 


/// 3.  area of triangle

///////////////     Answer       /////////////////////

// function calculateS(a,b,c) {
   
//     return ( a + b + c ) / 2;
// }
// function areaOfTriangle(a,b,c) {
// var s = calculateS(a,b,c)
//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }
// console.log(areaOfTriangle(3,4,5));


/// 4. Create a main function that calls two separate functions to calculate and display the average and percentage of marks from three subjects.

///////////////     Answer       /////////////////////

// function calculateAvg(s1,s2,s3) {
//     return (s1+s2+s3)/3;
// }
// function calculatePer(s1,s2,s3) {
//     var total= s1+s2+s3;
//    return (total / 300) * 100;
// }

// function mainFunction(s1, s2, s3) {
//     var avg = calculateAvg(s1, s2, s3);
//     var per = calculatePer(s1, s2, s3);
   
//     console.log("Average Marks: " + avg);
//     console.log("Percentage: " + per + "%");
// }

// mainFunction(70, 65, 80);

/// 5.ustom indexOf function

///////////////     Answer       /////////////////////

// function myIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//        if (str[i] === char) {
//         return i;
//        }
        
//     }
//     return -1;
// }
// var word = "Modern Web and app development"
// console.log(myIndexOf(word,"d"));
// console.log(myIndexOf(word,"z"));
// console.log(myIndexOf(word,"a"));



/// 6.Write a function to remove all vowels from a sentence (max 25 characters).

///////////////     Answer       /////////////////////
// function removeVowel() {
//     var str = "Hello world".toLowerCase();
//     var newStr ="" ;
//     for (var i = 0; i < str.length; i++) {
//         if (!(str[i] === "a" ||
//             str[i] === "e" ||
//             str[i] === "i" ||
//             str[i] === "o" ||
//             str[i] === "u" )
//         ) {
//              newStr+=str[i]
//         }
       
        
//     }
//     console.log(str);
//     console.log(newStr);
    
    
// }
// removeVowel();



/// 7.Write a function using a switch statement to count how many times two vowels appear together in a sentence

///////////////     Answer       /////////////////////

// function count2vowel() {
    
//     var str = "Pleases read this application and give me gratuity".toLowerCase();
//     var count = 0;

//     for (var i = 0; i < str.length - 1; i++) {
//         var vowel1 = str[i];
//         var vowel2 = str[i + 1];

//         switch (vowel1) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
               
//                 if (vowel2 === 'a' || vowel2 === 'e' || vowel2 === 'i' || vowel2 === 'o' || vowel2 === 'u') {
//                     count++;
//                     console.log("Occurrence found: " + vowel1 + vowel2);
//                 }
//                 break;
//             default:
//                 break;
//         }
//     }
//     return count;
// }

// console.log("Total Count: " + count2vowel());




/// 8.Write four functions to convert distance from Kilometers (km) into Meters, Feet, Inches, and Centimeters.

///////////////     Answer       /////////////////////

// 1. KM to Meters
// function convertToMeters(km) {
//     var meters = km * 1000;
//     console.log(km + " km = " + meters + " Meters");
// }

// // 2. KM to Feet
// function convertToFeet(km) {
//     var feet = km * 3280.84;
//     console.log(km + " km = " + feet + " Feet");
// }

// // 3. KM to Inches
// function convertToInches(km) {
//     var inches = km * 39370.1;
//     console.log(km + " km = " + inches + " Inches");
// }

// // 4. KM to Centimeters
// function convertToCentimeters(km) {
//     var cm = km * 100000;
//     console.log(km + " km = " + cm + " Centimeters");
// }




// convertToMeters(5);
// convertToFeet(5);
// convertToInches(5);
// convertToCentimeters(5);


/// 9. Calculate an employee's overtime pay at a rate of Rs. 12 per hour for every full hour worked beyond the 40-hour limit.

///////////////     Answer       /////////////////////

// function calculateOver(hour) {
//     var overPay = 0;
//     if (hour> 40) {
//         var extraHour = hour - 40;
//         overPay =extraHour * 12;
//     } return overPay;
// }
// console.log("Overtime Pay: Rs. " + calculateOver(50));




/// 10. Calculate the number of 100, 50, and 10 rupee notes needed to provide a specific withdrawal amount.

///////////////     Answer       /////////////////////


// var amount = prompt("Enter amount to Withdraw"); 


// var notes100 = Math.floor(amount / 100);
// var After100 = amount % 100;


// var notes50 = Math.floor(After100 / 50);
// var After50 = After100 % 50;


// var notes10 = Math.floor(After50 / 10);


// console.log("You will have "+ notes100 +" hundred  notes " + notes50+ " fifty notes "+notes10+" ten notes");
