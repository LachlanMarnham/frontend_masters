var assert = require('assert');


function basicRecursion(current, max) {
    /* Uses recursion to print all integers on the interval [current, ceiling]

    Examples:
        (1, 1) -> stdout(1)
        (1, 5) -> stdout(1, 2, 3, 4, 5)
        (1, 0) -> stdout()
    */
    if (current > max) return;

    console.log(current);
    
    basicRecursion(current + 1, max);
}


function fibonacci(n) {
    /*  Calculates the nth Fibonacci number

    Examples:
        1 -> 1
        2 -> 1
        6 -> 8
    */
   if (n <= 2) return 1;

   return fibonacci(n - 1) + fibonacci(n - 2);
}


function factorial(n) {
    /* Computes n!
    
    Examples:
        0 -> 1
        1 -> 1
        5 -> 120
    */
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}


if (require.main === module) {
    basicRecursion(1, 1);  // 1
    basicRecursion(1, 5);  // 1, 2, 3, 4, 5
    basicRecursion(1, 0);  // ...

    assert(fibonacci(1) === 1);
    assert(fibonacci(2) === 1);
    assert(fibonacci(6) === 8);

    assert(factorial(0) === 1);
    assert(factorial(1) === 1);
}
