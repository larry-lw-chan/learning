function capitalizeFirst(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length <= 0) {
            return;
        }
        else {
            let word = helperInput[0];
            word = word.charAt(0).toUpperCase() + word.slice(1);
            result.push(word);
        }
        helper(helperInput.slice(1));
    }
    
    helper(arr);
    return result;
}

console.log(capitalizeFirst(['car','taco','banana']));
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
  