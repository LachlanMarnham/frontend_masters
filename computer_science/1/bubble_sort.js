var utils = require('../utils');
var assert = require('assert');


function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i <= n - 1; i++) {
        for (let j = 0; j <= n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let dummy = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = dummy;
            }
        }
    }
    return arr;
}


if (require.main === module) {
    assert(utils.arraysEqual(bubbleSort([3, 2, 5, 1, 9, 9]), [1, 2, 3, 5, 9, 9]));
    assert(utils.arraysEqual(bubbleSort([5, 4, 3, 0, -1]), [-1, 0, 3, 4, 5]));
    assert(utils.arraysEqual(bubbleSort([5, 5, 5, 5, 5, 5]), [5, 5, 5, 5, 5, 5]));
}
