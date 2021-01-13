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