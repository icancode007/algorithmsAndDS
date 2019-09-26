// --- Directions-----
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*
//solution 1 
function reverse(str) {
    if(!!str) console.log("You will need to provide an actual string, and it should at least have a lenght of 1");

    let reverser = "";
    for(let i = str.length-1; i > -1; i--) {
        reverser += str[i];
    }
    return reverser;
}

//solution 2
function reverse( str ) {
    if ( !!str ) console.log( "You will need to provide an actual string, and it should at least have a lenght of 1" );
    let iterator = str[ Symbol.iterator ]();
    let curr = iterator.next();
    const chars = [];
    chars.unshift( curr.value );
    while (!curr.done) {
        curr = iterator.next();
        chars.unshift(curr.value)
    }
    return chars.join('');
}

//solution 3
function reverse( str ) {
    if ( !!str ) console.log( "You will need to provide an actual string, and it should at least have a lenght of 1" );
    let reversed = '';
    for ( let char of str ) {
        reversed = char + reversed;
    }
    return reversed;
}
        1 - 3 Explenation: 
            All the above solutions present a Big O of o(n) 
            since the amount of iterations is lineal and will not exceed the input size

*/

/*
        4 - 5 Explenation:
            Both last solutions have to use a splitter for each of str chars, 
            and then iterate againg to reverse an joing increasing the number of work and times to 3 * n 
            but in Big O so small numbers are trivial to a large set of data, so we can say its O(n) as well
//solution 4 - Completely cheating :P
const reverse = str => {
    if ( !!str ) console.log( "You will need to provide an actual string, and it should at least have a lenght of 1" );
    str.split('').reverse().join('');
}
*/
//solution 5
function reverse(str) {
    return str.split.reduce((reverser, currArrElement) => reverser += currArrElement, '')
}

