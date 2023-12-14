function sumzero(list) {
    // iterate through list
    for (let i = 0; i < list.length; i++) {
        let num1 = list[i];

        for (let j = i + 1; j < list.length; j++) {
            let num2 = list[j];
            if (num1 + num2 === 0) {
                return [num1, num2];
            }
        }
    }

    // Return false if no sum zero found
    return undefined;
}

let list = [-3, -2, -1, 0, 1, 2, 3];
console.log(sumzero(list));

// Use the two pointer pattern for efficient solution
function sumzero2(list) {
    let left = 0;
    let right = list.length - 1;

    while (left < right) {
        let sum = list[left] + list[right];
        // If left + right is bigger than 0, we lower right by 1
        if (sum > 0) {
            right--;
        } 
        // If left + right is smaller than 0, we increate left by 1
        else if (sum < 0) {
            left++;
        }
        // If sum is zero, return the correct two numbers
        else {
            return [list[left], list[right]];
        }
    }
    // No zerosum found
    return undefined;
}

let list2 = [-3, -2, -1, 0, 1, 2, 3];
console.log(sumzero2(list2));