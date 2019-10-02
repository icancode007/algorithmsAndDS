// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz( n ) {
    for ( let i = 1; i <= n; i++ ) {
        if ( i % 3 === 0 && i % 5 === 0 ) {
            console.log('fizzbuzz')
        } else if ( i % 3 === 0 ) {
            console.log( 'fizz' );
        } else if ( i % 5 === 0 ) {
            console.log( 'buzz' );
        } else {
            console.log( i );
        }
    }
}

function fizzBuzz(n){
    const divisibleBy3 = counter % 3 == 0;
    const divisibleBy5 = counter % 5 == 0;
    let counter = 1;

    while(counter <= n) {
        if(divisibleBy3 && divisibleBy5) {
            console.log('fizzbuzz');
        }
        
        if(divisibleBy3 && !divisibleBy5) {
            console.log('fizz');
        }
        
        if(divisibleBy5 && !divisibleBy3) {
            console.log('buzz');
        }
        
        if (!divisibleBy3 && !divisibleBy5 ) {
            console.log(counter)
        }
        counter++;
    }
}
module.exports = fizzBuzz;
