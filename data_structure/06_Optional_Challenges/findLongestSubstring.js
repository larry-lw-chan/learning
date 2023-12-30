// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string 
// and returns the length of the longest substring with all distinct characters.

// Time Complexity - O(n)

function findLongestSubstring(str) {
    // Handle Edge Cases
    if (str.length == 0) return 0;
    if (str.length == 1) return 1;

    // Start algorithm here
    let longest = 1;
    let temp = 1;
    
    let start = 0;
    let end = start + 1;

    // Initialize Lookup table
    let lookup = {};
    lookup[str[start]] = 1;

    // Do While Loop
    while (start < str.length) {
        // console.log(`temp=${temp}; longest=${longest}; start=${str[start]}; end=${str[end]};`);

        // If str[end] not in look up table...
        if (lookup[str[end]] !== 1 && end < str.length) {
            lookup[str[end]] = 1;
            temp += 1;
            longest = Math.max(temp, longest);
            end++;
        }

        // Add one to start and reinitialize everything based on new starting point
        else {
            // We add one to start
            start++;

            // Reinitialize everything based on new starting point
            end = start + 1;
            temp = 1;
            lookup = {};
            lookup[str[start]] = 1;
        }
    }
    // console.log(longest);
    return longest;
}



console.log(findLongestSubstring('')); // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6