// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true

//   palindrome("abcdefg") === false

// solution 1
// const palindrome = str => str.split('').reverse().join( '' )  === str;

// solution 2
function palindrome(str) {
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

// solution 3
// const palindrome = str => str.split('').every((char, idx) => char === str[str.length -1 - idx]);

module.exports = palindrome;
