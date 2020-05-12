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

exports.arraysEqual = arraysEqual;