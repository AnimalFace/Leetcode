/**
 * @param {number[]} nums
 * @return {number[]}
 */
function decompressRLElist(nums) {
    const newArray= [];
    for ( i = 0; i < nums.length; i+=2) {
     for ( j = 0; j < nums[i]; j++) {
         newArray.push(nums[i+1]);
     }
    }
    return newArray;
}