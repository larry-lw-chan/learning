// Use frequency counter for efficiency

function anagram(word1, word2) {
    // if string length different, then false
    if (word1.length !== word2.length) return false;

    // Make Frequency Counters
    let freqCounter1 = {};
    let freqCounter2 = {};

    for (let letter of word1) {
        freqCounter1[letter] = (freqCounter1[letter] || 0) + 1;
    }

    for (let letter of word2) {
        freqCounter2[letter] = (freqCounter2[letter] || 0) + 1;
    }    

    // Iterate key through Frequency Counter 
    for (let key in freqCounter1) {
        // Return false if key not found in freqCounter2
        if (freqCounter2[key] === undefined) {
            return false;
        }

        // Return false if freqCounter1[key] not match freqCounter2[key]
        if (freqCounter1[key] !== freqCounter2[key]) {
            return false;
        }
    }

    // Return true since everything seems to match
    return true;
}

word1 = "texttwisttime";
word2 = "timetwisttext";
console.log(anagram(word1, word2));


function anagram2(word1, word2) {
    // if string length different, then false
    if (word1.length !== word2.length) return false;    

    // Make lookup Table
    let lookup = {};
    for (let letter of word1) {
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    // Iterate through word2
    for (let letter of word2) {
        // Return false if letter does not exist in lookup 'key'
        if (lookup[letter] === undefined) {
            return false;
        }
        // Return false if letter already zero in lookup table
        if (lookup[letter] === 0) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}


word1 = "texttwisttime";
word2 = "timetwisttext";
console.log(anagram2(word1, word2));
