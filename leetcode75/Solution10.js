/*
The gcdOfStrings function finds the largest string x that can divide both str1 and str2 by checking if x can repeat to form both strings.
First, it checks if str1 + str2 equals str2 + str1. 
If not, there’s no common pattern, so it returns an empty string. 
If str1 and str2 are equal, it returns str1 as the GCD.

Otherwise, the function uses recursion: if str1 is longer, 
it trims str1 by removing the prefix matching str2’s length and calls itself again. 
If str2 is longer, it trims str2 similarly. 
This process continues until both strings match, returning the largest string that divides them.

Walkthrough:
Example 1:
str1 = "ABCABC", str2 = "ABC"

Check str1 + str2 ("ABCABCABC") == str2 + str1 ("ABCABCABC") → True.
str1 is longer than str2, so shorten str1 to "ABC" and call the function again.
Now str1 == str2, so return "ABC".

Example 2:
str1 = "ABABAB", str2 = "ABAB"

Check str1 + str2 == str2 + str1 → True.
str1 is longer than str2, so shorten str1 to "ABAB" and call the function again.
Now str1 == str2, so return "AB".

Example 3:
str1 = "LEET", str2 = "CODE"

Check str1 + str2 == str2 + str1 → False.
Return "" since there is no common divisor.

 */
var moveZeroes = function(nums) {
    let low = 0;
    let high = low + 1;

    while (high <= nums.length - 1) {
        if (nums[low] !== 0) {
            low++;
            high++;
        } else {
            if (nums[high] !== 0) {
                [nums[low], nums[high]] = [nums[high], nums[low]];
                low++;
            }
            high++;
        }
    }

};
