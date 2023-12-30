function factorialIter(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total = total * i;
        // console.log(total);
    }
    return total;
}    

console.log(factorialIter(4));


function factorialRec(num) {
    if (num == 1) return 1;
    return num * factorialRec(num - 1);
}

console.log(factorialRec(4));