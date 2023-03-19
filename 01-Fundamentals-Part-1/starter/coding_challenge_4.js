// simple tip calculator.
// Tips 15% if bill between 50 and 30, otherwise tip 20%

// uses ternary operators

const billCost = 275;
const tip =
  billCost <= 300 && billCost >= 50 ? billCost * 0.15 : billCost * 0.2;

console.log(
  `The bill cost ${billCost} with tip of ${tip}. Final Cost: ${billCost + tip}`
);
