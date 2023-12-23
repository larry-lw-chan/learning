// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:

// Time: O(N)
// Sample Input:
function sameFrequency(num1, num2) {
    // Convert numbers into ierable strings
    let num1_str = num1.toString();
    let num2_str = num2.toString();
    
    // Rule out edge cases like num1.length !== num2.length
    if (num1_str.length !== num2_str.length) return false;

    // Create lookup table (frequency counter)
    let lookup = {};

    // Fill lookup table with char in num1_str.  
    for (let char of num1_str) {
        (lookup[char]) ? lookup[char] += 1 : lookup[char] = 1;
    }
    
    // Now we iterate char in num2_str
    for (let char of num2_str) {
        // If lookup[char] not found, we return false
        if (lookup[char] === undefined) return false;

        // Each iteration, we minus one char from lookup[char]
        lookup[char] -= 1;

        // If lookup[char] shows negative value, we return False 
        if (lookup[char] < 0) return false;
    }

    // Everything matches so we return true
    return true;
}





console.log(sameFrequency(182,281)); // true
console.log(sameFrequency(34,14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22,222)); // false
