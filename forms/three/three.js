/* 
Write a program that gets two numbers from the user, then use a function to tell whether they are both even or not. Also use a boolean operator. Then in the main program, tell the user what was found using this format: 

      The results of our test:  both numbers are even.
Note: you may need the Mod operator %. This is a cousin of the divide / operator. It gives you the remainder of a division. For example, 5%3  (read 5 mod 3) = 2 (that is, 5 divided by 3 is 1 remainder 2 - mod reports the remainder). 

function isItEven (first, second) {
    return ((first %= 2),(second %= 2))
    }
let number1 = Number(prompt(“Enter your first number “))
let number2 = Number(prompt(“Enter your second number”))
if (number1 % 2 == 0 && number2 % 2 == 0) {
    alert(“Both of your numbers are even!“)
    } else {
    alert(“Both of your numbers are NOT even....“)
    }
*/