// Maximum Depth of Binary Tree (Easy):
// Find the maximum depth (height) of a binary tree.

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function maxDepth(root) {
    if (!root) {
      return 0;
    }
  
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
  
    // The maximum depth is the greater of the left and right subtrees plus 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
  }
  
  // Example usage:
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);
  
  console.log(maxDepth(root)); // Output: 3
  