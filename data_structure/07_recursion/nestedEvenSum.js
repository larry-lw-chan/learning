function nestedEvenSum (obj) {
    // add whatever parameters you deem necessary - good luck!
    let sum = 0;

    function helper(helperInput) {
        for (let key in helperInput) {
            if (typeof helperInput[key] === "number") {
                if (helperInput[key] % 2 === 0) {
                    sum += helperInput[key];
                }
            }
            else if (typeof helperInput[key] === "object") {
                helper(helperInput[key]);
            }
        }
    }

    helper(obj);
    return sum;
  }
  
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  console.log(nestedEvenSum(obj1)); // 6
  console.log(nestedEvenSum(obj2)); // 10