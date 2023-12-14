function countUniqueValues(arr) {
    // Handle edge cases 0 and 1
    if (arr.length === 0) return 0;
    if (arr.length === 1) return 1;

    // Set left right pointers
    let left = 0;
    let right = 1;

    let uniqueValue = 1;
    while (right < arr.length) {
        let num1 = arr[left];
        let num2 = arr[right];

        // if number is the same, right add 1
        if (num1 === num2) { right++; }
        // if number different, 
        else {
            // add 1 to unique value, 
            uniqueValue += 1;
            // set left to right
            left = right;
            // right add 1
            right = left + 1;
        }
    }
    return uniqueValue;
}

let arr = [1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 6, 7 , 800];
console.log(countUniqueValues(arr));
