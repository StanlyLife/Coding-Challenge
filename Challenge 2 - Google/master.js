/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

*/

const array = [10, 15, 3, 7];
const k = 17;

const array2 = [35, 31, 71, 5, 32, 12, 18, 15];
const k2 = 47;

function calculat(k, arr) {
  body = document.querySelector("body");
  division = document.createElement("div");
  division.classList.add("division");
  const answers = [];
  arr.forEach((intOne) => {
    arr.forEach((intTwo) => {
      if (
        intOne + intTwo == k &&
        /* this line may be excluded as it is questionable for larger arrays */
        !answers.includes(intOne) &&
        !answers.includes(intTwo)
      ) {
        answers.push(intOne, intTwo);
        answer = document.createElement("div");
        answer.classList.add("answer");
        answer.innerText = `${intOne} + ${intTwo} = ${k}`;
        division.appendChild(answer);
      }
    });
  });
  body.appendChild(division);
  body.appendChild(document.createElement("hr"));
}

calculat(k, array);
calculat(k2, array2);
