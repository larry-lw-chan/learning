// Bubble Sort (generally not efficient)
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr) {
  let swapped = false;
  do {
    let swapped = false;
    for (let i = 1; i < arr.length; i++) {
      const idx1 = i - 1;
      const idx2 = i;
      if (arr[idx1] > arr[idx2]) {
        swap(arr, idx1, idx2);
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

console.log(bubbleSort([29, 10, 14, 30, 37, 14, 18]));
