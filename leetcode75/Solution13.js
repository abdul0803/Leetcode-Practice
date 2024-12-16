/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b);

    let ans = 0;
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        if (nums[start] + nums[end] === k) {
            ans++;
            start++;
            end--;
            continue;
        } 
        nums[start] + nums[end] > k ? end-- : start++;
    }
    return ans;;
};
