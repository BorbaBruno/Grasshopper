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

// Print all TV
televisions.forEach(printTV);

// Shift the first TV
console.log('The top smallest item was:');
printTV(televisions.shift());
console.log('The next smallest TV:');
printTV(televisions.shift());

