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


if (require.main === module) {
    basicRecursion(1, 1);  // 1
    basicRecursion(1, 5);  // 1, 2, 3, 4, 5
    basicRecursion(1, 0);  // ...
}
