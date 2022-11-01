// The join method combines the elements of an array into a new string.
// .join() can optionally take a string as an argument, and will insert that string between each element as it joins the array.
// if no argument is given, it will automatically add a comma instead. Tomake .join() add nothing, use an empty '' as an argument.
// Join the elements in the saleItems array into a string whit the .join() array method.

let saleItems = ['Bug Bites', 'String Beans', 'Console Lager']

console.log('For sale: ' + saleItems.join(' & '))
