// Navive Solution
function maxSubArraySum(arr, num) {
    // Edge Case Handling
    if (arr.length < num) return null;

    let max = -Infinity;
    for (let i = 0; i <= arr.length - num; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
            console.log(arr[i + j]);
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

// let arr1 = [1, 4, 5, 3, 7, 9, 4, 5];
// console.log(maxSubArraySum(arr1, 4));


// Sliding Window Solution
function maxSubArraySum2(arr, num) { 
    // Edge Case Handling
    if (arr.length < num) return null;

    // Add all numbers in array to make maxSum
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    
    // This is the sliding algorithm
    // [1, 4, 5, 3, 7, 9, 4, 5]
    // tempSum = [tempSum(13) - 1 + 7]
    // tempSum = [tempSum(19) - 4 + 9]
    // tempSum = [tempSum(19) - 5 + 4]
    // tempSum = [tempSum(19) - 3 + 5]
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum
}

let arr2 = [1, 4, 5, 3, 7, 9, 4, 5];
console.log(maxSubArraySum2(arr2, 4));
