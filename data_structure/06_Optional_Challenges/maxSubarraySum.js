// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, 
// which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first 
// example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

function maxSubarraySum(arr, length){
    // Remove Edge Cases
    if (arr.length < length) return null;

    // Find Initial Sum
    let maxSum = 0;
    for (let i = 0; i < length; i++) { maxSum += arr[i]; }

    let tempSum = maxSum;

    for (let i = 1; i < arr.length - (length - 1); i++) {
        let left = i - 1;
        let right = i + length - 1;

        // We minus left and add right
        tempSum = tempSum - arr[left] + arr[right];

        // If new sum greater than max, then replace maxsum
        if (tempSum > maxSum) maxSum = tempSum;
    }

    return maxSum;
}


console.log(maxSubarraySum([100,200,300,400], 2)); // 700
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)); // 39 
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); // 5
console.log(maxSubarraySum([2,3], 3));  // null