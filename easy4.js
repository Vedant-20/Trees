// Symmetric Tree (Easy):
// Determine if a binary tree is symmetric (mirror image of itself).

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function isSymmetric(root) {
    if (!root) {
      return true; // An empty tree is symmetric
    }
  
    function isMirror(left, right) {
      if (!left && !right) {
        return true; // Both nodes are null, which is symmetric
      }
      if (!left || !right) {
        return false; // One node is null, but not the other, which is not symmetric
      }
  
      // Check if values match and the left and right subtrees are mirrors of each other
      return (
        left.val === right.val &&
        isMirror(left.left, right.right) &&
        isMirror(left.right, right.left)
      );
    }
  
    // Start by comparing the root's left and right subtrees
    return isMirror(root.left, root.right);
  }
  
  // Example usage:
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(2);
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(4);
  root.right.left = new TreeNode(4);
  root.right.right = new TreeNode(3);
  
  console.log(isSymmetric(root)); // Output: true
  