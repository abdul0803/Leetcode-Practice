/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const len = rooms.length;
    const vis = new Array(len).fill(false);
    const dfs = (room) => {
        vis[room] = true;
        for(let key of rooms[room]) {
            if(!vis[key]) dfs(key);
        }
    }
    dfs(0);
    return vis.every(room => room == true);
};
