// ARROW FUNCTION  - BETTER WAY TO WRITE FUNCTIONS - ES6

function calculateDiscount(price, percentage) {
  return price - (price * percentage / 100);
}

console.log(calculateDiscount(100, 20)); // Output: 80

const calculateDiscount = (price, percentage) => price - (price * percentage / 100);

console.log(calculateDiscount(200, 50));

const calculateDiscounts = (price, percentage) => price - percentage;

console.log(calculateDiscount(200, 50));
