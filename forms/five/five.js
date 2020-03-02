/*
Copy the original employees and years arrays from #4.
Then add a function needed to answer the question:  Who has worked at the company the longest?
Call the function from the main program, return the index of the largest number of years employed, and from the  main program output their name. Use an alert for output.
Note: change the names of any variables used in the form 'four' so they aren't duplicates as the project will tell you that you have already declared variables with these names.A simple way it to just add a 2 on the end.

There are three sizes of poodles: standard, miniature, and toy. Write a

Copy the original employees and years arrays from #4.
Then add a function needed to answer the question:  Who has worked at the company the longest?
Call the function from the main program, return the index of the largest number of years employed, and from the  main program output their name. Use an alert for output.
Note: change the names of any variables used in the form 'four' so they aren't duplicates as the project will tell you that you have already declared variables with these names.A simple way it to just add a 2 on the end.
*/
let bigIndex = " "
function employees (employeeYears1) {
  let currentLargest = -1
  let bigIndex = -1
    for(i=0; i<3; i++)
      if(currentLargest > employeeYears[i]) {
      currentLargest = employeeYears[i]
      bigIndex = i
  }
  return bigIndex
  }
  
 
let employeeName = ['Mary Edwards', 'Don Smith', 'Tricia Evans']
let employeeYears = [22, 10, 5]

let foundIndexNew = employees(employeeYears1)
 alert(employeeName[foundIndexNew])
