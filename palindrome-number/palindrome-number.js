/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let stringX = x.toString();
    let arrayX = stringX.split('');
    let reversedArrayX = (stringX.split('')).reverse();
    for (let i = 0; i < arrayX.length; i ++) {
        let current = arrayX[i];
        let currentReversed = reversedArrayX[i];
        if (current !== currentReversed) {
            return false;
        }
    }
    return true;
};