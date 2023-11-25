// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:This will add in indigo at the end of the colors array.
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: This will log the letters/numbers of the string. 
// b) Verify and explain: 10 is printed in the terminal. .Length behavior on a string is interpreted by logging the characters within the string. 

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: This would log the 4th place in the index of the string.
// b) Verify and explain: o is logged in the terminal. This is what the square brackets are logging into the terminal the 4th plaxe on the index (which is 0 index which is why l is logged instead of o.) 

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: The string "Ruby" should print.
// b) Verify and explain: Ruby is logged in the terminal. Index being placed inside of the square brackets executes an that the index for only the first place in the index to be shown or focused on. 

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: This will log an error message.
// b) Verify and explain: Error Message regarding toUpperCase. toUpperCase is to be placed after a number is indexed inside of [] brackets. This is because .toUppercase mainly works on strings and the way it is utilized in the console.log above is that its targeting the array. 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: Length on an array behavior is that it allows for the array to be counted as an index. Type of modifies that behavior logging the type of primitive data.
// b) Verify and explain: number is logged in the terminal. Typeof is an older built in method that returns what type of the primitive data is included in the terminal. Since .legnth returned 4, typeof returned number from the console.log.
