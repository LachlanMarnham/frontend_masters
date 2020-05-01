var assert = require('assert');


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


function arraysEqual(arr_1, arr_2) {
    /* Returns true if all elements in arr_1 are equal to the corresponding (index-wise) element of arr_2.
    Short-circuits if arrays have different lengths. Also works with arrays of arrays. */
    
    if (arr_1.length !== arr_2.length) {
        return false;
    }

    for (let i = 0; i < arr_1.length; i++) {
        let el_1 = arr_1[i];
        let el_2 = arr_2[i];

        if (Array.isArray(el_1) && Array.isArray(el_2)) {
            return arraysEqual(el_1, el_2);
        } else if (el_1 !== el_2) {
            return false;
        }
    }

    return true;
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
    assert(arraysEqual(crossAdd([1, 2, 3]), [4, 4, 4]));
    assert(arraysEqual(crossAdd([3, 4, 7, 13]), [16, 11, 11, 16]));

    assert(find(1, [1, 2, 3]) === true);
    assert(find(4, [5, 6, 7]) === false);

    assert(arraysEqual(makeTuples([1, 2]), [[1, 1], [1, 2], [2, 1], [2, 2]]));
}
