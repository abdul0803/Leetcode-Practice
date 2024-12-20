/*The largestAltitude function calculates the highest altitude a biker reaches during a trip. 
The biker starts at altitude 0, and the array gain represents the altitude changes between consecutive points. 
The function keeps track of the current altitude (alt) as it iterates through gain, storing each intermediate altitude in an array temp. 
Finally, it calculates and returns the highest altitude using Math.max.

Walkthrough:
Example 1:
gain = [-5,1,5,0,-7]

Start at alt = 0.
Altitude changes:
0 → -5 → -4 → 1 → 1 → -6
Store these values in temp = [0, -5, -4, 1, 1, -6].
The highest altitude is Math.max(0, -5, -4, 1, 1, -6) = 1.
Example 2:
gain = [-4,-3,-2,-1,4,3,2]

Start at alt = 0.
Altitude changes:
0 → -4 → -7 → -9 → -10 → -6 → -3 → -1
Store these values in temp = [0, -4, -7, -9, -10, -6, -3, -1].
The highest altitude is Math.max(0, -4, -7, -9, -10, -6, -3, -1) = 0.
->
*/
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const temp = [0]; //  starting altitude of 0
    let alt = 0; // track the current altitude
    
    // Loop through the gain array to calculate altitudes at each point
    for (let i = 0; i < gain.length; i++) {
        alt += gain[i]; // Add the altitude gain/loss at each step
        temp.push(alt); // Store the current altitude in the temp array
    }
    
    // Return the maximum altitude found in the temp array
    return Math.max(...temp);
};
