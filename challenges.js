// ZTM Exercise 5

var age = prompt("What is your age?");

if (Number(age) < 18) {
  alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
  alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
  alert("Congratulations on your first year of driving. Enjoy the ride!");
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"

// 1.
func checkDriverAge() {
    var age = prompt("What is your age?");
    if (Number(age) < 18) {
    alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

// 2.
let checkDriverAge2 = function() {
    var age = prompt("What is your age?");
    if (Number(age) < 18) {
    alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

// BONUS
func checkDriverAge(age) {
    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
      } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
      } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
      }
}



// ZTM Facebook Exercise

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

let object = {
    username: "Chase",
    password: 123
}

// 2. Create an array which contains the object you have made above and name the array "database".

let database = [object]

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let newsFeed = [
    {
        username: "Chase",
        timeline: "I am eating pizza"
    },
    {
        username: "Summer",
        timeline: "I am eating cake"
    },
    {
        username: "Bob",
        timeline: "I am eating ice cream"
    }
]


// Code Wars - Sum of two lowest positive integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) { 
  // Using sort to create a new array with numbers in ascending order
  let sortedArray = numbers.sort(function(a,b) {
    return a -b
  })
  let lowestNum = sortedArray[0]
  let secondLowestNum = sortedArray[1]
  return lowestNum + secondLowestNum
}

// Trying the same problem without sort

function sumTwoSmallestNumbers(numbers) {
  let firstNum = numbers[0] 
  let secondNum = numbers[1]
  let indexOfSmallestOne = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < firstNum) {
      firstNum = numbers[i]
      indexOfSmallestOne = i
    }
    if (numbers[i] < secondNum && indexOfSmallestOne !== i ) {
      secondNum = numbers[i]
    }
  }
  return firstNum + secondNum
}

function sumTwoSmallestNumbers(numbers) {
  let firstNum = numbers[0];
  let secondNum = numbers[1];
  let indexOfSmallestOne = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < firstNum) {
      //Passing this test means we have a new smallest number so we can assume firstNum is now the secondNum
      //firstNum now gets the new smallest number 
      
      secondNum = firstNum; /* assigns the secondNum without waiting to pass the second if statement */
      firstNum = numbers[i];
      indexOfSmallestOne = i;
      
    }
    //Now when we get to here and if our first test doesn't pass, we only have to worry about the current array value being less than our secondNum
    //If this doesn't pass -- no worries, the second smallest number was already assigned
    if (numbers[i] < secondNum && indexOfSmallestOne !== i) {
      secondNum = numbers[i];
    }
  }
  return firstNum + secondNum;
}



// Eloquent JavaScript Chapter 2 Exercises

// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

const triangle = () => {
  let triangle = ''
  for (let i = 0; i <= 6; i++) {
    triangle += '#'
    console.log(triangle)
  }
}

triangle();



// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log('fizz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz();



// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

const chessboard = () => {
  let size = 8;
  let board = '';
  for (let i = 0; i < size.length; i++) { // Lookping to create new line
    for (let j = 0; j < size.length; j++) { // This loop is each line and is either adding a space or #
      if ((i + j) % 2 == 0) {
        board += ' '
      } else {
        board += '#'
      }
    }
    board += '\n'
  }
  console.log(board);
}

chessboard();




// Code Wars - Find the odd int
// https://www.codewars.com/kata/54da5a58ea159efa3

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  // loop through the initial array
  for (let i = 0; i < A.length; i++) {
    let count = 0
    let num = A[i]
    // loop through the array again comparing every number to the index of the first array loop
    for (let j = 0; j < A.length; j++) {
      if (num === A[j]) {
        count ++
      }
    }
    if (count % 2 !== 0) {
      return num
    }
  }
}




// Code Wars - Find the smallest integer in the array
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallestNum = args[0]
    for (let i = 0; i < args.length; i++) {
      if (args[i] < smallestNum) {
        smallestNum = args[i]
      }
    }
    return smallestNum
  }
}


// Code Wars - You only need one
// https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (x == a[i]) {
      return true
    } 
  }
  return false
}



// Code Wars - Isograms
// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str){
  let splitStr = str.toLowerCase().split('')
  for (let i = 0; i < splitStr.length; i++) {
    for (let j = 0; j < splitStr.length; j++) {
      if (splitStr[i] === splitStr[j] && i !== j) {
        return false
      }
    }
  }
  return true
}



// Travel Directions Reduction
// You're travelling in the desert, and you're exhausted. You have a list of directions that you need to follow to get to your destination. They look a lot like this:

//   ['N', 'N', 'W', 'S', 'E', 'W', 'S']
// You're a smart person right? You realize that most of these directions are useless. North and south cancel out, and east and west cancel out. You could really just simplify these directions to:

//   ['W']
// So you walk one unit west, and arrive at your destination without dying of thirst.

// Requirements
// You need to write a function called reduceDirections() that will take an array of directions represented as characters. You will also return an array of characters, but with the most reduced directions.

// You may only move north, south, east, and west
// Ignore any instructions other than 'N', 'S', 'E', or 'W'
// Each instruction means to move one unit in that direction
// Return an empty array if you're somehow already at your destination but didn't even notice!

function reduceDirections(directions) {
	let arr = []
 	for (let i = 0; i <= directions.length; i++) {
  
  	if (directions[i] === 'N' || directions[i] === 'E' || directions[i] === 'S' || directions[i] === 'W') {
    	arr = directions
    } else {
    directions.splice(i, 1)
    arr = directions
    }
    
    for (let j = 0; j <= directions.length; j++) {
    console.log(arr, '<- arr')
    	if (directions[i] === 'N' && directions[j] === 'S' || directions[i] === 'S' && directions[j] === 'N'  ) {
      	arr.splice(i, 1)
        arr.splice(j - 1, 1)
      } else if (directions[i] === 'E' && directions[j] === 'W' || directions[i] === 'W' && directions[j] === 'E') {
      	arr.splice(i, 1)
        arr.splice(j - 1, 1)
      }
    }
    
  }
  
  return arr
}



// Code Signal Arcade - add

// Write a function that returns the sum of two numbers.

function add(param1, param2) {
  return param1 + param2
}




// Code Signal Arcade - centuryFromYear
// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
  let century = 0
  for (let i = 1; i <= year; i = i + 100) {
      console.log(i)
      century = century + 1
  }
  return century
}



// Code Signal Arcade - checkPalindrome

// Given the string, check if it is a palindrome.

function checkPalindrome(inputString) {
  let originalString = inputString
  let reversedString = inputString.split('').reverse().join('')
  if (originalString === reversedString) {
      return true
  } else {
      return false
  }
}



// Code Signal Arcade - adjacentElementsProduct

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Ex: For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.
// 7 and 3 produce the largest product.

function adjacentElementsProduct(inputArray) {
  // Set array to hold all of the products from the given array
  let arrayOfSums = []
  // Set variable to hold the biggestNum
  let biggestNum = 0
  // Initial loop over array
  for (let i = 0; i < inputArray.length - 1; i++) {
      let sum = inputArray[i] * inputArray[i + 1]
      arrayOfSums.push(sum)
  }
  biggestNum = Math.max(...arrayOfSums)
  return biggestNum
}