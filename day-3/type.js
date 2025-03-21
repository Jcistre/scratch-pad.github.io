// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */
/*
I: input value
O: true if array, false if not
*/
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // if statement to determine if value is array, return true if it is
    if (Array.isArray(value) === true) {
        return true;
    // if not, return false
    } else {
        return false;
    } 
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 */
/*
I: an input value
O: true if an object, but false if null, array, date
*/
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // if statement to determine if value is array, return false
    if (Array.isArray(value) === true) {
        return false;
    // if value is null, return false
    } else if (value === null) {
        return false;
    // if value is Date, return false
    } else if (value instanceof Date) {
        return false;
    // if value is an Object (real), return true
    } else if (typeof value === 'object') {
        return true;
    // if value is anything else, return false
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
/*
I: an input value
O: if value is an object or array, return true; anything else, return false
*/
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // if statement to determine if value is array, return true
    if (Array.isArray(value) === true) {
        return true;
    // if value is null, return false
    } else if (value === null) {
        return false;
    // if value is Date, return false
    } else if (value instanceof Date) {
        return false;
    // if value is an Object (real), return true
    } else if (typeof value === 'object') {
        return true;
    // if value is anything else, return false
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */
/*
I: an input value
O: what type it is
*/
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value) === true) {
        return 'array';
    // if value is null, return false
    } else if (value === null) {
        return 'null';
    // if value is Date, return false
    } else if (value instanceof Date) {
        return 'date';
    // if value is an Object (real), return true
    } else if (typeof value === 'object') {
        return 'object';
    // if value is anything else, return false
    } else {
        return typeof value;
    }
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}