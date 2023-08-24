// Path Sum (Easy):
// Given a binary tree and a sum, determine if the tree has a root-to-leaf path that adds up to the given sum.

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function hasPathSum(root, sum) {
    if (!root) {
      return false; // If the root is null, there's no path
    }
  
    // If it's a leaf node and the sum matches its value, we've found a path
    if (!root.left && !root.right && root.val === sum) {
      return true;
    }
  
    // Recursively check the left and right subtrees
    const left = hasPathSum(root.left, sum - root.val);
    const right = hasPathSum(root.right, sum - root.val);
  
    // Return true if either the left or right subtree contains a valid path
    return left || right;
  }
  
  // Example usage:
  const root = new TreeNode(5);
  root.left = new TreeNode(4);
  root.right = new TreeNode(8);
  root.left.left = new TreeNode(11);
  root.right.left = new TreeNode(13);
  root.right.right = new TreeNode(4);
  root.left.left.left = new TreeNode(7);
  root.left.left.right = new TreeNode(2);
  root.right.right.right = new TreeNode(1);
  
  const sum = 22;
  console.log(hasPathSum(root, sum)); // Output: true
  