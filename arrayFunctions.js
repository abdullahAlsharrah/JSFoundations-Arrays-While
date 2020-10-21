/**
 * isArrayLengthOdd(a):
 * - receives array `a`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(a) {
  // Your code here
  const arrayLength = a.length;
  console.log(arrayLength);

  if (arrayLength % 2 !== 0) {
    return true;
  } else {
    return false
  }

}
console.log(isArrayLengthOdd([1, 2, 3 , 4]));

/**
 * isArrayLengthEven(a):
 * - receives array `a`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(a) {
  // Your code here
  const arrayLength = a.length;
  console.log(arrayLength);

  if (arrayLength % 2 === 0) {
    return true;
  } else {
    return false
  }

}

console.log(isArrayLengthEven([1, 2, 3 , 4]));
/**
 * addLailaToArray(a):
 * - receives array `a`
 * - returns a new array that's a copy of array `a` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(a) {
  // Your code here
  console.log(a)
  a.push("Laila");
  return a;
}

console.log(addLailaToArray(["Mashary", "Hassan"]))

/**
 * eliminateTeam(a):
 * - receives array `a`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(a) {
  // Your code here
  console.log(a);
  const lastElement = a.pop();
  return lastElement

}
console.log(eliminateTeam(["Mshary", "Hassan", "Laila"]));

/**
 * secondHalfOfArrayIfItIsEven(a):
 * - receives array `a`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(a) {
  // Your code here
  console.log(a);
  const aLength = a.length;
  if (aLength % 2 ===0) {
    return a.slice(a.length/2)
  } else {
    return [];
  }
}
console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]))

/**
 * youGottaCalmDown(s):
 * - receives a string `s`
 * - returns the string `s` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use string method .slice()
 * - Use string method .endsWith()
 */
function youGottaCalmDown(s) {
  // Your code here
    if (s.endsWith("!")) {
     let i = 0
     while (s[i] !== "!"){
       i ++;
     }
     return s.slice(0, i+1)

    } else {
      return s
    }


}
console.log(youGottaCalmDown("hello!!!!!"));

module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};
