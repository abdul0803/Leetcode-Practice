/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const adjList = {}

    for (let c of connections) {
        const [src, dest] = c
        if (!adjList.hasOwnProperty(src)) adjList[src] = []
        if (!adjList.hasOwnProperty(dest)) adjList[dest] = []
        adjList[src].push({
            city: dest,
            distance: 1
        })
        adjList[dest].push({
            city: src,
            distance: 0
        })
    }

    const visited = new Set()
    const queue = []
    queue.push(0)
    let changes = 0

    while (queue.length) {
        const curr = queue.shift()

        if (visited.has(curr)) continue
        visited.add(curr)

        for (let n of adjList[curr]) {
            if (visited.has(n.city)) continue
            changes += parseInt(n.distance)
            queue.push(n.city)
        }
    }

    return changes
};
