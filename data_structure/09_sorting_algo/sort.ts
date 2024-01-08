// O(n**2)
function selectionSorting(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    let temp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

// console.log(selectionSorting([1, 3, 2, 6]));

// Bubble Sort (generally not efficient except for nearly sorted items) O(n**2)
function bubbleSort(arr: number[]): number[] {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i; j++) {
      const idx1 = j;
      const idx2 = j + 1;
      if (arr[idx1] > arr[idx2]) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

function bubbleSort2(arr: number[]): number[] {
  let swapped = false;

  const swap = (arr: number[], idx1: number, idx2: number): void => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  do {
    let swapped = false;
    console.log(arr);
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
// console.log(bubbleSort([29, 10, 14, 30, 37, 14, 18]));
console.log(bubbleSort([9, 1, 2, 3, 4, 5, 6, 7, 8]));
