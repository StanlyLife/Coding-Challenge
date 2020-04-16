# Problem X

## Difficulty:

#### HARD

---

## About

- This problem was asked by Uber.

  - Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

  For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

  Follow-up: what if you can't use division?

---

## Solution

![solution](http://imageshack.com/a/img923/7164/NIqjwv.png)

- this problem was solved by using nested loops

#### Conclusion

- using nested loops is bad practice in general because it gives a big O notation of O(N \* M)
- in this case the O notation would be O(N^2) because we're iterating over the same array
- at the time i am not sure how to avoid the big o notation.
