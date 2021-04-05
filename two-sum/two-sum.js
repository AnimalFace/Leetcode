/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i ++) {
        let pointerOne = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            let pointerTwo = nums[j];
            if (pointerOne + pointerTwo === target) {
                return [i, j];
            }
        }
    }
};