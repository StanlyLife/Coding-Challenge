/* Solution 1 */
class cons {
  constructor(a, b) {
    this.a = a;
    this.b = b;
    console.log([a, b]);
  }

  car() {
    console.log(this.a);
  }

  cdr() {
    console.log(this.b);
  }
}

myPair = new cons(5, 3);

myPair.car();
myPair.cdr();

/* solution 2 */

function cons2(a, b) {
  return (pair = [a, b]);
}

function car(pair) {
  return pair[0];
}

function cdr(pair) {
  return pair[1];
}

console.log(cons2(6, 9));
console.log(car(cons2(6, 9)));
console.log(cdr(cons2(6, 9)));
