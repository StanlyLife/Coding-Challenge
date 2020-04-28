class cons {
  constructor(a, b) {
    this.p = [a, b];
    console.log(this.p);
  }

  car() {
    console.log(this.p[0]);
  }

  cdr() {
    console.log(this.p[1]);
  }
}

myPair = new cons(5, 3);

myPair.car();
myPair.cdr();
