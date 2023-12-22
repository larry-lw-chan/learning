// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks 
// whether the characters in the first string form a subsequence of the characters 
// in the second string. In other words, the function should check whether the 
// characters in the first string appear somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    let pt1 = 0;
    let pt2 = 0;

    // Exit loop if either str1 or str2 characters are exhausted
    while (pt2 < str2.length) {
        if (str1[pt1] === str2[pt2]) pt1++;
        if (pt1 === str1.length) return true;
        pt2++;
    }

    // If not all characters in str1 identified, then return false
    return false;
}


console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
