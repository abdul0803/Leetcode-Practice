/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    function findLeaves(root, leaves) {
        if (!root) {
            return;
        }

        if (!root.left && !root.right) {
            leaves.push(root.val);
        }

        findLeaves(root.left, leaves);
        findLeaves(root.right, leaves);
    }

    const leaves1 = [];
    const leaves2 = [];

    findLeaves(root1, leaves1);
    findLeaves(root2, leaves2);

    return JSON.stringify(leaves1) === JSON.stringify(leaves2);
};
