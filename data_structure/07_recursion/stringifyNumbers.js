function stringifyNumbers(obj) {
    let newObj = {};
    Object.assign(newObj, obj);
    for (let key in newObj) {
        if (typeof newObj[key] === "number") {
            newObj[key] = newObj[key].toString();
        }

        else if (typeof newObj[key] === "object") {
            newObj[key] = stringifyNumbers(newObj[key]);
        }
    }
    return newObj;
}



let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));


/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/