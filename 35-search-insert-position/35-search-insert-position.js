/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i ++) {
        let current = nums[i];
        let next = nums[i + 1];
        if (target < nums[0]) {
            return 0;
        } else if (target === current) {
            return i;
        } else if (target < next) {
            return i + 1; 
        } else if (next === undefined) {
            return nums.length;
        }
    }
    
};