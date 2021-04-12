/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
        for (j = i + 1; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    arr[i] = arr[j];
                } 
            }

    }
    arr[arr.length - 1] = -1;
                return arr;
};