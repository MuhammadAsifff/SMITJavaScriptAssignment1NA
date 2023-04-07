

// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.



// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");

// if (num1 > num2) {
//   console.log(num1 + " is larger");
// } else if (num2 > num1) {
//   console.log(num2 + " is larger");
// } 










// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.



// let num = prompt("Enter a number:");
// let sign;

// if (num > 0) {
//   sign = "+";
// } else if (num < 0) {
//   sign = "-";
// } 

// alert(`The sign is ${sign}`);










// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.



// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// let num3 = prompt("Enter the third number:");
// let num4 = prompt("Enter the fourth number:");
// let num5 = prompt("Enter the fifth number:");

// let largest = num1;

// if (num2 > largest) {
//   largest = num2;
// }

// if (num3 > largest) {
//   largest = num3;
// }

// if (num4 > largest) {
//   largest = num4;
// }

// if (num5 > largest) {
//   largest = num5;
// }

// console.log(`The largest number is ${largest}`);










// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"



// for (var x=0; x<=15; x++) {
//     if (x === 0) {
//             console.log(x +  " is even");
//     }
//     else if (x % 2 === 0) {
//             console.log(x + " is even");   
//     }
//     else {
//             console.log(x + " is odd");
//     }
// }










// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// The grades are computed as follows :
// Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A

  

// var students = [['Asif', 80], ['Aamir', 77], ['Arif', 88], ['Arif', 95], ['Rashid', 68]];

// var Avgmarks = 0;

// for (var i=0; i < students.length; i++) {
//         Avgmarks += students[i][1];
//         var avg = (Avgmarks/students.length);
// }

// console.log("Average grade: " + (Avgmarks)/students.length);

//         if (avg < 60){
//           console.log("Grade : F");      
//           } 
//         else if (avg < 70) {
//                 console.log("Grade : D"); 
//                   } 
//         else if (avg < 80) 
//              {
//                 console.log("Grade : C"); 
//         } else if (avg < 90) {
//                 console.log("Grade : B"); 
//         } else if (avg < 100) {
//                 console.log("Grade : A"); 
// }











// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".



// for ( var i = 1; i <= 100; i++ )
// {
//   if ( i%3 === 0 && i%5 === 0 )
//   {
//     console.log( i + " FizzBuzz" );
//   }
//   else if ( i%3 === 0 ) 
//   {
//     console.log(i+ " Fizz" );
//   }
//   else if ( i%5 === 0 ) 
//   {
//     console.log(i+ " Buzz" );
//   }
//   else
//   {
//     console.log(i);
//   }
// }











// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.



// var x,y,chr;
// for(x=1; x <=6; x++)
// {
//    for (y=1; y < x; y++)
//      {
//     chr=chr+("*");        
//       }
//  console.log(chr);
//  chr='';    
// }
