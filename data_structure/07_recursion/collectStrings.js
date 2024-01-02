function collectStrings(obj) {
  let result = [];

  function helper(helperObj) {
    for (let key in helperObj) {
      if (typeof helperObj[key] === "string") {
        result.push(helperObj[key]);
      } else if (typeof helperObj[key] === "object") {
        helper(helperObj[key]);
      }
    }
  }
  helper(obj);

  return result;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
