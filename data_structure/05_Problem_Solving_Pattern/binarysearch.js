function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        // if arr[middle] smaller than val, update min to middle
        if (arr[middle] < val) {
            min = middle + 1;
        }
        // if arr[middle] bigger than val, update min to middle
        else if (arr[middle] > val) {
            max = middle - 1;
        }
        // if arr[middle] matches val, return middle
        else {
            return middle;
        }
    }
    // Return -1 if none found
    return -1;
}

let arr1 = [1,2,3,4,5,6,7,8,9,10];
console.log(search(arr1, 9));