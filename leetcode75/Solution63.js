
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let totalSteps = m + n - 2; 
    let downSteps = m - 1;     

    let result = 1;
    for (let i = 1; i <= downSteps; i++) {
        result = result * (totalSteps - downSteps + i) / i;
    }

    return Math.round(result);
};
