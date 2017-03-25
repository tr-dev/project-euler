'use strict';
module.exports = class Helper {
  constructor(problem, upper) {
    this.upper = upper;
    this.problem = problem;
  }

  solve() {
    console.log('Subclass solution not implemented :/');
    process.exit(1);
  }
  solution() {
    console.log(`The solution for problem ${this.problem} with a limit of ${this.upper} is ${this.solve(this.upper)}`)
  }
}
