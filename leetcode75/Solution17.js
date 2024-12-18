/**

The longestSubarray function calculates the length of the longest subarray of 1's that can be formed after removing one element (0 or 1) from the binary array nums. 
It uses a sliding window technique to efficiently solve the problem.

Here’s how it works:

It initializes left (the start of the window),
count0 (to count zeros in the current window), 
and i (current position in the array).
It iterates through the array using a loop. For every element in nums:
If the element is 0, it increases count0.
If count0 exceeds 1 (meaning there are more than one 0 in the window), 
it shrinks the window from the left (left++) until count0 becomes 1 again.
The result is calculated as the size of the window (i - left - 1), ensuring the "one deletion" constraint is respected.

Walkthrough:
Example 1:
nums = [1,1,0,1]

At i = 0, 1: No zeros encountered, window expands.
At i = 2: A 0 is encountered, count0 = 1.
At i = 3: Another 1, window remains valid. Result: 3.
Example 2:
nums = [0,1,1,1,0,1,1,0,1]

At i = 4: Second 0 encountered, count0 = 2. Shrink the window (left moves) until count0 = 1. Result: 5.
Example 3:
nums = [1,1,1]

Must delete one element. The result is 2.

 */
var longestSubarray = function(nums) {
    const n = nums.length;  
    let left = 0;  
    let count0 = 0;  
    let i = 0;
    
    for (i = 0; i < n; i++) {
        if (nums[i] === 0) count0++;
        if (count0 > 1) {
            if (nums[left++] === 0) {
                count0--;
            }
        }
    }
    return i - left - 1;
};
