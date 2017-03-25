'use strict';
module.exports = class Helper {
  constructor(problem, upper) {
    this.upper = upper;
    this.problem = problem;
  }

  solution() {
    console.log(`The solution for problem ${this.problem} with a limit of ${this.upper} is ${this.solve(this.upper)}`)
  }
}
