/*
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space.
In other words, find the lowest positive integer that does not exist in the array.
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

/*
1. find the the first missing positive number between 1 and array.length + 1
*/

array1 = [1, 2, 3, 4];
array2 = [3, 4, 1, 2];
array3 = [1, 2, 0, 2];
array4 = [3, 4, -1, 1];
array5 = [1, 2, 0];

function finder(array) {
  const set = new Set(array);
  let arr = Array.from(new Set(array));
  arr.sort();
  let index =
    arr.indexOf(1) !== -1 ? arr.indexOf(1) : console.log("does not exist");

  let previousNum = 1;
  for (index; index < arr.length + 1; index++) {
    if (previousNum !== arr[index]) {
      break;
    }
    previousNum++;
  }
  return [previousNum, array];
}

console.log(`array1, missing number:  ${finder(array1)[0]}`);
console.log(`array2, missing number:  ${finder(array2)[0]}`);
console.log(`array3, missing number:  ${finder(array3)[0]}`);
console.log(`array4, missing number:  ${finder(array4)[0]}`);
console.log(`array5, missing number:  ${finder(array5)[0]}`);

function createVisuals(arrayAndAnswer) {
  const answer = arrayAndAnswer[0];
  const array = arrayAndAnswer[1];

  body = document.querySelector("body");
  division = document.createElement("div");
  divisionAnswer = document.createElement("div");
  divisionArray = document.createElement("div");
  divisionAnswer.classList.add("answer");
  divisionArray.classList.add("array");
  division.classList.add("container");

  divisionAnswer.innerText = answer;
  divisionArray.innerText = array;
  division.appendChild(divisionArray);
  division.appendChild(divisionAnswer);
  body.appendChild(division);
}

createVisuals(finder(array1));
createVisuals(finder(array2));
createVisuals(finder(array3));
createVisuals(finder(array4));
createVisuals(finder(array5));
