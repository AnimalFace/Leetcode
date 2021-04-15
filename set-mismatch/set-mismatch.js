/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
let numbers = {};
let results = [null, null];
for (let i = 0; i < nums.length; i ++) {
    let currentNum = nums[i];
    if (numbers[currentNum]) {
        numbers[currentNum] += 1;
    }
    if (!numbers[currentNum]) {
        numbers[currentNum] = 1;
    }
}
for (let i = 1; i <= nums.length; i++) {
    if (!numbers[i]) {
        results[1] = i;
    }
    if (numbers[i] === 2) {
        results[0] = i;
    }
}
    return results;
};