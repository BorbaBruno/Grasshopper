let televisions = [
    {
        size: '32"',
        price: 181.02,  
    },
    {
        size: '40"',
        price: 252.98,
    },
    {
        size: '50"',
        price: 353.55,
    },
    {
        size: '55"',
        price: 631.98,
    },
    {
        size: '65"',
        price: 876.55,
    },
]

function printTV(tv) {
    console.log(tv.size + ' for $' + tv.price);
}

//  Print array
televisions.forEach(printTV);
// Get the first element of the array, and set as a variable
let smallTV = televisions.shift();
// Access the property price of the first TV
// Set a new price /2
smallTV.price = smallTV.price / 2;
// Add it to the array (first element)
televisions.unshift(smallTV);
//  Print array (updated)
console.log('Updated list:');
televisions.forEach(printTV);

