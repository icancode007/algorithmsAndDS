function maxChar( str ) { // Explanation: iterations depend on input size, falls under linear time, o(n)
    if ( !str ) {
        console.log( "we need something valid, come on" )
    }

    const charMap = {}
    let max;
    str.split( '' ).forEach( ( char, idx ) => {
        if ( idx === 0 ) max = char;

        if ( Object.keys( charMap ).includes( char ) ) {
            max = charMap[ char ] > charMap[ max ] ? char : max;
            charMap[ char ]++;
        } else {
            charMap[ char ] = 1;
        }
    } )
    return max;
}
//others solutions came to mind but since the was almost same decided to  omit
module.exports = maxChar;
