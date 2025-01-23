const maxLevelSum = (root) => 
{
    if(!root) return null

    let stack = [root]
    let level = 0, depth = 0
    let maximum = -Infinity

    while(stack.length)
    {
        let collected = []
        let summary = 0

        depth++

        while(stack.length)
        {
            const node = stack.pop()

            node.val && (summary += node.val)
            node.left && collected.push(node.left)
            node.right && collected.push(node.right)
        }

        summary > maximum && ([maximum, level] = [summary, depth])

        stack = collected

    }

    return level
}
