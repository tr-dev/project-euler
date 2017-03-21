'use strict';

/*
- Each new term in the Fibonacci sequence is generated by adding the previous two terms.
- By starting with 1 and 2, the first 10 terms will be:
    1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
- By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
- https://projecteuler.net/problem=2
*/
//Set our max number
const UPPER_LIMIT = 4000000;


function fibonacci(n) {
  if (n < 2){
    return 0;
  }
  let fib1 = 1;
  let fib2 = 1;
  let sum = 0;

  while(fib2 < n) {
    //fib(n) = fib(n-2) + fin(n-1)
    let  fibSum = fib1 + fib2;

    //Add to our sum if even
    sum += (fibSum % 2 === 0) ? fibSum : 0;

    //Increment n
    fib1 = fib2;
    fib2 = fibSum;
  }
  return sum;
}

let sum = fibonacci(UPPER_LIMIT);
console.log(`The sum of the evens are ${sum}`)