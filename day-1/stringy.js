// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
/*
I: string value
O: length of string
C:
E:
*/
function length(string) {
    // YOUR CODE BELOW HERE //

    // return string.length
    return string.length;
    
    // YOUR CODE ABOVE HERE //
}



/**
 * Given an input String, return a new String forced to lowercase.
 */
/*
I: string value
O: lowercase the string value
C:
E:
*/
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
   
    // return the lowercase string value
    return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

/*
I: string value
O: uppercase string value
C:
E:
*/
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    // return uppercase string value
    return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */

/*
I: string value
O: dash-cased string value
C:
E:
*/
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    // array to store splitStr
    var splitStr = [];
    // lowercase the string value
    var lowercase = string.toLowerCase();
    // split string
    splitStr = lowercase.split(' ');
    // join and return the string
    return splitStr.join('-');
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
I: a string and a letter to check first letter
O: a boolean true or false
C:
E:
*/
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
        // if statement to compare values
        if (string[0].toLowerCase() === char.toLowerCase()) {
        // return true if same
            return true;
        } else {
        //return false if not
            return false;
        }
    // YOUR CODE ABOVE HERE //
    }

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
I: a string value and a character to check last letter
O: true or false 
C:
E:
*/
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // if statement to compare values
    if (string[string.length - 1].toLowerCase() === char.toLowerCase()) {
        // return true if same
            return true;
        } else {
        //return false if not
            return false;
        }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
/*
I: two string valuse
O: concated string
C:
E:
*/
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    //concat the string values and return string
    return stringOne.concat(stringTwo);

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
/*
I: x amount of string values
O: all string values joined together
C:
E:
*/
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    // concat strings together
    return args.join("");
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
/*
I: two strings
O: the longest of the two strings
C:
E:
*/
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // stringOne value
    var a = stringOne.length
    //stringTwo value
    var b = stringTwo.length
    // if statment to compare string lengths
    if (a > b) {
        return stringOne
    } else {
        return stringTwo
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: two strings to compare alphabetically
O: 1, -1, or 0
C:
E:
*/
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // if statement to compare if stringOne is greater than stringTwo
    if (stringOne > stringTwo) {
        return -1;
    // else if statement to compare if stringTwo is less than stringOne
    } else if (stringOne < stringTwo) {
        return 1;
    // else return 0 if both are equal
    } else {
        return 0;
    }
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: two strings to compare alphabetically
O: 1, -1, 0
C:
E:
*/
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// if statement to compare if stringTwo is greater than stringOne
if (stringOne < stringTwo) {
    return -1;
// else if statement to compare if stringOne is less than stringTwo
} else if (stringOne > stringTwo) {
    return 1;
// else return 0 if both are equal
} else {
    return 0;
}
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}