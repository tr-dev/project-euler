'use strict';
const Helper = require('./lib/HelperClass');
/*
# Multiples of 3 and 5
- If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
- The sum of these multiples is 23.
- Find the sum of all the multiples of 3 or 5 below 1000.
- - https://projecteuler.net/problem=1
*/
//Set our max number

class Problem1 extends Helper {
  constructor(limit) {
    super(1, limit)

  }
  solve(UPPER) {
    //The factors we are checking
    const factors = [3, 5];

    let sum = 0;

    for (let counter = UPPER - 1; counter > 0; counter--) {
      //If we have a factor, include it in our sum, else add nothing
      sum += (counter % factors[0] === 0 || counter % factors[1] === 0) ? counter : 0;
    }

    return sum;
  }
}

(new Problem1(1000)).solution();
