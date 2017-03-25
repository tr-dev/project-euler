'use strict';

/*
# Largest prime factor
- The prime factors of 13195 are 5, 7, 13 and 29.
- What is the largest prime factor of the number 600851475143 ?
- https://projecteuler.net/problem=3
*/
//Set our max number
const UPPER_LIMIT = 600851475143;
// const UPPER_LIMIT = 105;


function findPrime(product) {
  //Start from the lowest prime
  let current = 2;

  //Keep track of largest
  let largest;

  //While are value > 1
  while (product > 1) {

    //We see if we can divide out the current value
    if(product % current === 0){
      //Set product
      product = product / current;
      //Track our largest "prime";
      largest = current;
      //reset current back to 2
      current = 2;
    } else {
      //Try the next current
      current++;
    }

  }

  return largest;
}

console.log(`The largest prime factor of ${UPPER_LIMIT} is ${findPrime(UPPER_LIMIT)}`)
