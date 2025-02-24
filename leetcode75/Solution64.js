/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let arr = new Array(m).fill().map(() => Array(n).fill(0));
    arr[0][0] = 1;
    for (let i=0; i<m; i++) {
        for (let x=0; x<n; x++) {
            if (i+1 < m) {
                arr[i+1][x] += arr[i][x];
            }
            if (x+1 < n) {
                arr[i][x+1] += arr[i][x];
            }
        }
    }
    return arr[m-1][n-1];
};
