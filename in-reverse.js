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

function printItem(item) {
  console.log(item.name + ': ' + item.price)
}

// Change the array order
groceries.reverse()
// Print the array
groceries.forEach(printItem)
