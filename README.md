# Simple-Calculator

A simple calculator website where the user can enter in two numbers that they want to perform simple calculations on such as addition, subtraction, multiplication, and division.

Link to project: https://simple-calc-roreecedev.netlify.app/

![Simple Calculator Gif](<img/Simple Calc.gif>)

## How It's Made:

Tech used: HTML, CSS, JavaScript

I used the HTML to build the frame of the calculator. I used two forms, one for the user to end their two number and one for the calculator buttons. I assigned all the elements with ids.

Then I used JavaScript to build the behavior of the calculator. I created two variables to hold the two number input elements. Then I created four event listeners to run a function for each button that is clicked. For each function I used the corresponding arithmetic operators for each button to return a value to the function. The value that it retunns will be either addition, subtraction, muliptlication or division. 


## Lessons Learned:

During this project, I learned that when using the addition arithmetic operator in JavaScript, it makes the numbers into the string instead of adding the values together as numbers. I learned that in order to have the function run the correct task, I learned about the Number() object and passed through the values of the number inputs as arguments to the object.