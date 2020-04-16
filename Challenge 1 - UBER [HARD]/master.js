/*
 Given an array of integers,
 return a new array such that each element at index i of the new array is the product
 of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
 
 */

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 2, 1];
const array3 = [7, 14, 21, 28, 35];
const returnArray = [];

function calculate(arr) {
  const returnArray = [];
  for (var i = 0; i < arr.length; i++) {
    pushNumber = 1;

    for (var index = 0; index < arr.length; index++) {
      if (index !== i) {
        pushNumber = pushNumber * arr[index];
      }
    }
    returnArray.push(pushNumber);
  }
  return returnArray;
}

function CreateVisuals(arr) {
  const visuals = document.createElement("div");
  visuals.className = "container";
  arr.forEach((element) => {
    const division = document.createElement("div");
    division.className = "element";
    division.innerText = element;
    visuals.appendChild(division);
  });
  const body = document.querySelector("body");
  body.appendChild(visuals);
}

CreateVisuals(calculate(array1));
CreateVisuals(calculate(array2));
CreateVisuals(calculate(array3));
