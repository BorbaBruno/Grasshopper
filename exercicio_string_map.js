
let word = 'Determinação';

console.log(word);

function mapString(string) {
    let map = {

    };


    for(let i = 0; i < string.length; i++) {
        let letter = string[i]; // [0] = D, [1] = e, [2] = t, [3] = e, [4] = r, [5] = m, [6] = i, [7] = n, [8] = a, [9] = ç, [10] = ã, [11] = o.

        if(map[letter]) { 
            map[letter].push(i);
        } else {
            map[letter] = [i];
        }
    }

    return map;
}

let stringMap = mapString(word);

for(let letter in stringMap){
    console.log(letter+ ': ' + stringMap[letter]);
}