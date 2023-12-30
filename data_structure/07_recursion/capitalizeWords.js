function capitalizeWords(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length <= 0) {
            return;
        }
        else {
            let word = helperInput[0].toUpperCase();
            result.push(word);
        }
        helper(helperInput.slice(1));
    }
    
    helper(arr);
    return result;    
}

  
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']