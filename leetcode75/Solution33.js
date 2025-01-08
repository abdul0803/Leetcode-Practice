/*
The maxDepth function calculates the maximum depth of a binary tree, where the depth is defined as the number of nodes along the longest path from the root to a leaf node. This is achieved using a recursive approach to traverse the tree.

Explanation:
Base Case:

If the root is null, return 0, as an empty tree has a depth of 0.
Recursive Case:

Recursively calculate the depth of the left subtree (left = maxDepth(root.left)).
Recursively calculate the depth of the right subtree (right = maxDepth(root.right)).
Combine Results:

The depth of the current node is the greater of the two depths (left or right) plus 1 (to include the current node).
Return the Result:

Return the computed maximum depth.
Walkthrough:
Example 1:
root = [3, 9, 20, null, null, 15, 7]
          3
         / \
        9   20
            / \
           15  7

Calculate depth for node 3:
Left subtree depth (9): 1 (as 9 has no children).
Right subtree depth (20):
Left subtree depth (15): 1 (as 15 has no children).
Right subtree depth (7): 1 (as 7 has no children).
Max depth at 20: max(1, 1) + 1 = 2.
Max depth at 3: max(1, 2) + 1 = 3.
Result: 3.



*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
    // Base case: if the tree is empty, return 0
    if (!root) return 0;

    // Recursive case: compute the depth of left and right subtrees
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    // Return the maximum of the two depths plus 1 (for the current node)
    return Math.max(left, right) + 1;
};


