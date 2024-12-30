/**
The equalPairs function determines the number of equal row-column pairs in a square grid (n x n matrix). A row and a column are considered equal if their elements match in the same order.

Explanation:
Row Encoding: The function uses a Map to store the frequency of each row in the grid. Each row is serialized using JSON.stringify to create a unique string representation, making it easy to compare rows with columns later.
Column Matching: For each column in the grid, the function constructs its serialized string representation by iterating through the rows and extracting the column elements. It then checks if this serialized column exists in the Map of rows. If it does, the corresponding frequency is added to a counter.
Result: The function returns the total count of matching row-column pairs.
Walkthrough:
Example 1:
grid = [[3,2,1], [1,7,6], [2,7,7]]

Rows serialized:
Row 0: [3,2,1]
Row 1: [1,7,6]
Row 2: [2,7,7]
Map: { "[3,2,1]": 1, "[1,7,6]": 1, "[2,7,7]": 1 }
Columns serialized:
Column 0: [3,1,2] → No match.
Column 1: [2,7,7] → Matches Row 2.
Column 2: [1,6,7] → No match.
Total matches: 1.
Example 2:
grid = [[3,1,2,2], [1,4,4,5], [2,4,2,2], [2,4,2,2]]

Rows serialized:
Row 0: [3,1,2,2]
Row 1: [1,4,4,5]
Row 2: [2,4,2,2]
Row 3: [2,4,2,2]
Map: { "[3,1,2,2]": 1, "[1,4,4,5]": 1, "[2,4,2,2]": 2 }
Columns serialized:
Column 0: [3,1,2,2] → Matches Row 0.
Column 1: [1,4,4,4] → No match.
Column 2: [2,4,2,2] → Matches Row 2 and Row 3.
Column 3: [2,5,2,2] → No match.
Total matches: 3.

 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const n = grid.length; // Get the size of the grid (n x n)
    let count = 0; // Initialize counter for matching row-column pairs
    const rows = new Map(); // Map to store row frequencies

    // Serialize each row and count its frequency
    for (let r = 0; r < n; r++) {
        const row = JSON.stringify(grid[r]); // Convert row to a string
        rows.set(row, 1 + (rows.get(row) || 0)); // Increment frequency in the Map
    }

    // Serialize each column and check for matches in the row Map
    for (let c = 0; c < n; c++) {
        const col = JSON.stringify(grid.map(row => row[c])); // Construct column as a string
        count += (rows.get(col) || 0); // Add frequency if the column matches a row
    }

    return count; // Return total count of matching row-column pairs
};
