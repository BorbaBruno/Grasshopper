/*
In this lesson, we'll use the 'map method' to call a function on each element in an array and return the results to a new array.

Example:

[
  1,
  2,
  3,
].map((num) => {
  return num * 2;
});

Will return the new array: [2, 4, 6]

*/

let groceries = [
  {
    name: 'Pop Corn',
    price: '$42'
  },
  {
    name: 'Nulled Cider',
    price: '$23'
  },
  {
    name: 'Bookworms',
    price: '$16'
  },
  {
    name: '4-Grain Bread',
    price: '$15'
  },
  {
    name: 'Juice',
    price: '$8'
  },
  {
    name: 'Gumdrops',
    price: '$4'
  }
]

let names = groceries.map(item => {
  return item.name
})
let prices = groceries.map(item => {
  return item.price
})

console.log('Names: ' + names)
console.log('Prices: ' + prices)
