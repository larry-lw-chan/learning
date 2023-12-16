let list1 = [2, 2, 4, 3];
let list2 = [4, 4, 16, 9]

function same(list1, list2) {
    // If the two list have different length, automatically return false
    if (list1.length !== list2.length) return false;

    // Iterate through list 1, 
    for (let num of list1) {
        // Check if any square value of list 2 matches the iteration
        let idx = list2.indexOf(num * num);
        // If one matches, then pop out the matched value and 'continue'
        if (idx !== -1) { 
            list2.splice(idx, 1);
        }
        // If none matches, then return false            
        else {
            return false; 
        }
    }
    // If list1 is done iterating, then assume all values match and return true
    return true;
}

function same_refactor(list1, list2) {
    // If the two list have different length, automatically return false
    if (list1.length !== list2.length) return false;

    // Fill the two frequency counters
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let num of list1) {
        frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
    }

    for (let num of list2) {
        frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        // If square value does not exist in frequency counter 2
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        // If frequency counter 1 num of value does not match fc2 num of values
        if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
            return false;
        }
    }
    return true;
}

// same(list1, list2);
console.log(same_refactor(list1, list2));