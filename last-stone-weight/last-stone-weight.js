/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let first;
    let second;
   
    stones = stones.sort((a, b) => b - a);
   
    while (stones.length > 1){
        first = stones.shift();
        second = stones.shift();
       
        if (first - second !== 0) {
            stones.push(Math.abs(first - second));
            stones = stones.sort((a, b) => b - a);
        }
    }
   
    return stones
};