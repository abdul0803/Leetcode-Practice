/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const nearestExit = function(maze, entrance) {
    const mazeWidth = maze.length;
    const mazeHeight = maze[0].length;
    let hasCheckedEntranceCell = false;
    let stepsCounter = 0;

    const queue = [{ x: entrance[0], y: entrance[1] }];
    
    while (queue.length > 0) {
        const l = queue.length;

        for (let i = 0; i < l ; i++) {
            const position = queue.shift();
            
            if (maze[position.x][position.y] === '.') {
                maze[position.x][position.y] = 'x'; 

                if (hasCheckedEntranceCell && (
                    position.x === 0 ||
                    position.y === 0 ||
                    position.x === mazeWidth -1 ||
                    position.y === mazeHeight -1)) {
                    return stepsCounter;
                }

                hasCheckedEntranceCell = true;

                if (position.x + 1 < mazeWidth) queue.push({ x: position.x + 1, y: position.y });
                if (position.y + 1 < mazeHeight) queue.push({ x: position.x, y: position.y + 1 });
                if (position.x - 1 >= 0) queue.push({ x: position.x - 1, y: position.y });
                if (position.y - 1 >= 0) queue.push({ x: position.x, y: position.y - 1 });
            }
        }
        
        stepsCounter++;
    }

    
    return -1;
};
