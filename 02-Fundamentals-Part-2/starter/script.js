'use strict';

// 33 Functions
function logger() {
  console.log('My name is David');
}

logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

let juice = fruitProcessor(5, 3);
console.log(`Juice made: ${juice}`);

// 34 Function Declarations vs Expressions
// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// function expression using an anonymous function (function doesn't have a name)
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);

/* 35. Arrow Functions */
// good for one-liner functions
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(`calcAge3 = ${age3}`);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, 'David'));

/* 36. Functions Calling Other Functions */
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
  return juice;
}
console.log(fruitProcessor2(2, 3));
