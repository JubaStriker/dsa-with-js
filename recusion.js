function recursiveFibonacci(n) {
    if (n < 2)
        return n;
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(6));

// Big(O) - 2^n

function recursiveFactorial(n) {
    if (n < 1)
        return 1;
    return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(3));
