// Invert Binary Tree (Easy):
// Invert a binary tree, where each left subtree becomes a right subtree and vice versa.

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function invertTree(root) {
    if (!root) {
      return null;
    }
  
    // Swap the left and right subtrees recursively
    const left = invertTree(root.left);
    const right = invertTree(root.right);
  
    root.left = right;
    root.right = left;
  
    return root;
  }
  
  // Example usage:
  const root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(7);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(9);
  
  console.log(JSON.stringify(invertTree(root), null, 2));
  