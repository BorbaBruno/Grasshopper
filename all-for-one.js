/*
In this lesson, we'll use the 'reduce method' to add up all the values of an array, .reduce() uses an array to calculate a single value, for example the sum.

.reduce() uses 2 arguments: a callback function, and a starting value. The callback also uses 2 parameters: the total value so far, and the current value.

For example:

[
  1,
  2,
  3,
].reduce((sun, number) => {
  return sum + number;
}, 0);

Will return 6, because 1 + 2 + 3 === 6.

*/

let hours = [8, 8, 6, 0, 8, 8, 12]

let prices = [4, 8, 15, 16, 23, 42]

console.log(hours)

let totalHours = hours.reduce((sum, hour) => {
  return sum + hour
}, 0) // This number will increment the sum.

console.log('Total Hours: ' + totalHours)

console.log(prices)

let totalCost = prices.reduce((sum, price) => {
  return sum + price
}, 0) // This number will increment the sum.

console.log('Total Cost: ' + totalCost)
