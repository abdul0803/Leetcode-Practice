/*The goal of the code is to find the distinct elements in each of two arrays, 
nums1 and nums2, that are not present in the other array. 
The solution uses JavaScript Set objects to efficiently 
handle duplicate values and check for intersections between the two arrays.


How to Solve:
Convert Arrays to Sets

The arrays nums1 and nums2 are converted to Set objects, h1 and h2, respectively. 
This ensures only unique values are stored, making it easier to check for overlaps.
Remove Common Elements:

Iterate through each element of nums2. If an element exists in both h1 and h2, remove it from both sets. 
This step ensures that only unique elements (present in one array but not the other) remain in each set.
Convert Sets Back to Arrays:

Convert the Set objects h1 and h2 back to arrays using Array.from() and return them in a 2D array.


Input: nums1 = [1, 2, 3], nums2 = [2, 4, 6]
Convert Arrays to Sets:

h1 = {1, 2, 3}
h2 = {2, 4, 6}
Remove Common Elements:

Check elements of nums2:
2 exists in both h1 and h2. Remove it:
h1 = {1, 3}
h2 = {4, 6}
Convert Sets to Arrays and Return:

Array.from(h1) = [1, 3]
Array.from(h2) = [4, 6]
Result: [[1, 3], [4, 6]]
Input: nums1 = [1, 2, 3, 3], nums2 = [1, 1, 2, 2]
Convert Arrays to Sets:

h1 = {1, 2, 3}
h2 = {1, 2}
Remove Common Elements:

Check elements of nums2:
1 exists in both h1 and h2. Remove it:
h1 = {2, 3}
h2 = {2}
2 exists in both h1 and h2. Remove it:
h1 = {3}
h2 = {}
Convert Sets to Arrays and Return:

Array.from(h1) = [3]
Array.from(h2) = []
Result: [[3], []]

*/


var findDifference = function(nums1, nums2) {
    // Convert nums1 and nums2 to sets to handle unique elements
    const h1 = new Set(nums1);
    const h2 = new Set(nums2);

    // Remove common elements from both sets
    for (let num of nums2) {
        if (h1.has(num)) {  // If num exists in both sets
            h1.delete(num); // Remove it from h1
            h2.delete(num); // Remove it from h2
        }
    }

    // Convert the remaining elements of each set to arrays
    return [Array.from(h1), Array.from(h2)];
};


