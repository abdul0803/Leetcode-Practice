/**
The code aims to find the pivot index of an array. 
The pivot index is the position where the sum of the elements to the left of the index is equal to the sum of the elements to the right of it.

to solve this we need to Calculate Total Sum:

The function findSum computes the sum of all elements in the array.
Iterate Through the Array:

As we traverse the array, maintain a running total for the left sum.
Compute the right sum dynamically by subtracting the current element and the left sum from the total sum.
Check the Pivot Condition:

If the left sum equals the right sum, the current index is the pivot, and it’s returned.
Edge Cases:

If no such index exists after traversing the array, return -1.
Walkthrough
Input: nums = [1, 7, 3, 6, 5, 6]
Calculate Total Sum:

findSum(nums) computes 1 + 7 + 3 + 6 + 5 + 6 = 28.
Initialize Left Sum:

Start with leftSum = 0.
Iterate Through the Array:

Index 0:
rightSum = 28 - 0 - 1 = 27
leftSum ≠ rightSum, so move to the next index.
Update leftSum = leftSum + nums[0] = 0 + 1 = 1.
Index 1:
rightSum = 28 - 1 - 7 = 20
leftSum ≠ rightSum, so move to the next index.
Update leftSum = 1 + 7 = 8.
Index 2:
rightSum = 28 - 8 - 3 = 17
leftSum ≠ rightSum, so move to the next index.
Update leftSum = 8 + 3 = 11.
Index 3:
rightSum = 28 - 11 - 6 = 11
leftSum = rightSum, so return index 3.
Output:

The pivot index is 3.

 
 
 
 */

var pivotIndex = function(nums) {
   // Calculate the total sum of the array
   let totalSum = findSum(nums);
   
   // Initialize left sum as 0
   let leftSum = 0;
   
   // Traverse through the array
   for (let i = 0; i < nums.length; i++) {
       // Calculate the right sum dynamically
       let rightSum = totalSum - leftSum - nums[i];
       
       // Check if left sum equals right sum
       if (rightSum === leftSum) {
           return i; // Return the current index as pivot
       }
       
       // Update left sum with the current element
       leftSum += nums[i];
   }
   
   // If no pivot index is found, return -1
   return -1;
};

// Helper function to compute the sum of an array
function findSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum; // Return the total sum
}
