function fibonacci(n) {
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }

    return fib;
}

console.log(fibonacci(5));

// Big O -> O(n)  -> Linear time complexity