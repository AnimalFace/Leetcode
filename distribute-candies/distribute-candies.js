/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let separatedCandies = {};
    for (let i = 0; i < candyType.length; i++) {
        let currentCandy = candyType[i];
        if (separatedCandies[currentCandy] === undefined) {
            separatedCandies[currentCandy] = 1;
            continue;
        }
        separatedCandies[currentCandy] += 1;
    }
    let numberOfCandyTypes = Object.keys(separatedCandies).length;
    if (numberOfCandyTypes >= candyType.length / 2) {
        return candyType.length / 2
    }
    return numberOfCandyTypes;
    
};