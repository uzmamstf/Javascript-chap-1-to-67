// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.//////////

// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// var fullName = firstNmae+ seconfName;
// document.write("Hello "+fullName +"!");

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var favMobModel = prompt("Enter your favorite Mobile Model Name");
// //var favMobModelLength =  favMobModel.length;
// document.write("My Favorite Model Of Mobile is: "+ favMobModel  +"!");
// document.write("Length of Input string is: "+favMobModel.length  +"!");

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var nationality = "Pakistani";
// var extractt = nationality.indexOf("n");
// document.write(" string is: "+  nationality +"!");
// document.write("index of 'n' is: "+ extractt);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser

// var greet = "Hello World";
// var findLastIndex = greet.lastIndexOf("l");
// document.write("String: "+ greet );
// document.write("Last Index of L: "+ findLastIndex );

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


// var a = "Pakistani";
// var findChatAt3rd = a.charAt(3);
// document.write("String: "+ a);
// document.write("Character at index 3: "+ findChatAt3rd );

// 6. Repeat Q1 using string concat() method.//////

// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// var fullName = concat(firstName,lastName);
// document.write("Hello "+fullName +"!");


// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam")
// document.write("City: "+ city );
// document.write("After replacement "+ newCity  );


// 8.Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.//////////


// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
// var replaced = message.replace("and" , "&");

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var stringValue = "427";
// newValue = parseInt(stringValue);
// document.write("Type " + typeof stringValue );
// document.write("Type " + typeof newValue);


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var userInput= prompt("Enter something here...");
// userInput.toUpperCase();
// document.write("User Input"+userInput);
// document.write("Upper Case"+ userInput.toUpperCase());


// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var inputCase = prompt("type something for title case");
// //inputCase = inputCase.toLowerCase();
// inputCase.charAt(0).toUpperCase(); 
// inputCase.substring(1).toLowerCase() ;
// document.write(inputCase);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var roundNum = Math.round(num);

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:


// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var items = prompt("what do you want to oredr sir/ma'am?");
// var bakeryItems = arr.indexOf(items);
// var bakeryItems = bakeryItems.toLowerCase();
// if (arr.indexOf(items) != -1) {
//     alert(items + " is availabe at index " + bakeryItems + " in our bakery");
// }
// else {
//     alert(items + " is not availabe in our bakery");
// }
//15.


// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser

// var university = "University of Karachi";
// var stringSplit = university.split('\n ');
// document.write(stringSplit);

// 17. Write a program to display the last character of a user
// input.
// var name = prompt("write something for getting last character");
// // charLast == charLast.charAt(charLast.length - 1);
// var lastChar = name.charAt(name.length - 1);
// document.write(lastChar);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
// var alphaString = "The quick brown fox jumps over the lazy dog";
// newString = alphaString.;
// document.write(newString);


// var str ="The quick brown fox jumps over the lazy dog" ;
//  var numChars = str.toLowerCase();
//  var count = numChars.match(/the/g).length;
// document.write( str +"<br>");
// document.write("it has "+ count + " occuarance in sentence");


// MATH METHODS CHP 26 TO 30

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var postiveInteger = prompt("write any positve integer");
// document.writeln("number: " + postiveInteger+ "<br>");
// postiveInteger = Math.round(postiveInteger);
// document.writeln("round off value: " + postiveInteger+ "<br>");
// postiveInteger = Math.floor(postiveInteger);
// document.writeln("floor value: " + postiveInteger+ "<br>");
// postiveInteger = Math.ceil(postiveInteger);
// document.writeln("ceil value: " + postiveInteger+ "<br>");


// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var negativeInteger = prompt("write any negative integer");
// document.writeln("number: " + negativeInteger+ "<br>");
// negativeInteger = Math.round(negativeInteger);
// document.writeln("round off value: " + negativeInteger+ "<br>");
// negativeInteger = Math.floor(negativeInteger);
// document.writeln("floor value: " + negativeInteger+ "<br>");
// negativeInteger = Math.ceil(negativeInteger);
// document.writeln("ceil value: " + negativeInteger+ "<br>");

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var number = prompt("Enter any number to find its absolute value :",);
// var absNum = Math.abs(number);
// document.write("The absolute value of " + number + " is " + absNum);

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var randomNumber = Math.random();
// var improvedNum = (randomNumber * 6) + 1;
// var diceRandom = Math.floor(improvedNum);
// document.writeln("random dice value:" + diceRandom);

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var randomNumber = Math.random();
// var improvedNum = (randomNumber * 6) + 1;
// var coinValue = Math.floor(improvedNum);
// if (coinValue <= 2) {
//     document.write(coinValue+ "<br/>");
//     document.write( "random coin value: Heads ");
// }
// else if (coinValue > 2) {
//     document.write(coinValue + "<br/>");
//     document.write("random coin value: Tails ");
// }

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

//  var guessNumber = parseInt(Math.random() * 100);
//  document.write("Random number between 1 and 100: "+guessNumber);

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var Weightinput = prompt("Enter your weight in kilograms ",);
// var userWeight = parseFloat(Weightinput);
// document.write("The weight of user is " + userWeight + " kilograms");

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user

// var enterSecretNumber = prompt("Input a number between 1 to 10")
// var SecretRandomNumber = parseInt(Math.random()* 100);

// if(enterSecretNumber == ""){
//     document.writeln("enter a number between 1 to 10")
// }
// else if(enterSecretNumber < SecretRandomNumber){
//     document.writeln(":(");

// }else if(enterSecretNumber > SecretRandomNumber)
// {
//     document.writeln("Hurrayyy!!  :)");

//}
//              DATE MATHODS CHP 31 TO 34

//   1. Write a program that displays current date and time in
// your browser.

// var Date = new Date();  
// document.writeln("Current Date & Time is : "+ Date); 

// 2. Write a program that alerts the current month in words.
// For example December.

// var dayNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
// var now = new Date();
// var theDay = now.getMonth();
//  var nameOfToday = dayNames[theDay];
//  document.writeln("Current Month: " + nameOfToday); 

//  3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var daysName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// var now = new Date();
// var theDay = now.getDay();
// var day = daysName[theDay];
// if (day.length > 3) {
//   var daysName = day.slice(0, 3);
//   alert("Today is: " + daysName);
// }

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var daysName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// var now = new Date();
// var theDay = now.getDay();
// var day = daysName[theDay];
// if (day == "Saturday" || day == "Sunday") {

//   alert("Its Fun day");
// }
// else {
//   alert("Today is: " + day);
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


// var now = new Date();
//  var theDay = now.getDay();
//  if(theDay <= 15){
//    document.writeln("First fifteen days of the month");
//  }
//  else{
//   document.writeln("Last fifteen days of the month");

//  }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.                                              INCOMPLETE

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var now = new Date();
//  var theHours = now.getHours();
//document.writeln(theHours);
//  if(theHours <= 11)
//  {
//    alert("Its AM")
//  }
//  else{
//   alert("Its PM")
//  }


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var laterDate = new Date("31 December, 2020");
// document.writeln(laterDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var today = new Date();
// var doomsday = new Date("June 18, 2015");
// var msToday = today.getTime();
// var msDoomsday = doomsday.getTime();
// var msDiff = msToday - msDoomsday;
// var dDiff = msDiff / (1000 * 60 * 60 * 24);
// dDiff = Math.floor(dDiff);
// alert(dDiff + " days have passed since 1st Ramadan, 2020");

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.                                       INCOMPLETE


// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

//  var aHourAgo = new Date();
//   aHourAgo.setHours(aHourAgo.getHours()-1);
//  document.writeln("Current Time: "+ new Date() + "<br>");
//   document.writeln("1 hour back time: "+aHourAgo);

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var back100years = new Date();
// back100years.setFullYear(back100years.getFullYear() - 100);
// document.writeln("Current Date: " + new Date() + "<br>");
// document.writeln("100 years back it was, "back100years);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var age = prompt("Enter your age");
// var birthYear = new Date();
// birthYear.setFullYear(birthYear.getFullYear() - age);
// document.writeln("Your age is " + age);
// document.writeln("Your birth year is " + birthYear.getFullYear());

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


// var customerName = prompt("Enter Customer Name");
// var currentMonth = prompt("Enter current month");
// var numberOfUnits = prompt("Enter Number of units");
// var surCharges = prompt("Enter sur charges");
// var ChragesPerUnit = 16;
// var netAmountWithinDueDate= numberOfUnits * ChragesPerUnit;
// netAmountWithinDueDate.toFixed(2);
// var grossAmountPayableAfterDueDate= netAmountWithinDueDate + surCharges;
// grossAmountPayableAfterDueDate.toFixed(2);
// document.writeln("<h2>K-Elecric bill</h2>");
// document.writeln("Customer Name"+ customerName+ "<br>");
// document.writeln("Month"+ currentMonth+ "<br>");
// document.writeln("Number of units"+ numberOfUnits+ "<br>");
// document.writeln("Charges per unit"+ ChragesPerUnit+ "<br>");
// document.writeln("Net Amount Payable (within Due Date)"+ netAmountWithinDueDate+ "<br>");
// document.writeln("Late Payment Surcharge"+surCharges + "<br>");
// document.writeln("Gross Amount Payable (after Due Date)"+ grossAmountPayableAfterDueDate+ "<br>");

//                          FUNCTION CHP 35 TO 38


// 1. Write a function that displays current date & time in your
// browser.


// function date_Time() {
//   var now = new Date();
//   document.writeln(now)
// }
// date_Time();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name
// function greetings(firstName, lastName) {
//   firstName = prompt("Enter your first name");
//   lastName = prompt("Enter your last name");
//   var fullName = firstName + " " + lastName;
//   document.write("Hello! " + fullName);


// }

// greetings();

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function add(num1, num2) {
//   num1 = prompt("Enter any numbers for addition");
//   num2 = prompt("ter any another numbers for addition");
//   var addittion = parseInt(num1) + parseInt(num2);
//   document.write("addition of "+num1 +" and "+ num2 +" is: " +addittion);
// }
// add();

//4 . Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.                 INCOMPLETTE

// function add(num1, num2, operator) {
//   num1 = prompt("Enter any numbers for addition");
//   num2 = prompt("enter any another numbers for addition");
//   var addittion = parseInt(num1) + operator + parseInt(num2);
//   document.write("result of "+num1 +" and "+ num2 +" is: " +addittion);
// }
// add();

// 5. Write a function that squares its argument.
// function sqrNo(Square) {
//   var Square = prompt("Enter a number for its square");
//   // var no = Math.sqrt(Square);
//   var no = Square * Square;
//   alert
//   document.writeln("Sqaure of a " + Square + " is " + no)
// }
// sqrNo();


// 6. Write a function that computes factorial of a number.

// function findFactorial() {
//   var fact = prompt("Enter any number to find its factorial");
//   factNo = 1;
//   for (var i = 1; i <= fact; i++) {
//     factNo *= i;
//   }
//   document.writeln("Factorial of " + fact + " is " + factNo);
// }
// findFactorial();

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// function counting(startCountingInput,endCountingInput){
// var startCountingInput= prompt("Input a number to start a count"); 
// var endCountingInput= prompt("Input a number to start a count"); 
// for (var i= startCountingInput; i<=endCountingInput; i++){
//   document.writeln(i + "<br>");
// }
// }
// counting();

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// function calculateHypotenuse(base, perpendicular) {
//   var base = prompt("Enter a  base number of right angle triangle:")
//   var perpendicular = prompt("Enter a perpendicular number of a right angle triangle");

//   function calculateSquare() {
//     var hypotenuse = (base * base) + (perpendicular * perpendicular);
//     hypotenuse *= hypotenuse;
//     document.writeln("Base of aright angle triangle: " + base + "<br/>");
//     document.writeln("Perpendicular of aright angle triangle: " + perpendicular + "<br/>");
//     document.writeln("Hypotenuse of aright angle triangle: " + hypotenuse);
//   }
//   calculateSquare();
// }
// calculateHypotenuse();


// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


// function calculateRectangleArea(width, height) {
//   var height = prompt("Enter a height to calculate area of rectangle")
//   var width = prompt("Enter a width to calculate area of rectangle")
//   var A = width * height;
//   document.writeln("Area of a rectangle is : " + A);
// }
// calculateRectangleArea();


// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam                                                                 
// function palindrome(string){
//   var string = prompt("Enter string to check palindrome")
// var reversedText = string.toLowerCase().split('').reverse().join(''); 
// if(string === reversedText){
//   document.write("It is palindrome")
// }
// else{
//   document.write("It is not palindrome")

// }
// }
// palindrome();

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'             INCOMPLETE


// function upperCase(str){
//   var str = prompt("Enter a message to convert its first letter in Upper Case");
//  var string = str.split(' ');
//  string.charAt(0).toUpperCase() + string.slice(1)
//  document.writeln(str);
//  document.writeln(string);
// }
// upperCase();



//      extra
//  return string.map((word) =>{
//    return word[0].toUpperCase() + word.slice(1).toLowerCase();
//  }).join('');

//another try
// var str,txt;
// function capitalise_word(str) {
//    str = prompt("Enter a message to convert its first letter in Upper Case");
//   return str.replace(/\\S*/g, function (txt) {
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });

// }
// document.writeln(str);
// document.writeln(txt);
// capitalise_word();

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


// function longestWord(string) {

//     var string = prompt("Input any string here...")


//     var outputLOnest = string.split(" ");
//     var longestString = outputLOnest[0];
//     var check;
//     document.writeln("Input string: " + string + "<br>");
//     for (var i = 1; i < outputLOnest.length; i++) {
//         if (longestString.length < outputLOnest[i].length) {
//             longestString = outputLOnest[i];
//             check = true;
//         }
//         else {
//             longestString = longestString;
//         }
//     }
//     if (check === true) {
//         document.write("Longest word in a string: " + longestString);
//     }
// }
// longestWord();

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'                                               INCOMPLETE

// function countLetter(string,letter) {

//     var string = prompt("Input any string wth letter here...");
//     var letter = [1,2,3,4,5,6,7,8,9];
//     res = string.split("");
 
//    count=0;
//    for (var i=0 ; i<res.length; i++){
//      if(res[i]===letter){
//          count+=1
//      }
//  }
//  document.write("String: "+string);

 
//  document.write("<br/> There are "+count+" occurances of the letter ' "+letter+" ' in the word "+string);

//  }
//  countLetter();

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// function calcCircumference(){
//     var radius = prompt("Enter radius of a circle:" +"<br/>");
//    var  circumference=2*3.142*radius;
//     document.write("The circumference of cirlce is: "+circumference);
   
//     function calculateArea() {
     
//       var Area=3.142*(radius*radius);
//       document.write(" Area of a circle: "+Area); 
//   }
//   calculateArea();
  
// }
// calcCircumference();
