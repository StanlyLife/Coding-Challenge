/*
Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

We will be sending the solution tomorrow, along with tomorrow's question. As always, feel free to shoot us an email if there's anything we can help with.

Have a great day!

*/

class scheduler {
  constructor(func, n) {
    setTimeout(() => {
      func();
    }, n);
  }
}

function logger() {
  console.log("logged!");
}

new scheduler(logger, 1500);
