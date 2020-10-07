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

let array = [object]

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

