function isPalindrome(str){
    if (str.length <= 1) return true;
    // add whatever parameters you deem necessary - good luck!
    if (str.slice(0, 1) === str.slice(-1)) {
        return isPalindrome(str.slice(1, -1));
    }
    return false;
}

console.log(isPalindrome('awesome'));    // false
console.log(isPalindrome('foobar'));     // false
console.log(isPalindrome('tacocat'));    // true
console.log(isPalindrome('amanaplanacanalpanama'));  // true
console.log(isPalindrome('amanaplanacanalpandemonium'));   // false
