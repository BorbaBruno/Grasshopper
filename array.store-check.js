let goods = [

    "clothing",
    "books",
]

let shoppingList = [

    'clothing',
    'food',
    'books',
    'toiletries',
]

for(let item of shoppingList) {
    console.log(item + ': ' + goods.includes(item));
}