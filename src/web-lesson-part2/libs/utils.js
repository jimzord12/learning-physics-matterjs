/**
 * Removes all occurrences of a specified value from an array by mutating the original array.
 *
 * @template T
 * @param {T[]} arr - The array to mutate.
 * @param {T} value - The value to remove from the array.
 * @returns {void}
 */
function removeFromArray(arr, value) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value) {
      arr.splice(i, 1); // Mutates the array in place
    }
  }
}
