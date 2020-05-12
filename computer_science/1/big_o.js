var assert = require('assert');
var utils = require('../utils');


function crossAdd(input_vals) {
    /* Traverses <input_vals> from both directions, adding the ith element to the (n-i)th, and storing
    the result in the ith element of <result>.

        Examples:
            [1, 2, 3] -> [4, 4, 4] 
            [3, 4, 7, 13] -> [16, 11, 11, 16]

        Complexity: O(n)
    */
    let result = [];
    
    for (let i = 0; i < input_vals.length; i++) {
        new_result = input_vals[i] + input_vals[input_vals.length - i - 1];
        result.push(new_result);
    }

    return result;
}


function find(needle, haystack) {
    /* Returns true if needle is an element of haystack, otherwise returns false.

        Examples:
            (1, [1, 2, 3]) -> true
            (4, [5, 6, 7]) -> false
        
        Complexity: O(n)
    */
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            return true;
        }
    }

    return false;
}


function makeTuples(input_vals) {
    /* Computes the Cartesian product of <input_vals> with itself

        Example:
            [1, 2] -> [[1, 1], [1, 2], [2, 1], [2, 2]]
        
        Complexity: O(n^2)
    */
    let result = [];

    for (let i = 0; i < input_vals.length; i++) {
        for (let j = 0; j < input_vals.length; j++) {
            let new_tuple = [input_vals[i], input_vals[j]];
            result.push(new_tuple);
        }
    }

    return result;
}


if (require.main === module) {
    assert(utils.arraysEqual(crossAdd([1, 2, 3]), [4, 4, 4]));
    assert(utils.arraysEqual(crossAdd([3, 4, 7, 13]), [16, 11, 11, 16]));

    assert(find(1, [1, 2, 3]) === true);
    assert(find(4, [5, 6, 7]) === false);

    assert(utils.arraysEqual(makeTuples([1, 2]), [[1, 1], [1, 2], [2, 1], [2, 2]]));
}
