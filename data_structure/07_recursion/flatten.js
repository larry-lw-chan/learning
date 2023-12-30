function flatten(arr){
    // add whatever parameters you deem necessary - good luck!
    let list = [];
    arr.forEach(ele => {
        if (typeof ele !== 'object') {
            list.push(ele);
        }
        else {
            list.push(...flatten(ele));
        }
    });
    return list;
}
  
console.log(flatten([1, 2, 3, [4, 5] ]));       // [1, 2, 3, 4, 5]);
console.log(flatten([1, [2, [3, 4], [[5]]]]));  // [1, 2, 3, 4, 5]);
console.log(flatten([1, 2, 3, [4, 5] ]));       // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]]));  // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]]));            // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));            // [1,2,3
