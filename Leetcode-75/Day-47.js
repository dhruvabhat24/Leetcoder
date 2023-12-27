/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const m = maze.length;
    const n = maze[0].length;
    let result = 100001; // store edge result;
    const source = entrance.join("-");
    const minimumPath = {[source]: 0};
    const queue = [source];
    while (queue.length > 0) {
      const [_x, _y] = queue[0].split("-");
      const x = Number(_x);
      const y = Number(_y);
      let len = minimumPath[`${x}-${y}`];
      let len2;
      if (maze[x][y] === "." && (x === 0 || y === 0 || x === m -1 || y === n - 1) && `${x}-${y}` !== source) {
        len2 = minimumPath[`${x}-${y}`]
        if (!isNaN(len2) && (len2 < result || isNaN(result))) {
          result = len2;
        }
      }
      if (x > 0 && maze[x - 1][y] === ".") {
        len2 = minimumPath[`${x - 1}-${y}`];
        if ((!isNaN(len2) && len2 > len + 1) || isNaN(len2)) {
          minimumPath[`${x - 1}-${y}`] = len + 1;
          queue.push(`${x - 1}-${y}`);
        }
      }
      if (x < m - 1 && maze[x + 1][y] === ".") {
        len2 = minimumPath[`${x + 1}-${y}`];
        if (!isNaN(len2) && len2 > len + 1  || isNaN(len2)) {
          minimumPath[`${x + 1}-${y}`] = len + 1;
          queue.push(`${x + 1}-${y}`);
        }
      } 
      if (y > 0 && maze[x][y - 1] === ".") {
        len2 = minimumPath[`${x}-${y - 1}`];
        if (!isNaN(len2) && len2 > len + 1  || isNaN(len2)) {
          minimumPath[`${x}-${y - 1}`] = len + 1;
          queue.push(`${x}-${y - 1}`);
        }
      }
      if (y < n - 1 && maze[x][y + 1] === ".") {
        len2 = minimumPath[`${x}-${y + 1}`];
        if (!isNaN(len2) && len2 > len + 1  || isNaN(len2)) {
          minimumPath[`${x}-${y + 1}`] = len + 1;
          queue.push(`${x}-${y + 1}`);
        }
      }
      queue.shift();
    }
    return result === 100001 || result === 0 ? -1 : result;
};
