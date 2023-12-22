// Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in.  You can solve this 
// using the frequency counter pattern OR the multiple pointers pattern.

// Examples:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)

function areThereDuplicates() {
    // Ex
    let left = 0;
    let right = arguments.length - 1;
    
    // We compare left and right
    while (left < right) {
        // If they match, then we return true
        if (arguments[left] === arguments[right]) {
            return true;
        }
        // If left is too small, then left plus 1
        else if (arguments[left] < arguments[right]) {
            left++;
        }
        // If right is too small, then right minus 1
        else {
            right--;
        }
    }
    // If no duplicate found, then return false
    return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));