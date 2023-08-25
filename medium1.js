// Lowest Common Ancestor of a Binary Tree (Medium):
// Find the lowest common ancestor of two nodes in a binary tree.

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function lowestCommonAncestor(root, p, q) {
    if (!root) {
      return null; // If the root is null, there's no ancestor
    }
  
    if (root.val === p.val || root.val === q.val) {
      return root; // If either node is found, return the current node
    }
  
    // Recursively search in the left and right subtrees
    const leftLCA = lowestCommonAncestor(root.left, p, q);
    const rightLCA = lowestCommonAncestor(root.right, p, q);
  
    // If both left and right subtrees return non-null values, this node is the LCA
    if (leftLCA && rightLCA) {
      return root;
    }
  
    // Otherwise, return the non-null value from either the left or right subtree
    return leftLCA || rightLCA;
  }
  
  // Example usage:
  const root = new TreeNode(3);
  root.left = new TreeNode(5);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(6);
  root.left.right = new TreeNode(2);
  root.right.left = new TreeNode(0);
  root.right.right = new TreeNode(8);
  root.left.right.left = new TreeNode(7);
  root.left.right.right = new TreeNode(4);
  
  const p = new TreeNode(5);
  const q = new TreeNode(1);
  
  console.log(lowestCommonAncestor(root, p, q).val); // Output: 3
  