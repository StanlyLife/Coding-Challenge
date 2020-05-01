/*
There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time.
 Given N, write a function that returns the number of unique ways you can climb the staircase.
  The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2
What if, instead of being able to climb 1 or 2 steps at a time,
you could climb any number from a set of positive integers X?
 For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
*/
let ArrayContainer = new Array();

class StairClimber {
  constructor(N) {
    this.Stairs = N;
    this.HardClimb(this.Stairs);
    this.EasyClimb();
  }

  HardClimb(Stairs) {
    let HardClimbArray = new Array();
    for (let steps = 0; steps < Stairs; steps++) {
      HardClimbArray.push(1);
    }
    console.log(`HardClimbArray ${HardClimbArray}`);
    ArrayContainer.push(HardClimbArray);
  }

  EasyClimb() {
    let EasyClimbArray = ArrayContainer[0];
    for (let steps = 0; steps < (EasyClimbArray.length - 1) / 2; steps++) {
      for (let steps = 0; steps < EasyClimbArray.length; steps++) {
        if (EasyClimbArray[steps] == EasyClimbArray[steps + 1]) {
          EasyClimbArray.pop(EasyClimbArray[steps]);
          EasyClimbArray.pop(EasyClimbArray[steps + 1]);
          EasyClimbArray.splice(0, 0, 2);
        }
        console.log(`EasyClimbArray ${EasyClimbArray}`);
      }
    }
  }
}
new StairClimber(6);
