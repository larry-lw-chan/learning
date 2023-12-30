function fib(nth){
    if(nth <= 2) return 1;
    return fib(nth - 1) + fib(nth - 2);
}

console.log(fib(4));