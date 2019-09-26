// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/*
    //solution 1
        have to use a splitter
        for each of str chars,
            and then iterate againg to reverse an joing increasing the number of work and times to 3 * n
        but in Big O so small numbers are trivial to a large set of data, so we can say its O( n ) as well
    const palindrome = str => {
         if ( !!str ) console.log( "You will need to provide an actual string, and it should at least have a lenght of 1" );
        str.split('').reverse().join( '' )  === str;
    }
*/
// solution 2
function palindrome(str) {
     if (!!str) console.log( "You will need to provide an actual string, and it should at least have a lenght of 1" );

    const lastIdx = str.length - 1;
    let front = 0;
    let end = lastIdx;
    while (str[front] === str[end]) {
        if (front == lastIdx) {
            return true;
        }
        front++;
        end--;
    }
    return false;
}

// 2 - Explanation: It present a Big O of o( n ) since the amount of iterations is lineal and will not exceed the input size

// solution 3
// const palindrome = str => str.split('').every((char, idx) => char === str[str.length -1 - idx]);

// 3 - Explanation: just like solution one this one depends on extra iterations, but in this case its only 2 so o(2n) which still is n
module.exports = palindrome;
