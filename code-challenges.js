// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:

// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code: 
//  Combine the 2 provided variables
//  Get the the length of the new array
//  Return Expected output of 9

// Code:
var comboRun = (padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))
console.log(comboRun.length)
//  Output ----> 9

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

// Pseudo code:
// create variable and utilize .split on currentCohort
// Reverse variable
// Console.log with .join on variable
// Return Expected Output of "3202 NRAEL"

// Code:
var reverseArray = currentCohort.split("")
reverseArray.reverse()
console.log(reverseArray.join(""))
// Output ----> "3202 NRAEL"

// --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// // Expected output: 13 5 -5 27

// // Pseudo code:
// // Create function for identifying only odd numbers 
// // Create loop for iterating odd numbers positive and negative using bang operator
// // Return output for odd numbers exclusively from the variable

// // Code:
const onlyOdd = (array) => {
    let newNum = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            newNum.push(array[i])
        }
    }
    return newNum
}
console.log(onlyOdd(stockExchange))
// Output ----> 13 5 -5 27