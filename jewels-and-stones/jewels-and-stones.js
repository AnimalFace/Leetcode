/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let count = 0;
    for (let i = 0; i < S.length; i++) {
        for (let j = 0; j < J.length; j++) {
            if (S[i] === J[j]) {
                count ++;
            }
        }
    }
    return count
};