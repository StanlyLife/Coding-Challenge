/*

This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?

We will be sending the solution tomorrow, along with tomorrow's question. As always, feel free to shoot us an email if there's anything we can help with.

*/

const array = [2, 4, 6, 2, 5];

function NonAdjecentArray(array) {
  /* sum the arrays to avoid another loop */
  let evenCounter = 0;
  let oddCounter = 0;
  /* track which array is larger */
  let evenArray = [];
  let oddArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      evenCounter += array[i];
      evenArray.push(array[i]);
    } else {
      oddCounter += array[i];
      oddArray.push[array[i]];
    }
  }

  if (evenCounter > oddCounter) {
    //evenArray gives the largest sum of integers

    console.log(`the even array gives the largest sum`);
    console.log(
      `with a combination of ${evenArray} you get the sum ${evenCounter}`
    );
  } else if (evenCounter === oddCounter) {
    //They are equal

    console.log(`they are both equal in size`);
    console.log(
      `EvenArray consits of ${evenArray} and a count of ${evenCounter}`
    );
    console.log(
      `EvenArray consits of ${oddArray} and a count of ${oddCounter}`
    );
  } else {
    //oddArray gives the largest sum of integers

    console.log(`the odd array gives the largest sum`);
    console.log(
      `with a combination of ${oddArray} you get the sum ${oddCounter}`
    );
  }

  //O(n)
}

NonAdjecentArray(array);
