/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    arr.sort((a, b) => a - b);
    const uni = new Set();
    let count = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1])count++
        else {
            if (uni.has(count))return false;
            uni.add(count);
            count = 1;
        }
    }
    return !uni.has(count);
};
