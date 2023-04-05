/* Tip Calculator
Tip 15% of the bill if bill value between 50 and 300
if the value is different, tip 20%
*/

// Write calcTip that takes any bill value as an input
const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

console.log(`Bill = 50 with tip ${calcTip(50)}`);

// Create an array of bills
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(`Bills are ${bills} with tips ${tips}`);
