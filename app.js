console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for(i = 1; i <= count; i++) 
 if(i % 2 == 1) {
    console.log(i);
} else {
    console.log("not odd");
}

};

printOdds(88)


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age) {
    let aboveSixteen = "You can drive!";
    let belowSixteen = "Sorry, but you need to wait until you're 16.";
    if (age < 16){
        console.log(belowSixteen);
    } else { 
        console.log(aboveSixteen);
    }

};

checkAge(30);