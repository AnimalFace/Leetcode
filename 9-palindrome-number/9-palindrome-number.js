/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //turn number to string for traversal
    let xString = x.toString();
    //set up a rear pointer start place to loop from back to front
    let j = xString.length - 1;
    //set up a for loop with index going from front to back while rear pointer goes other way
    for (let i = 0; i < xString.length; i++) {
        // if the pointers pass each other
        if (j < i) {
            return true;
        }
        // pointer labels
        let front = xString[i];
        let back = xString[j];
        //comparing pointers
        if (i === j) {
            return true;
        } else if (front !== back) {
            return false;
        }
        j--;
    }
    
};