//            chapter 1 Alerts

// 1. Write a script to greet your website visitor using JS alert box. 
//alert(" Welcome to our Website");

//2. Write a script to display following message on your web page: Error!please enter a valid password
//alert('Error! please enter a valid password');

// 3. Write a script to display following message on your web page: (Hint : Use line break) 
//alert('Welcome to JS land \nHappy Coding'); // br tag is not working for line break

//4. Write a script to display following messages in sequence: 
//alert('Welcome to JS land '); alert('Happy Coding');

//5. Generate the following message through browser’s developer console:
//console.log(alert('Hello...! i can run JS thorugh my web browser console'));
//                        CHAPT 1 END 

//       chapter 2 VARIABLES FOR STRINGS



// 1.Declare a variable called username.
// var username;

//2. Declare a variable called myName & assign to it a string that represents your Full Name. 
//var myName = "Uzma Mustafa" // PS: by mistake in form Uzma Uzma :D

//3. Write script to 
//a) Declare a JS variable, titled message.
//b) Assign “Hello World” to variable message 
// c) Display the message in alert box.

//var message = "Hello World";
//alert(message);

//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes. 
//var firstName = "Uzma";
//var lastName = "Mustafa";
//var contact = 033312777771;
//var age = 19;
//alert(firstName + "\n" + lastName + "\n" + contact + "\n" + age);

//5. Write a script to display the following alert using one JS variable:
// PIZZA
// PIZZ
// PIZ
// PI
// P
//alert("PIZZA" + "\n"+ "PIZZ"+ "\n"+"PIZ"+ "\n"+ "PI"+ "\n"+ "P" )


//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
//  var email;
//  email="uzmamstf@gmail.com";
//  alert ("My email address is " + email);

//7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”.
//var book;
//  book ="A SMARTER WAY TO LEARN JAVASCRIPT";
//  alert ("I am trying to learn javascript from book" + book);

//8. Write a script to display this"Yah i can write HTML content through JS" in browser through JS.
//document.write( "Yah i can write HTML content through JS");


//9. Store following string in a variable and show in alert and browser through JS 
//“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
// var design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
// alert(design);
// document.write(design);

//               CHAPT 2 END 
//          CHAPTER # 3 VARIABLES FOR NUMBERS 

//1. Declare a variable called age & assign to it your age. Show your age in an alert box
//var age =23;
//alert(age);

//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”. 
//var N =10;
//document.write("You have visited this site " + N + " times"); 

//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 
//  var birthYear = 1996;
//  document.write("My birth year is " + birthYear + "<br>" + " Data type of my declared variable is Number")

//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 
// var vistorName = "John Doe";
// var productsTitle = "T-shirt";
// var productQuantity = 5;
// document.write( vistorName +" "+ "ordered" +" "+ productQuantity + " " + productsTitle + " on XYZ Clothing store." );

//                       chap 3 -- END --

//            CHAP # 4 VARIABLE NAMES: LEGAL & ILLEGAL 

//1. Declare 3 variables in one statement. 
// var userName,userContact,userData;

//2. Declare 5 legal & 5 illegal variable names. 
// Legal Variables
//var userAge, _apple , Example$ , my1Key, legalVar;
// Illegal Variables
//var USERNAME, 1apple , ex@mples , my Key, alert;

//3. Display this in your browser a)  A heading stating “Rules for naming JS variables” b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable c) Variables must begin with a ______, ______ or _____. For example $name, _name or name d) Variable names are case _________ e) Variable names should not be JS _________.   
//document.write("<h1>Rules for naming JS variables</h1>")
//document.write("Variable names can only contain letters, underscore, numbers and $: For example $my_1stVariable" + "<br>"+ "Variables must begin with a letter, $ or underscore. For example: $name, _name or name" + "<br>"+ "Variable names are case sensitive" +"<br>"+ "Variable names should not be JS keyword" );


//                         chap 4 -- END --


//                        chap 5 MATH EXPRESSIONS  

//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser. 
// var num1 = 23;
// var num2 = 25;
// var add = num1 + num2;
// document.write("sum of " + num1 +" and "+ num2 +" is "+add);

//2. Repeat task1 for subtraction, multiplication, division & modulus. 
//subtraction
// var num1 = 23;
// var num2 = 25;
// var sub = num1 - num2;
// document.write("sub of " + num1 +" and "+ num2 +" is "+sub);


// var num1 = 23;
// var num2 = 25;
// var multiply = num1 * num2;
// document.write("multiplication of " + num1 +" and "+ num2 +" is "+multiply);

// division
// var num1 = 23;
// var num2 = 25;
// var division = num1 / num2;
// document.write("division of " + num1 +" and "+ num2 +" is "+division);

// modulus
// var num1 = 9;
// var num2 = 3;
// var modulus = num1 % num2;
// document.write("modulus of " + num1 +" and "+ num2 +" is "+modulus);

//3. Do the following using JS Mathematic Expressions 
//a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number. 
//d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable. 
//f. Show the value of variable in your browser like “Value after increment is: 6”. 
//g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable. 
//j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3. 
// l. Output : “The remainder is : 0”. 

//  var varDeclareTest;
//  document.write("Value after declaration is "+ varDeclareTest);
//  varDeclareTest = 10;
//  document.write( "<br>"+"Initial Value : "+ varDeclareTest);
//  varDeclareTest++;
//  document.write( "<br>"+" Value after increment is: "+ varDeclareTest);
//  varDeclareTest+=7;
//  document.write( "<br>"+" Value after addition of 7 is: "+ varDeclareTest);
//  varDeclareTest--;
//  document.write( "<br>"+" Value after decrement is: "+ varDeclareTest);
//  remainderVar = varDeclareTest % 3;
//  document.write( "<br>"+"Output: The remainder is: "+ remainderVar);

//4. Cost of one movie ticket is 600 PKR. 
//Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie
//  var movieTicketCost = 600;
//  var ticketCostOf5Movies = movieTicketCost * 5;
//  document.write("Total cost to buy 5 tickets to a movie is"+ticketCostOf5Movies+"PKR");

//5. Write a script to display multiplication table of any number in your browser.
// document.write("Table of 5"+"<br>");
// document.write(5 +"x"+ 1+"="+5*1+"<br>");
// document.write(5 +"x"+ 2+"="+5*2+"<br>");
// document.write(5 +"x"+ 3+"="+5*3+"<br>");
// document.write(5 +"x"+ 4+"="+5*4+"<br>");
// document.write(5 +"x"+ 5+"="+5*5+"<br>");
// document.write(5 +"x"+ 6+"="+5*6+"<br>");
// document.write(5 +"x"+ 7+"="+5*7+"<br>");
// document.write(5 +"x"+ 8+"="+5*8+"<br>");
// document.write(5 +"x"+ 9+"="+5*9+"<br>");
// document.write(5 +"x"+ 10+"="+5*10);

//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
//a.  Store a Celsius temperature into a variable. 
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”. 
//  var celsiusTemperature = 28;
//  var celsiusConvertIntoFehrenheit = (celsiusTemperature-32)* 5/9;
//  document.write(celsiusTemperature+"oC is "+celsiusConvertIntoFehrenheit+"oF" +"<br>");

//  var FehrenheitTemperature = 28;
//  var FehrenheitConvertIntoCelsius = (FehrenheitTemperature* 5/9)+32;
//  document.write(FehrenheitTemperature+"oF is "+FehrenheitConvertIntoCelsius+"oC");

//7.Write a program to implement checkout process of a shopping cart system for an e-commerce website.
// Store the following in variables 
//  a. Price of item 1 
//  b. Price of item 2
//   c. Ordered quantity of item 1 
//   d. Ordered Quantity of item 2 
//   e. Shipping charges 
// Compute the total cost & show the receipt in your browser. 
// var item1Price = 550;
// var item2Price = 899;
// var qunatityOrderedItem1= 5;
// var qunatityOrderedItem2= 2;
// var ShippingCharges = 200;
// var totaOfItem1 = item1Price * qunatityOrderedItem1;
// var totalOfItem2 = item2Price * qunatityOrderedItem2;
// var grandCart= totaOfItem1 + totalOfItem2  + ShippingCharges;
// document.write("Price of Item 1 is "+ item1Price+"<br>");
// document.write("Quantity of Item 1 is "+ qunatityOrderedItem1+"<br>");
// document.write("Price of Item 2 is "+ item2Price+"<br>");
// document.write("Quantity of Item 2 is "+ qunatityOrderedItem2+"<br>");
// document.write("Shipping Charges "+ShippingCharges+"<br>");
// document.write("Total cost of your order is "+grandCart);

//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browse
// var totalMarks = 750;
// var marksObtained = 500;
// var percentage = marksObtained / totalMarks * 100;
// document.write("Total Marks: "+ totalMarks+"<br>");
// document.write("Obtained Marks "+ marksObtained+"<br>");
// document.write("percentage: "+ percentage+"%");

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (
//Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 
// var dollarsUS = 10;
// var saudiRiyals = 25;
// var pakRupeesUSConversion = dollarsUS * 104.80;
// var pakRupeesRiyalConversion = saudiRiyals * 28;
// document.write("Total Currency in PKR "+ (pakRupeesUSConversion + pakRupeesRiyalConversion));


//10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a.Add 5
// b.Multiply by 10
// c.Divide the result by 2
// Perform all calculations in a single expression

// var number = 15;
// document.write((number + 5)*10 / 2);

//11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values
// Output them to the screen like so: “They are either NN or NN years old”. 

// var currentYear = 2020;
// var birthYear = 1996;
// var Century1st = 100 - 96;
// var century2nd = 100 -80;
// var age = Century1st + century2nd;
// document.write("They are " + age+ " years old");





//  12. The Geometrizer: Calculate properties of a circle. 
//  a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and 
// output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 

// var radius = 20;
// var pi = 3.142
// var circumference = 2* pi* radius;
// document.write("Radius of a circle is " +  radius + "<br>");
// document.write("The circumference is: "+ circumference + "<br>");
// var area = (pi * (radius*2));
// document.write("The area is: "+ area);


//13. The Lifetime Supply Calculator:
// Ever wonder how much a “lifetime supply” of your favorite snack is ? Wonder no more.
// a.Store your favorite snack into a variable
// b.Store your current age into a variable.
// c.Store a maximum age into a variable.
// d.Store an estimated amount per day(as a number).
// e.Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

// document.write("<h1>The Lifetime Supply Calculator </h1>")
// var snack = "toast";
// var myCurrentAge = 24;
// var myMaxAge = 60;
// var myLeftAge= myMaxAge - myCurrentAge;
// var perDayAmountOfSnacks = 3;
// var totalDaysInAYear = 365;
// var perDayTillLive = (myLeftAge * (perDayAmountOfSnacks * totalDaysInAYear));
// document.write("Favorite Snack: "+ snack+ "<br>")
// document.write("Current age: "+ myCurrentAge+ "<br>")
// document.write("Estimated max age: "+ myMaxAge+ "<br>")
// document.write("Age Left as per Calculation: "+ myLeftAge+ "<br>")
// document.write("Amount of snacks per day: "+ perDayAmountOfSnacks+ "<br>")
// document.write("You will need " + perDayTillLive +" "+ snack + " to last you until the ripe old age of " + myMaxAge); 


//                                      CHAPTER 5 END

//                             CHAPTER 6 TO 9 MATHS EXPRESSION

//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// document.write("Result:"+ "<br>");
// var num= 10;
// document.write("The value of num is: "+num+ "<br>");
// document.write("---------------------------------------"+ "<br>");
// ++num;
// document.write("Now The value of ++num is: "+num+ "<br>");
// num++;
// document.write("Now The value of num++ is: "+num+ "<br>");
// --num;
// document.write("Now The value of --num is: "+num+ "<br>");
// num--;
// document.write("Now The value of num-- is: "+num+ "<br>");


// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--; 

// var a = 2, b = 1;
// var result = (--a - --b) + (++b + b--);
// --a;
// document.write(a+ "<br>");
// --a - --b;
// document.write(a+ "<br>");
// (--a - --b) + ++b;
// document.write(a+ "<br>");
// (--a - --b) + (++b + b--); 
// document.write("a is: "+ a+ "<br>");
// document.write("b is: "+ b+ "<br>");
// document.write("result is: "+ result);                  


//3. Write a program that takes input a name from user & greet the user.
// var userName = prompt("Please enter your name", "");
// document.write("Hello " + userName + "!");

//4. IT IS NOT GIVEN IN PDF FILE 


//5. Write a program to take input a number from user & display it’s multiplication table on your browser. 
//If user does not enter a new number, multiplication table of 5 should be displayed by default. 
// var tableNum = prompt("Enter a Number to print a table", "");
// var num = 5;
// if (tableNum == " ") {
//   for (var i = 1; i <= 10; i++) {
//     document.write(tableNum + " x " + i + "= " + tableNum * i + "<br>");
//     // document.write(tableNum * i + "<br>");
//   }
// }
// else {
//   for (var j = 1; j <= 10; j++) {
//     document.write(num * j + "<br>");
//   }

// }
// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
// var subj1 = prompt("Enter a Subject 1", " ");
// var subj2 = prompt("Enter a Subject 2", " ");
// var subj3 = prompt("Enter a Subject 3", " ");
// var totalMarksForEachSubject = 100;
// var sumOFTotalMarks = totalMarksForEachSubject + totalMarksForEachSubject + totalMarksForEachSubject;
// var obtMarksSub1 = prompt("Enter Obtained Marks for Subject 1", " ");
// var obtMarksSub2 = prompt("Enter Obtained Marks for Subject 2", " ");
// var obtMarksSub3 = prompt("Enter Obtained Marks for Subject 3", " ");
// var sumOfAllSubjectsMarks = parseInt(obtMarksSub1) + parseInt(obtMarksSub2) + parseInt(obtMarksSub3);
// var percentFormulae1 = (obtMarksSub1 / totalMarksForEachSubject) * 100
// var percentFormulae2 = (obtMarksSub2 / totalMarksForEachSubject) * 100
// var percentFormulae3 = (obtMarksSub3 / totalMarksForEachSubject) * 100
// var finalPercentage = (sumOFTotalMarks / sumOFTotalMarks) * 100;
// document.write(sumOfAllSubjectsMarks);
// document.write("<table>")
// document.write("<tr>")
// document.write("<th>Subject</th>")
// document.write("<th>Total Marks</th>")
// document.write("<th>Obt Marks</th>")
// document.write("<th>Percentage</th>")
// document.write("</t>")

// document.write("<tr>")
// document.write("<td>" + subj1 + "</td>")
// document.write("<td>" + totalMarksForEachSubject + "</td>")
// document.write("<td>" + obtMarksSub1 + "</td>")
// document.write("<td>" + percentFormulae1 + "%" + "</td>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td>" + subj1 + "</td>")
// document.write("<td>" + totalMarksForEachSubject + "</td>")
// document.write("<td>" + obtMarksSub2 + "</td>")
// document.write("<td>" + percentFormulae2 + "%" + "</td>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td>" + subj3 + "</td>")
// document.write("<td>" + totalMarksForEachSubject + "</td>")
// document.write("<td>" + obtMarksSub3 + "</td>")
// document.write("<td>" + percentFormulae3 + "%" + "</td>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td>" + " " + "</td>")
// document.write("<td>" + sumOFTotalMarks + "</td>")
// document.write("<td>" + sumOfAllSubjectsMarks + "</td>")
// document.write("<td>" + finalPercentage + "%" + "</td>")
// document.write("</tr>")
// document.write("</table>")


//                                          CHAP 6 TO 9 END


//                          Chp 9 to 11       USER INPUT & CONDITIONAL STATEMENT 
//1. Write a program to take “city” name as input from user. 
//If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 

// var userInput = prompt("Enter Your city name", " ");
// if(userInput === "Karachi"){
//     document.write("Welcome to the city of light");
// }
// else{
//     document.write("Welcome");

// }

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. 
// If the user is female, give the message: Good Morning Ma’am.

//1. Write a program to take “city” name as input from user. 
//If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 

// var userInput = prompt("Enter Your grnder", " ");
// if(userInput === "male"){
//     document.write(" Good Morning Sir");
// }
// else if(userInput === "female"){
//     document.write(" Good Morning Ma’am");
// }
// else{
//     document.write("Good Morning" + userInput);

// }

//3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
// var colorSignal = prompt("Enter any one traffic signal color")
// if (colorSignal === "red")
//     document.write("Must Stop");
// else if (colorSignal === "yellow")
//     document.write("Ready to move");
// else if (colorSignal === "green")
//     document.write("move now ");
// else{
//     document.write("Please enter correct color");
// }


// 4. Write a program to take input remaining fuel in car (in litres) from user.
// If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
// var fuelAmount = prompt("Enter Fuel Amount in litres")
// if( fuelAmount < "0.25 litres")
// document.write("Please refill the fuel in your car");
// else{
//     document.write("Have a safe journey");
// }

//5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
//a. 
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// } // Output == alertbox

//b. 
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// //c.
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// // }
// if (c === 13) {
//     alert("condition 2 is true");
// } if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// //d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

//e. 
// if (true) { 
//     alert("True"); 
// }
// if (false) {
//     alert("False");
// }


//f.
// if ("car" < "cat") {
//     alert("car is smaller than cat")
// }

//6. Write a program to take input the marks obtained in three subjects & total marks.
//compute & show the resulting percentage on your page.
//totalmarks=300;
// obtMarks= prompt("enter obtained marks to calculate the percentage out of 300","");
// percenatge = obtMarks / totalmarks * 100;
// document.write("<h3>Marks Sheet</h3>");
// document.write("Total Marks:" + totalmarks+ "<br>");
// document.write("Obtained Marks:" + obtMarks+ "<br>");
// document.write(" Marks:Obtained" + obtMarks+ "<br>");
// if(percenatge >= 80){
//     document.write("Reamrks: Excellent"+ "<br>");
//     document.write("Grade : A-One") +"<br>";
// }

// else if(percenatge >= 70){
//     document.write("Reamrks: Good")+ "<br>";
//     document.write("Grade : A" +"<br>");
// }

// else if(percenatge >= 60){
//     document.write("Reamrks: youneed to improve" +"<br>");
//     document.write("Grade : B" +"<br>");
// }

// else if(percenatge >= 50){
//     document.write("Reamrks: sorry" + "<br>");
//     document.write("Grade : Fail "+"<br>");
// }

//7. Guess game: Store a secret number (ranging from 1 to 10) in a variable.
//  Prompt user to guess the secret number. 
//  a. If user guesses the same number, show “Bingo! Correct answer”. 
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 

// var secretNumber = 3;
// var ifUserClosedSecretNumber = secretNumber+1;
// var guessSecretNumber = prompt("Guess the NUmber", "");
// if (guessSecretNumber === secretNumber) {
//     alert("“Bingo! Correct answer”");
// }
// else if (guessSecretNumber === ifUserClosedSecretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("try again");

// }

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var check = prompt("Enter any no to check whether it is divisible by 3 or not ");
// if(check%3===0)
//             { 
//               document.write(check + " is divisible by 3");

//              }
//              else{
//               document.write(check + " is not divisible by 3");

//              }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// var check = prompt("Enter any number to check whether it is an even number or an odd number ");
// if (check % 2 === 0) {

//     alert(check + " is even number");
// }
// else {
//     alert(check + " is odd number");

// }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var T = prompt("Enter today's weather temperature ");
//   if (t>40) {


//     alert("It is too hot outside.");
//   }
//   else if(T>30) {
//     alert("The Weather today is Normal");

//   }
//   else if(T>20) {
//     alert("Today’s Weather is cool");

//   }
//   else if(T>10) {
//     alert("OMG! Today’s weather is so Cool");

//   }

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


// var firstNumber = prompt("Enter first number");
// var secondNumber = prompt("Enter second number");
// var operation = prompt("which operation you would like to perform (+, -, *, /, %)");
// var result;
// if (firstNumber == " ") {
//     alert("Fill the Fisrt number");
// }
// else if (operation === "+") {
//     result = parseInt(firstNumber) + parseInt(secondNumber);
//     alert("Sum of " + firstNumber + " & " + secondNumber + " is " + result);
// }
// else if (operation === "-") {
//     result = firstNumber - secondNumber;
//     alert("Subtraction of " + firstNumber + " & " + secondNumber + " is " + result);
// }
// else if (operation === "*") {
//     result = firstNumber * secondNumber;
//     alert("Product of " + firstNumber + " & " + secondNumber + " is " + result);
// }
// else if (operation === "/") {
//     result = firstNumber / secondNumber;
//     alert("Division of " + firstNumber + " & " + secondNumber + " is " + result);
// }
// else if (operation === "%") {
//     result = firstNumber % secondNumber;
//     alert("Modulus of " + firstNumber + " & " + secondNumber + " is " + result);
// }
//                                      CHP 9 TO 11 END

//                IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS | Assignment # 12-13

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// var anykey = prompt("Enter any key :",);
// if ((anykey >= String.fromCharCode(65) && anykey <= String.fromCharCode(90)) || (anykey >= String.fromCharCode(97) && anykey <= String.fromCharCode(122))) {
//     alert(" Alphabet ");
// }
// else if (anykey >= String.fromCharCode(48) && anykey <= String.fromCharCode(57)) {
//     alert(" Digit ");
// }
// else if (anykey > String.fromCharCode(122)) {
//     alert(" String ");
// }
// else {
//     alert(" Special Character ");
// }

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var integer1 = prompt("Enter First number");
// var   integer2 = prompt("Enter Second number");

// if (integer1 > integer2) {
//     alert(integer1 + " is greater than " + integer2);
// }
// else if (integer1 < integer2) {
//     alert(integer1 + " is less than " + integer2);
// }
// else if (integer1 === integer2) {
//     alert(integer1 + " is equal to " + integer2);
// }

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var no =prompt("Enter any number to check whether it is positive, negative or zero");

// if (no > 0) {
//     alert(no + " is Positive number");
// }
// else if (no < 0) {
//     alert(no + " is Negative number");
// }
// else if (no === 0) {
//     alert("It is a Zero");
// }

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise


// 1st try
// var char = prompt("Enter any one Character to check it is vowel or not");

// if (char === "a" || "e" || "i" || "o" || "u") {
//     alert("It is a vowel");
// }
// else {
//     alert("It is not a vowel");
// }


// another try
// var char = prompt("Enter any one Character to check it is vowel or not");
// if (char === String.fromCharCode(65, 69, 73, 79, 85) || char === String.fromCharCode(97, 101, 105, 111, 117)) {
//     alert("It is a vowel");
// }
// else {
//     alert("It is not a vowel");
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var pwd = prompt("Enter your pwd");
//   var  correct_pwd = "123456789";
// if (pwd == "" || pwd == null) {
//     alert("Please enter your password");
// }
// else if (pwd == correct_pwd) {
//     alert("Correct! The password you entered matches the original password");
// }
// else if (pwd != correct_pwd) {
//     alert("Incorrect password");
// }

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }


// var greeting;
// var hour = 13;
// if (hour < 18) {
//     alert("Good day");
// }
// else{
//     alert("Good evening");
// }

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// var time=prompt("Enter your current time in 24 hours clock format like: 1900 = 7pm ");

// if (time>=0000 && time<1700){ 
//   alert("Good Morning"); 
// }
// else if (time>=1200 && time<1700){ 
// alert("Good afternoon"); 
// }
// else if (time>=1700 && time<2100){ 
// alert("Good evening!"); 
// }
// else if (time>=2100 && time<=2359){ 
// alert("Good night!"); 
// }
// Assignment # 12-13  END


//                                         ARRAYS Assignment # 13-15

// 1. Declare an empty array using JS literal notation to store
// student names in future.
// var studentNames = [];


// 2. Declare an empty array using JS object notation to store
// student names in future.

// var studentNames = {};

// 3. Declare and initialize a strings array.

// var arr = ["Hello JS"];

// 4. Declare and initialize a numbers array.

// var numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// 5. Declare and initialize a boolean array.

// var booleanArr = [true, false];


// 6. Declare and initialize a mixed array.

// var mixedArr = ["Uzma", 1996, true];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var qualificationArr = ["SSC", "HSC", "BCS", "B.COM", "BBA", "MSC", "M.Phil", "PhD"];
// for (var i = 0; i < qualificationArr.length; i++) {
//     document.writeln(qualificationArr[i] + "<br>");

// }

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var studentNames = ["Horia", "Mahnoor", "Harum"];
// var studentMarks = [320, 420, 470];
// for (var i = 0; i < studentNames.length; i++) { 
//     for (var j = 0; j < studentMarks.length; j++) {
//         var percentage = studentMarks[i] * 100 / 500;
//     }
//     document.write("Score of " + studentNames[i] + " is " + studentMarks[i] + ". Percentage Is " + percentage + "% <br>")
// }



// 9. Initialize an array with color names. Display the array
// elements in your browser.

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colors = ["Black", "Green", "Grey", "Purple"];
// // document.writeln(colors);
// //a
// // var colorAddAtEnd = prompt("what color you wants to add to the beginning");
// // colors.unshift(colorAddAtEnd);
// // document.writeln(colorAddAtEnd);////////////////////////////////////////
// //b
// // var colorAddAtEnd = prompt("what color he/she wants to add to the End");
// // colors.push(colorAddAtEnd);
// // document.writeln(colorAddAtEnd);
// // //c
// colors.push("Pink", "Blue");
// // console.log(colors);
// // document.writeln(colors); ///////////////////////////////
// //d
// colors.shift();
// // document.writeln(colors);
// //e
// colors.pop();
// document.writeln(colors);
//f
// var colorToAdd = prompt("which color you want to add?")
// var colorIndex = prompt("at which index you want to add color");
// var added = colors.splice(colorIndex, 0, colorToAdd);
// document.writeln("color after adding: " + added);
//g
// var colorIndex = prompt("at which index you want to remove color");
//colors.splice(colorIndex, 1);
// document.writeln("color after removing: " + colors);
// 


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


// var studentsScore = [320, 230, 420, 180];
// document.writeln("Score of Students: " + studentsScore + "<br>");
// var sortedArr = studentsScore.sort();
// document.writeln("Ordered Score of students: " + sortedArr);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var citiesList = ["Karachi", "Lahore","Islamabad", "Peshawar", "Quetta"];
// document.writeln("Cities list: " + "<br>"+ citiesList + "<br>");
// var selectedCities = [citiesList[2]  + " ," + citiesList[4]]
// document.writeln("Selected Cities: "+ "<br>" + selectedCities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


// var arr = ['This', 'is', 'my', 'cat'];
// document.write(arr.join(" "));


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
// var fifo = []
// fifo.push("Keyboard")
// fifo.push("Mouse")
// fifo.push("Printer")
// fifo.push("Monitor")

// document.writeln(fifo) /////////////////////////////////////////////////////////



// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

// var lifo = []
// lifo.unshift("Keyboard")
// lifo.unshift("Mouse")
// lifo.unshift("Joystick")
// lifo.unshift("C.P.U")
// lifo.unshift("Speaker")
// document.writeln(fifo)//////////////////////////////////////////////////////////////////


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

// document.write("<select>   <option>" + "Select" + "</option><option>" + phoneManufacturers[0] + "</option> <option>" + phoneManufacturers[1] + "</option> <option>" + phoneManufacturers[2] + "</option> <option>" + phoneManufacturers[3] + "</option> <option>" + phoneManufacturers[4] + "</option>  <option>" + phoneManufacturers [5] + "</option>   </select>  ");




//                                      chapters14-16   END


//                                 ARRAYS AND LOOP         Assignment # 17-20

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// var multiDiArr = [[],[]];
//         console.log(multiDiArr);


// 2. Declare and initialize a multidimensional array
// representing the following matrix:
// var multiDiArr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// 3. Write a program to print numeric counting from 1 to 10
// for (var i = 1; i <= 10; i++) {
//     document.write(i + " <br>")
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.


// var table = prompt("enter a number to show its multiplication table");
// var lengthh = prompt(" enter length multiplication table");
// document.writeln("Multiplication table of "+ table + "<br>");
// document.writeln("Length " +lengthh + "<br>");
// for (var i = 1; i <= lengthh; i++) {
//     document.write(table + " x " + i + " = " + table * i + "<br>");
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.writeln(fruits[i]+ "<br>");
// }
// for (var i = 0; i < fruits.length; i++) {
//     document.writeln("Element at index " + i + " is " + fruits[i]+ "<br>");
// }

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// a
// document.write(" <h2> Counting: </h2>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ",");
// }
// // b
// document.write(" <h2> Reverse Counting: </h2> ");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ",");
// }
// // c
// document.write(" <h2> Even:</h2>");
// for (var i = 0; i <= 20; i = i + 2) {
//     document.write(i + ",");
// }
// // d
// document.write(" <h2>Odd: </h2>");
// for (var i = 1; i <= 20; i = i + 2) {
//     document.write(i + ",");
// }
// // e
// document.write("<h2> Series: </h2>");
// for (var i = 0; i <= 20; i = i + 2) {
//     document.write(i + "k,");
// }


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var orderMsg = prompt("Welcome to our bakery,What do you want to order sir/ma'am");
// var bakItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var isFound = false ;

// for (i = 0; i < bakItems.length; i++) {
//     if (orderMsg === bakItems[i]) {
//         alert(orderMsg + " is "+"<em>available</em>"+ " at index " + i + " in our bakery");
//         isFound = true;
//         break;
//     }
// }
// if (isFound === false) {
//     alert("We are sorry. " + orderMsg + " is" + "<b>" +"not available"+" </b>");
// }


// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// var A = [24, 53, 78, 91, 12];
// document.write("Array items: " + A+"<br>");
// A = A.sort();
// document.write("The largest number is " + A[A.length - 1]+"<br>");

// 9. Write a program to identify the smallest number in the
// given array.

// var B = [24, 53, 78, 91, 12];

// document.write("Array items: " + B+"<br>");
// B = B.sort().reverse();
// document.write("The smallest number is " +B[B.length - 1]+"<br>");

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for(var i = 5; i<=100; i=i+5){
//     document.write(i+"<br>");
// }


//ARRAYS AND LOOP         Assignment # 17-20  END