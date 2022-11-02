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

let nameOf = item => {
  return item.name
}

let priceOf = item => {
  return item.price
}

console.log(nameOf(groceries[0]))
console.log(priceOf(groceries[0]))
