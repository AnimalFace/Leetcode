/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
 nums.sort();
    for (i = 0; i < nums.length; i += 2) {
        if (nums[i] === nums[i + 1]){
            continue;
        } else {
            return nums.slice(i, i + 1);
        }
    }
};