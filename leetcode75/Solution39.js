/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    const queue = [root];
    const res = [];

    while(queue.length > 0) {
        const len = queue.length;
        let currNode;
        for(let i = 0; i < len; i++) {
            currNode = queue.shift();
            if(!currNode) return [];
            if(currNode.left) queue.push(currNode.left);
            if(currNode.right) queue.push(currNode.right);
        }
        res.push(currNode.val);
    }

    return res;
};
