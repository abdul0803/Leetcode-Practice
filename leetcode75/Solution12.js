/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const maxPossibleHeight = 10000;
    let maxResult = 0;
    let i = 0;
    let j = height.length - 1;
    let minHeight = 0;
    do {
        const distance = j - i;
        if (distance * maxPossibleHeight < maxResult) {
            return maxResult;
        }
        if (height[i] < height[j]) {
            minHeight = height[i];
            i += 1;
        } else {
            minHeight = height[j];
            j -= 1;
        }
        const area = minHeight * distance;
        if (area > maxResult) {
            maxResult = area;
        }
    } while (i !== j);
    return maxResult;
};
