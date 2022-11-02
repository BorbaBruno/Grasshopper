/*

*/

let shoppingCart = ['towel', 'soap', 'brush', 'brush', 'brush', 'sponge']

let index = shoppingCart.indexOf('brush')

console.log(shoppingCart)

shoppingCart.splice(index, 3, 'comb')

console.log(shoppingCart)
