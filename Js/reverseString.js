// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//solution 1
// function reverse(str) {
//     let reverser = "";
//     for(let i = str.length-1; i > -1; i--) {
//         reverser += str[i];
//     }
//     return reverser;
// }

//solution 2
function reverse( str ) {
    let iterator = str[ Symbol.iterator ]();
    let curr = iterator.next();
    const chars = [];
    chars.unshift( curr.value );
    while ( !curr.done ) {
        curr = iterator.next();
        chars.unshift( curr.value )
    }
    return chars.join( '' );
}
