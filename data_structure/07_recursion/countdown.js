function countdown(n) {
    if (n > 0) {
        console.log(n);
        countdown(n - 1);
    }
}

countdown(10);