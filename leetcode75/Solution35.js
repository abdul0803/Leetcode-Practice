/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var goodNodes = function (root) {
    if (!root) return 0;

    let numGoodNodes = 0;
    const stack = [];
    stack.push([root, -Infinity]);
    while (stack.length) {
        let [node, max] = stack.pop();
        const { left, right, val } = node;
        if (max <= val) {
            numGoodNodes += 1;
            max = val;
        }

        if (left) stack.push([left, max]);
        if (right) stack.push([right, max]);
    }

    return numGoodNodes;
};
