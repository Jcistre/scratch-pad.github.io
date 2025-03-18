// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
/*
I: array to loop over
O: print the array values
*/
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // for loop to iterate over array
  for (var i = 0; i < array.length; i++)
  // console.log the values
  console.log(array[i]);
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
/*
I: array to iterate over backwards
O: print values of the array
*/
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // for loop to iterate backwards
  for (var i = array.length - 1; i >= 0; i--)
  // console.log the values
  console.log(array[i]);
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
/*
I: an object
O: array containing object keys
*/
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // var named array
  var array = [];
  // for in loop to iterate over object
  for (var key in object) {
  // return and push keys into array
    array.push(key);
}
return array;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
/*
I: an object
O: print an object's keys to the console
*/
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // for in loop to iterate over object
  for (var key in object) {
  // print the keys into the console
    console.log(key);
}
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
/*
I: object
O: array containing object's values
*/
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // var named array
  var array = [];
  // for in loop to iterate over object
  for (var key in object) {
  // return and push keys into array
    array.push(object[key]);
}
return array;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
/*
I: an object
O: print the object's values
*/
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
    // for in loop to iterate over object
    for (var key in object) {
      // print the keys into the console
        console.log(object[key]);
    }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/*
I: an object
O: number of key/value pairs in object
*/
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // var named count and assign number of key/value pairs
  var count = Object.keys(object).length;
  // return count
  return count
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
/*
I: an object to loop over
O: print an object's values in backwards
*/
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // reuse getObjectValues and create storage array
  var storageArr = getObjectValues(object);
  // for loop to iterate over array backwards and print values backwards
  for (var i = storageArr.length - 1; i >= 0; i--){
    console.log(storageArr[i]);
  }
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}