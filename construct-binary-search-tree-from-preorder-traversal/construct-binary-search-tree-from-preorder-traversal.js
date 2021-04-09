/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
let bstFromPreorder = A => {
    let go = (root, x) => {
        if (root.val > x) {
            if (!root.left)
                root.left = new TreeNode(x);
            else
                go(root.left, x);
        } else {
            if (!root.right)
                root.right = new TreeNode(x);
            else
                go(root.right, x);
        }
    };
    let root = new TreeNode(A[0]);
    for (let i = 1; i < A.length; ++i)
        go(root, A[i]);
    return root;
};