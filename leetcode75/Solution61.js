/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }

    let prevPrev = nums[0];
    let prev = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; ++i) {
        let current = Math.max(prevPrev + nums[i], prev);
        prevPrev = prev;
        prev = current;
    }

    return prev;
};
