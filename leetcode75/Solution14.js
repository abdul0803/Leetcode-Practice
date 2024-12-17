/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let avr = -Infinity;
    let windowSum = 0;
    let windowStart = 0;
    
    for(let windowEnd = 0; windowEnd < nums.length; windowEnd++){
         windowSum += nums[windowEnd];
        
        if((windowEnd - windowStart) + 1 === k){
             avr = Math.max(avr, windowSum/k);
            windowSum -= nums[windowStart];
            windowStart += 1;
        }       
    }
    
    return avr;
};
