// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
/*
I: input base
O: a function that tests whether a given value is greater than the base, return true or false
*/
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return function
   return function(strNum) {
        // if strNum > base, return true
        if (strNum > base) {
            return true;
            // else return false
        } else {
            return false;
        }
   }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */
/*
I: input base
O: a function that tests whether a given value is less than the base, return true or false
*/
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return function
   return function(strNum) {
    // if strNum > base, return true
    if (strNum < base) {
        return true;
        // else return false
    } else {
        return false;
    }
}
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
/*
I: a starts with character, single
O: a return function that tests a given string starts with said character
C: must be case inscensitive
*/
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // return function
    return function(string){
        // if first letter of string === startsWith, return true; false if else
        if (string[0].toLowerCase() === startsWith.toLowerCase()){
            return true;
        } else {
            return false
        }
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
/*
I: a ends with character, single
O: a return function that tests a given string ends with said character
C: must be case inscensitive
*/
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // return function
    return function(string){
        // if last letter of string === startsWith, return true; false if else
        if (string[string.length - 1].toLowerCase() === endsWith.toLowerCase()){
            return true;
        } else {
            return false
        }
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
/*
I: an array of strings and a func
O: modified array of strings
*/
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // storage array
    var output = [];
    // for loop to iterate over the array
    for (var i = 0; i < strings.length; i++) {
    // way to apply the modify and push those into output
        output.push(modify(strings[i]));
    // return output
    }
    return output;
    // YOUR CODE ABOVE HERE //
}




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
/*
I: an array of strings and a function
O: a boolean true of false if All strings pass
*/
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // for loop to iterate over strings
    for (var i = 0; i < strings.length; i++) {
    // if statement to apply the test and return true for all or false for all
        if (test(strings[i]) === true && test(strings[i + 1]) === true) {
            return true;
        } else {
            return false;
        }
    }
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}