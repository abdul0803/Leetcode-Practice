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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
	if (!root) return null;
	const { val, left, right } = root;

	if (val < key) root.right = deleteNode(right, key);
	else if (val > key) root.left = deleteNode(left, key);
	else {
		if (!left) return right;
		if (!right) return left;
		let current = right;

		while (current.left) current = current.left;
		root.val = current.val;
		root.right = deleteNode(right, current.val);
	}

	return root;
};
