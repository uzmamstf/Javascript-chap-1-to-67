// FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS  CHP 38 TO 42
// *********************************************************************

// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
// function power(a ,b ){
//     var a = prompt("Enter  number");
//     var b = prompt("Enter number for power");
//     var powerr = Math.pow(a,b);
//     document.writeln("The power of "+a+ " is " +b+ " And answer is: "+powerr);
// }
// power();

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, 


// function leapYear(year) {
//     var year = prompt("Enter any to check it is leap or not");

//     if (year / 400) {
//         document.writeln("the enter " + year + " is leap");
//     }
//     else if (year / 100) {
//         document.writeln("the enter " + year + "  not leap");
//     }
//     else {
//         return false;
//     }
// }
// leapYear();

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2

// function triangleSides(a, b, c) {
//     var a = prompt("enter value for one side of triangle");
//     var b = prompt("enter value for one side of triangle");
//     var c = prompt("enter value for one side of triangle");
//     var S = (a + b + c) / 2
//     var area = S*(S - a)*(S - b)*(S - c);
//     document.writeln("area of triangle is: "+ area.toFixed(3));
// }

// triangleSides();


// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
// function mainFunction(mark1,mark2,mark3){
//     var mark1 =  prompt("enter marks of English Subject ");
//     var mark2 =  prompt("enter marks of Maths Subject ");
//     var mark3 =  prompt("enter marks of Urdu Subject ");
//     function average(average){
//         var average =( mark1 + mark2 + mark3) / 3
//         document.writeln("Average is:" + average);

//     }
//     function percentage(){
//         var add = ( mark1 + mark2 + mark3),
//         percenatgeCalc= (300/add)*100;
//         document.writeln("percentage is:" + percenatgeCalc+"%");
//     }
//     average();
//     percentage();
// }
// mainFunction();


// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.


// function indexOF() {
//     var text = "To be or not to be.";
//     var segIndex = text.indexOf("be");
//     document.write(text);
//     document.write(segIndex);
// }
// indexOF();


// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// let string = prompt("enter any sentance to remove Vowels ");
// let string = "hi helo are ijj"
// if (string.length < 25) {
//     function hasVowels() {
//         let word = string.toLowerCase()
//         var result = word.match(/[aeiou]/g);
//         for (i = 0; i < result.length; i++) {
//             var regexstring = result[i];
//             var regexp = new RegExp(regexstring, "gi");
//             var str2 = word.replace(regexp, "");
//         }
//         document.write('The sentence " ', word, ' " after removing vowels " ', str2, ' " ');
//     }
//     hasVowels(string);
// } else {
//     alert('Sorry more than 25 characters long');
// }



// function delVowels(){
//     var sentence = prompt("Write any sentence");
//     document.write("The sentence you wrote: "+ sentence);
//     sentence.split();
//     sentence.remove("a","e","i","o","u");
//     document.write("after deletion of vowels"+sentence);
// }

// delVowels()


// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence


// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var result = str.match(/[aeiou]{2}/g);
//     for (i = 0; i < result.length; i++) {
//         document.writeln(result[i]);
//     }
// }
// var found = findOccurrences();

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// var distance = prompt('Enter the distance between city1 and city2 in KM ');
// function countMeter() {
//     var Meter = distance * 1000
//     document.writeln('distance in meters ', Meter, '<br>');
// }

// function countFeet() {
//     var Feet = distance * 3280.84;
//     document.writeln('distance in Feet ', Feet, '<br>');
// }

// function countInches() {
//     var Inches = distance * 39370.1
//     document.writeln('distance in Inches ', Inches, '<br>');

// }
// function countCentimeter() {
//     var Centimeter = distance * 100000
//     document.writeln('distance in Centimeter ', Centimeter, '<br>');

// }
// countMeter();
// countFeet();
// countInches();
// countCentimeter();


// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// function overTimeCalc() {
//     var workhours = prompt("how many hours did you work");
//     var overtimeRate = 12;
//     var multiply = overtimeRate*24;
//     if(workhours > 40){
//         document.write("your overtime pay is:" +multiply);

//     }
//     else{
//     document.write("you didnt over time")
//     }
// }
// overTimeCalc();





// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

// function currencyDenomination() {
//     var cash = prompt("Enter cash (in hundreds): ");
//     var hundred = parseInt(cash / 100);
//     var fifty = parseInt((cash % 100) / 50);
//     var ten = parseInt(((cash % 100) % 50) / 10);
//     document.writeln('You will have ', hundred, ' hundred notes ', fifty, ' fifty notes, ', ten, ' ten notes');

// }
// currencyDenomination();


//                       EVENTS  CHP 43 TO 48

//*********************************************************************
// 1. Show an alert box on click on a link.
// function popup(message) {

//      alert(message);
//     }

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.
// function popup(message) {

//          alert(message);
//         }


// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted. 
//accurate
// function makeInvisible(b) {
//     b.parentNode.remove();
// }
//first try

// var i = r.parentNode.parentNode.rowIndex;
// document.getElementById("myTable").makeInvisible(i)

//another try
// var index, table = document.getElementById("table");
// for (var i = 1; i < table.rows.length; i++) {
//     table.rows[i].cells[3].onClick = function () {
//         index = this.parentElement.rowIndex;
//         table.deleteRow(index);
//         console.log(index);

//     }

// }

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.    // Done in html

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

// var input = 0;
// document.querySelector('#field').value;
// function increment() {
//     document.getElementById('field').value = ++input;
// }
// function decrement() {
//     document.getElementById('field').value = --input;
// }

//                                        EVENTS Assignment # 49-52
//*********************************************************************


// 1. Create a signup form and display form data in your web
// page on submission.


// function fillCity() {
//     function firstName() {
//         var name = document.getElementById("name").value;
//         document.writeln("first Name: " + name);

//     }
//     function lastName() {
//         var lname = document.getElementById("Lname").value;
//         document.writeln("Last Name: " + lname);
//     }
//     function number() {
//         var no = document.getElementById("num").value;
//         document.writeln("Contact Number: " + no);
//     }

//     function email() {
//         var email = document.getElementById("email").value;
//         document.writeln("Email: " + email);
//     }
//     firstName();
//     lastName(); 
//     number();
//     email();
// }


// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed. 

// function expandLoris() {
//      var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety ofdistinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
//      document.getElementById("slowLoris").innerHTML = expandedParagraph;
//      }

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row


// function show() {
//     var name = document.getElementById('name').value,
//         Lname = document.getElementById('Lname').value,
//         num = document.getElementById('num').value,
//         email = document.getElementById('email').value;
//         document.writeln("<table><thead> <tr> <th>First Name</th><th>Last Name</th><th>Contact No. </th> <th>"+email+"</th></tr>  <tr> <td>"+name+"</td> <td>"+Lname+"</td> <td>"+num+"</td><td>email</td><td><button>  EDIT</button</td><td><button>  DELETE</button</td></tr></thead></table>")
//     }

//                    EVENTS Assignment # 49-52      END


// CHP 53 TO 57
// function showImage(e) {
//     console.log(e.src)
//     var modalImage = document.getElementById("model-image")
//     modalImage.src = e.src;
// }
// CHP 58 TO 67
// ********************************

//                                         //Get element of id “main-content” and assign them in a variable
// const main_content = document.getElementById("main-content");
// //console.log(document.all)
// //Display all child elements of “main-content” element
// console.log("all children element of id main-content")
// console.log(main_content.children[0]);
// console.log(main_content.children[1]);
// console.log(main_content.children[2]);
// console.log(main_content.children[3]);
// console.log(main_content.children[4]);
// //document.write("<h2>"+main_content.children+"</h2>")
// //. Get all elements of class “render” and show their innerHTML in browser
// const renderCLassElements = document.getElementsByClassName("render");
// document.write("<h2>Elements of class render</h2>");
// document.write(renderCLassElements[0].innerHTML + "<br>");
// document.write(renderCLassElements[1].innerHTML + "<br>");
// document.write(renderCLassElements[2].innerHTML + "<br>");
// document.write(renderCLassElements[3].innerHTML + "<br>");
// document.write(renderCLassElements[4].innerHTML + "<br>");
// // Fill input value whose element id first-name using javascript
// document.getElementById("first-name").value = "Uzma";
// document.getElementById("last-name").value = "Mustafa";
// document.getElementById("email").value = "uzmamstf@gmail.com";
// //What is node type of element having id “form-content”
// document.write("<h2>Question : 2</h2>")
// document.write("nodeType value of id form content is : " + document.getElementById("form-content").nodeType + "<br>");
// //. Show node type of element having id “lastName” and its child node.
// document.write("nodeType value of id lastName is : " + document.getElementById("lastName").nodeType + "<br>");
// //. Update child node of element having id “lastName”.
// document.getElementById("lastName").innerHTML + "Updated child by me";
// //Get First and last child of id “main-content”.
// console.log("fisrt and last child of id main-content")
// console.log(document.querySelector("#main-content > p:first-child"))
// console.log(document.getElementById("main-content").lastElementChild)
// //Get next and previous siblings of id “lastName”
// console.log("previos and next sibling of id last name")
// console.log(document.getElementById("lastName").previousElementSibling)
// console.log(document.getElementById("lastName").nextElementSibling)
// //. Get parent node and node type of element having id “email”
// console.log("parent node and nodeType of id email")
// console.log(document.getElementById("email").parentNode)
// console.log(document.getElementById("email").nodeType)