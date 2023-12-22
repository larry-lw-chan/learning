function sameFrequency(num1, num2) {
    // Convert numbers into iterable strings
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