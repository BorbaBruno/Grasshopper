
let closingTime = [
    
    '5pm',
    '5pm',
    '5pm',
    '5pm',
    '5pm',
    '5pm',
    '5pm',
]

console.log(closingTime);

for(let i = 0; i < closingTime.length; i+=2){
    closingTime[i] = '9pm';
}

console.log(closingTime);