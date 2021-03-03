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

// better answer to the same question:

function reduceDirections2(directions) {
  let arr = []
  let opposites = {
    N: 'S',
    E: 'W',
    S: 'N',
    W: 'E'
  }
  
   for (let i = 0; i <= directions.length; i++) {
    // check if opposite direction is in opposites
		if (opposites[directions[i]]) {
      // check to see if opposite exists in the array
    	let direction = arr.indexOf(opposites[directions[i]])
      console.log(direction)
      if (direction === -1) {
      // if it does not exist, use unshift to place the direction at the front of array since push didn't work
      	arr.unshift(directions[i])
      } else {
      // If the opposite does exist in the array, remove it
      	arr.splice(direction, 1)
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



// Code Wars - Maximum Length Difference
// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Ex: a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
      return -1
  }
  let max = 0
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      let x = a1[i].length
      let y = a2[j].length
      if (Math.abs(x - y) > max) {
        max = Math.abs(x - y)
      }
    }
  }
return max
}



// Code Wars - Count the smiley faces!
// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Ex:
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

function countSmileys(arr) {
  const smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
  let count = 0;
  
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < smileys.length; j++){
      if (arr[i]===smileys[j]){
        count++;
      }
    }
    }
  return count;
  }




// Leetcode - Two Sum
// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = function(nums, target) {
  // loop through nums to grab first number we are adding
  let indices = []
  for (let i = 0; i < nums.length; i++) {
      // loop again to compare to a second number
      for (let j = 0; j < nums.length; j++) {
          if (nums[i] + nums[j] === target && i !== j) {
              indices.unshift(i)
              indices.unshift(j)
              return indices
          }
      }
  }
};



// Leetcode - 1431. Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

// Ex:
// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
// Explanation: 
// Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
// Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
// Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
// Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
// Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 

const kidsWithCandies = function(candies, extraCandies) {
  let largestNum = 0
  let array = []
  for (let i = 0; i < candies.length; i++) {
      if (candies[i] > largestNum) {
          largestNum = candies[i]
      }
  }
  for (let j = 0; j < candies.length; j++) {
      if (candies[j] + extraCandies >= largestNum) {
          array.push(true)
      } else {
          array.push(false)
      }
      console.log(array)
  }
  return array
};



// Leetcode - 1672. Richest Customer Wealth
// https://leetcode.com/problems/richest-customer-wealth/

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Ex: 
// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

const maximumWealth = function(accounts) {
  // loop through accounts 
  let maxWealth = 0
  for (let i = 0; i < accounts.length; i++) {
      let total = 0
          // loop through each account and add total up
      for (let j = 0; j < accounts[i].length; j++) {
          total += accounts[i][j]
      }
      if (total > maxWealth) {
          maxWealth = total
      }
  }
  return maxWealth
};



// Leetcode - 1108. Defanging an IP Address
// https://leetcode.com/problems/defanging-an-ip-address/

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Ex:
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

const defangIPaddr = function(address) {
  let splitAddress = address.split('')
  // loop over split address to check for '.'
  for (let i = 0; i < splitAddress.length; i++) {
      if (splitAddress[i] === '.') {
          splitAddress[i] = '[.]'
      }
  }
  let joinedAddress = splitAddress.join('')
  return joinedAddress
};



// Leetcode - 1470. Shuffle the Array
// https://leetcode.com/problems/shuffle-the-array/

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Ex:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

const shuffle = function(nums, n) {
  let arrayCount = n * 2
  let firstHalfOfArray = []
  let secondHalfOfArray = []
  let finalArray = []
  // divide the array in half
  for (let i = 0; i < arrayCount / 2; i++) {
      firstHalfOfArray.push(nums[i])
  }
  for (let j = arrayCount / 2; j < nums.length; j++) {
      secondHalfOfArray.push(nums[j])
  }
  for (let k = 0; k < arrayCount / 2; k++) {
      finalArray.push(firstHalfOfArray[k])
      finalArray.push(secondHalfOfArray[k])
      console.log(finalArray)
  }
  return finalArray
};



// Leetcode - 1512. Number of Good Pairs
// https://leetcode.com/problems/number-of-good-pairs/

// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

// Ex:
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

const numIdenticalPairs = function(nums) {
  // set variable to hold # of pairs
  let pairs = 0
  // loop through nums array 
  for (let i = 0; i < nums.length; i++) {
      // loop again for comparison
      for (let j = 0; j < nums.length; j++) {
          if (nums[i] == nums[j] && i < j) {
              pairs += 1
          }
      }
  }
  return pairs
};



// Leetcode - 771. Jewels and Stones
// https://leetcode.com/problems/jewels-and-stones/

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Ex: 
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

const numJewelsInStones = function(jewels, stones) {
  // set number of jewels to a variable
  let numOfJewels = 0
  // split the jewels
  let splitJewels = jewels.split('')
  // split the stones
  let splitStones = stones.split('')
  // loop through the stones and compare to jewels and see if there is a match
  for (let i = 0; i < splitJewels.length; i++) {
      for (let j = 0; j < splitStones.length; j++) {
          if (splitJewels[i] == splitStones[j]) {
              numOfJewels += 1
          }
      }
  }
  return numOfJewels
};



// Leetcode - 1678. Goal Parser Interpretation
// https://leetcode.com/problems/goal-parser-interpretation/

// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

// Ex: 
// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

const interpret = function(command) {
  // declare array to hold the values
  let parsedStringArray = []
  // split the command string
  let splitCommand = command.split('')
  // loop to check first character
  for (let i = 0; i < splitCommand.length; i++) {
      if (splitCommand[i] === 'G') {
          parsedStringArray.push('G')
      } else if (splitCommand[i] === '(' && splitCommand[i + 1] === ')') {
          parsedStringArray.push('o')
      } else if (splitCommand[i] === 'a' && splitCommand[i + 1] === 'l') {
          parsedStringArray.push('al')
      }
  }
  let finalString = parsedStringArray.join('')
  return finalString
};




// Eloquent JavaScript - Minimum
// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

function min(num1, num2) {
	if (num1 < num2) {
      return num1
    } else {
      return num2
    }
}



// Eloquent JavaScript - Recursion
// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

// Zero is even.

// One is odd.

// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

let isEven = (num) => {
  if (num == 0) {
     return true
   } else if (num == 1) {
     return false
   } else {
     return isEven(num -2)
   }
}



// Code Signal - shapeArea
// https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ

// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

function shapeArea(n) {
  let area = 1
  for (let i = 1; i < n; i++) {
      area += i * 4
  }
  return area
}



// Code Signal - Make Array Consecutive 2
// https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC

// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Ex:
// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.

function makeArrayConsecutive2(statues) {
  // sort the statues
  statues.sort((a, b) => {
      return a-b
  })
  // set min #
  let min = statues[0]
  // set max #
  let max = statues[statues.length - 1]
  // set count variable 
  let count = 0
  for (let i = min; i < max; i++) {
      if (statues.indexOf(i) === -1) {
          count++
      }
  }
  return count
}



// Code Signal - almostIncreasingSequence
// https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG/solutions

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

// Ex:
// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

function almostIncreasingSequence(sequence) {
  let count = 0;
  
  for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] <= sequence[i - 1]) {
          count++
          if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
              return false
          }
      }
  }
  
  return count <= 1
}



// Leetcode - 1365. How Many Numbers Are Smaller Than the Current Number
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Ex:
// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

const smallerNumbersThanCurrent = function(nums) {
  // Create array to hold nums
  let numsArray = []
  // loop through nums to grab one index
  for (let i = 0; i < nums.length; i++) {
      // set variable to count the smaller nums
      let smallNums = 0 
      // loop through nums again to compare the index i to each j
      for (let j = 0; j < nums.length; j++) {
          if (nums[j] < nums[i]) {
              smallNums++
          }
      }
      numsArray.push(smallNums)
  }
  return numsArray
};



// Leetcode - 1528. Shuffle String
// https://leetcode.com/problems/shuffle-string/

// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

// Ex:
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

const restoreString = function(s, indices) {
  // new array to hold the new string once placed correctly
  let newStringArray = []
  // loop over indices and push corresponding index in the splitString into the newStringArray
  for (let i = 0; i < indices.length; i++) {
      newStringArray[indices[i]] = s[i]
  }
  return newStringArray.join('')
};



// // Code Signal - matrixElementsSum
// // https://app.codesignal.com/arcade/intro/level-2/xskq4ZxLyqQMCLshr

// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

// Example

// For

// matrix = [[0, 1, 1, 2], 
//           [0, 5, 0, 0], 
//           [2, 0, 3, 3]]
// the output should be
// matrixElementsSum(matrix) = 9.

function matrixElementsSum(matrix) {
  let priceTotal = 0
  let bannedIndex = []
  
  for (let i = 0; i < matrix.length ; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === 0) {
              bannedIndex.push(j)
          } else if (bannedIndex.indexOf(j) === -1) {
              priceTotal += matrix[i][j]
          }
      }
  }
  return priceTotal
}



// Code Signal - mutateTheArray

// Given an integer n and an array a of length n, your task is to apply the following mutation to a:

// Array a mutates into a new array b of length n.
// For each i from 0 to n - 1, b[i] = a[i - 1] + a[i] + a[i + 1]
// If some element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, it should be set to 0. For example, b[0] should be equal to 0 + a[0] + a[1]

function mutateTheArray(n, a) {
  let b = []

  for (let i = 0; i < n ; i ++) {
    let first = a[i - 1]
    let second = a[i]
    let third = a[i + 1]

    if (a.indexOf(first) === -1) {
      first = 0
    }
    if (a.indexOf(second) === -1) {
      second = 0
    }
    if (a.indexOf(third) === -1) {
      third = 0
    }

    b[i] = first + second + third
  }
  return b
}



// Code Signal - countTinyPairs

// You are given two arrays of integers a and b of the same length, and an integer k. We will be iterating through array a from left to right, and simultaneously though array b from right to left, and looking at pairs (x , y) where x is from a and y is from b. Such a pair is called tiny if the concatenation xy is strictly less than k.

// Your task is to return the number of tiny pairs that you'll encounter during the simultaneous iteration through a and b.

function countTinyPairs(a , b, k) {
  let tinyPairs = 0
  let bIndex = b.length - 1
  let firstNum = 0
  let secondNum = 0

  for (let i = 0; i < a.length; i++) {
    firstNum = a[i]
    secondNum = b[bIndex]
    let total = '' + firstNum + secondNum
    if (total < k) {
      tinyPairs++
    }
    bIndex--
  }
  return tinyPairs
}



// Code Signal - All Longest Strings
// https://app.codesignal.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL

// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings(inputArray) {
  // set a variable to store the longest strings in an array
  let longestStrings = []
  // set a variable to store the longest length
  let longestLength = 0
  // loop over the array of strings
  for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].length > longestLength) {
          longestLength = inputArray[i].length
      }
  }
  // loop over again to see which ones match the length
  for (let j = 0; j < inputArray.length; j++) {
      if (inputArray[j].length === longestLength) {
          longestStrings.push(inputArray[j])
      }
  }
  return longestStrings
}



// Code Signal - commonCharacterCount
// https://app.codesignal.com/arcade/intro/level-3/JKKuHJknZNj4YGL32

// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

function commonCharacterCount(s1, s2) {
  // split the strings
  s1 = s1.split('')
  s2 = s2.split('')
  
  // create object
  let s1Object = {}
  let s2Object = {}
  
  // total variable
  let total = 0
  
  // iterate through the character array
  for (let i = 0; i < s1.length; i++) {
      if (s1Object.hasOwnProperty(s1[i]) === false) {
          s1Object[s1[i]] = 1
      } else {
          s1Object[s1[i]]++
      }
  }
  for (let j = 0; j < s2.length; j++) {
      if (s2Object.hasOwnProperty(s2[j]) === false) {
          s2Object[s2[j]] = 1
      } else {
          s2Object[s2[j]]++
      }
  }
  
  for (let prop in s1Object) {
      if (s2Object.hasOwnProperty(prop) === true) {
          if(s2Object[prop] < s1Object[prop]) {
              total += s2Object[prop]
          } else {
              total += s1Object[prop]
          }
      }
  }
  
  return total
}



// Code Signal - isLucky
// https://app.codesignal.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ

// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.

function isLucky(n) {
  let splitNum = n.toString().split('')
  let firstSide = 0
  let secondSide = 0
  for (let i = 0; i < splitNum.length / 2; i++) {
      firstSide += parseInt(splitNum[i])
  }
  for (let j = splitNum.length / 2; j < splitNum.length; j++) {
      secondSide += parseInt(splitNum[j])
  }
  if (firstSide === secondSide) {
      return true
  } else {
      return false
  }
}



// Code Signal - Sort by Height
// https://app.codesignal.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM

// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function sortByHeight(a) {
  let array2 = a
  
  array2 = array2.filter((element) => {
      if (element !== -1) {
          return element
      }
  }).sort((a, b) => {
      return a-b
  })
  
  let indexVal = 0
  
  for (let i = 0; i < a.length; i++) {
      if (a[i] !== -1) {
          a[i] = array2[indexVal]
          indexVal++
      }
  }
  
  return a
}



// Leetcode - 1281. Subtract the Product and Sum of Digits of an Integer
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

const subtractProductAndSum = function(n) {
  let splitNum = (n + '').split('').map((num) => {return Number(num)})
  let product = splitNum[0]
  let sum = splitNum[0]
  for (let i = 0; i < splitNum.length; i++) {
      if (i !== 0) {
          product *= splitNum[i]
      }
      console.log(product)
  }
  for (let j = 0; j < splitNum.length; j++) {
      if (j !== 0) {
          sum += splitNum[j]
      }
  }
  return product - sum
};



// Code Signal - reverseInParentheses
// https://app.codesignal.com/arcade/intro/level-3/9DgaPsE2a7M6M2Hu6

// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// Example

// For inputString = "(bar)", the output should be
// reverseInParentheses(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// reverseInParentheses(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// reverseInParentheses(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

reverseInParentheses = s => {
  if (s.indexOf('(') == -1) return s;
  
  const rev = s.split('(').pop().split(')')[0];
  console.log(rev)
  s = s.replace('(' + rev + ')', rev.split("").reverse().join(""));
  
  return reverseInParentheses(s);
}



// Code Signal - alternatingSums
// https://app.codesignal.com/arcade/intro/level-4/cC5QuL9fqvZjXJsW9

// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

// Example

// For a = [50, 60, 60, 45, 70], the output should be
// alternatingSums(a) = [180, 105].

function alternatingSums(a) {
  if (a.length === 1) {
      return [a[0], 0]
  }
  let team1 = []
  let team2 = []
  // iterate over the initial array
  for (let i = 0; i < a.length; i++) {
         // separate one after the oter into two different team arrays
      if (i % 2 === 0) {
          team1.push(a[i])
      } else {
          team2.push(a[i])
      }
  }
  // add both of the arrays up individually
  let team1Added = team1.reduce((a, b) => {
      return a + b
  })
  let team2Added = team2.reduce((a, b) => {
      return a + b
  })
  // return an array with both of the sums inside
  return [team1Added, team2Added]
}



// Code Signal - Add Border
// https://app.codesignal.com/arcade/intro/level-4/ZCD7NQnED724bJtjN

// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]

function addBorder(picture) {
  let borderArray = []
  let border = '*'
  for (let i = 0; i < picture.length; i++) {
      let splitElement = picture[i].split('')
      splitElement.unshift('*')
      splitElement.push('*')
      picture[i] = splitElement.join('')
  }
  let length = picture[0].length
  while (border.length < length) {
      border += '*'
  }
  picture.unshift(border)
  picture.push(border)
  return picture
}



// Code Signal - Are Similar?
// https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP

// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

// Example

// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// areSimilar(a, b) = true.

// The arrays are equal, no need to swap any elements.

// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// areSimilar(a, b) = true.

// We can obtain b from a by swapping 2 and 1 in b.

// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// areSimilar(a, b) = false.

// Any swap of any two elements either in a or in b won't make a and b equal.

function areSimilar(a, b) {
  if (a.toString() === b.toString()) {
      return true
  }
  
  let c = []
  let d = []
  
  for (let i = 0; i < a.length; i++) {
      if (a[i] != b[i]) {
          c.push(a[i])
          d.push(b[i])
      }
  }
  
  d = d.reverse()
  console.log(c)
  console.log(d)
  
  if (c.length === 2 && (c.toString() === d.toString())) {
      return true
  } else {
      return false
  }
}



// Code Signal - arrayChange
// https://app.codesignal.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg 

// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

// Example

// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3.

function arrayChange(inputArray) {
  let count = 0
  for (let i = 0; i < inputArray.length - 1; i++) {
      if (inputArray[i] >= inputArray[i + 1]) {
          let difference = inputArray[i] + 1 - inputArray[i + 1]
          inputArray[i + 1] = inputArray[i] + 1
          count += difference
      }
  }
  return count
 }



// Code Signal - palindromeRearranging
// https://app.codesignal.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico

// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

function palindromeRearranging(inputString) {
  let charArray = inputString.split('')
  let letterObject = {}
  for (let i = 0; i < charArray.length; i++) {
      if (!letterObject.hasOwnProperty(charArray[i])) {
          letterObject[charArray[i]] = 1
      } else {
          letterObject[charArray[i]]++
      }
  }
  let oddCount = 0
  for (val in letterObject) {
      if (letterObject[val] % 2 !== 0) {
          oddCount++
      }
  }
  return oddCount > 1 ? false : true
}



// Code Signal - areEquallyStrong

// Call two arms equally strong if the heaviest weights they each are able to lift are equal.

// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

// Example

// For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  let yourWeakest = (yourLeft <= yourRight) ? yourLeft : yourRight
  let yourStrongest = (yourLeft >= yourRight) ? yourLeft : yourRight
  let friendsWeakest = (friendsLeft <= friendsRight) ? friendsLeft : friendsRight
  let friendsStrongest = (friendsRight >= friendsLeft) ? friendsRight: friendsLeft
  
  if (yourStrongest === friendsStrongest && yourWeakest === friendsWeakest) {
      return true
  } else {
      return false
  }
}
