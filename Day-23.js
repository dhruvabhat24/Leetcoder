/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const rows = grid.map(arr => arr.join())
    const columns = grid[0].map((col, i) => grid.map(row => row[i]).join())
    let count = 0
    for (let row of rows) {
        for (let column of columns) {
            if (row === column) count++
        }
    }
    return count
};
