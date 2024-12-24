/*
The uniqueOccurrences function checks if the number of times each value appears in the array arr is unique. 
If no two values in the array share the same frequency, the function returns true. Otherwise, it returns false.

Sorting: The array is sorted so that identical elements are grouped together, making it easy to count their occurrences.
Counting Frequencies: A loop iterates through the array to count the occurrences of each number. 
A counter (count) is incremented for consecutive identical numbers.
Storing Frequencies: When the value changes (i.e., the current number is different from the previous one), 
the function checks if the current frequency (count) is already in a Set (uni). 
If it is, this means the frequency is not unique, so the function returns false. 
Otherwise, the frequency is added to the set, and the counter is reset.
Final Check: After the loop, the function performs a final check for the last frequency count and ensures it is not already in the set.
Return Result: If all frequencies are unique, the function returns true.

Walkthrough:

Example 1:
arr = [1,2,2,1,1,3]

Sorted: [1,1,1,2,2,3].
Frequencies: 1 → 3 times, 2 → 2 times, 3 → 1 time.
All frequencies (3, 2, 1) are unique.
Result: true.
Example 2:
arr = [1,2]

Sorted: [1,2].
Frequencies: 1 → 1 time, 2 → 1 time.
Frequencies are not unique.
Result: false.
Example 3:
arr = [-3,0,1,-3,1,1,1,-3,10,0]

Sorted: [-3,-3,-3,0,0,1,1,1,1,10].
Frequencies: -3 → 3 times, 0 → 2 times, 1 → 4 times, 10 → 1 time.
All frequencies (3, 2, 4, 1) are unique.
Result: true.
 */

var uniqueOccurrences = function(arr) {
    arr.sort((a, b) => a - b); // Sort the array to group identical elements together
    const uni = new Set(); // Set to store unique frequency counts
    let count = 1; // Counter to track occurrences of the current number

    // Loop through the array to count occurrences
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count++; // Increment count if the current number matches the previous one
        } else {
            if (uni.has(count)) return false; // If count is already in the set, return false
            uni.add(count); // Add the count to the set
            count = 1; // Reset count for the next number
        }
    }

    // Final check for the last count
    return !uni.has(count); // Return true if all counts are unique
};
