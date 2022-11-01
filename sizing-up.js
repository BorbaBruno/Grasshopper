// splice method to replace some items of an array whit new items.
// the .splice() methos has 3 arguments:
// 1 - The index to start selecting
// 2 - The number of items to replace
// 3 - The new items to insert

/*
The medium ('M') and large ('L') shirts are sold out, so they should be deleted. But the 'XL' shirts are back in stock, so they should be added back into the array.
Remove 'M' and 'L' and insert an 'XL' in their place by using shirtSizes.splice(). Starting at index 1, replace the next 2 items whit 1 'XL'.
*/

let shirtSizes = ['S', 'M', 'L', 'XXL']

let startPoint = 1
let itemsToReplace = 2
let newItem = 'XL'

console.log('old: ' + shirtSizes)
shirtSizes.splice(startPoint, itemsToReplace, newItem)
console.log('new: ' + shirtSizes)
