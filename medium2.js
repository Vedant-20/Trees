// Validate Binary Search Tree (Medium):
// Determine if a given binary tree is a valid binary search tree.

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function isValidBST(root) {
    let prev = null; // To store the previously visited node during in-order traversal
  
    function inOrderTraversal(node) {
      if (!node) {
        return true; // Empty subtree is a valid BST
      }
  
      // Recursively traverse the left subtree
      if (!inOrderTraversal(node.left)) {
        return false;
      }
  
      // Check if the current node's value is greater than the previous visited node
      if (prev !== null && node.val <= prev.val) {
        return false;
      }
  
      prev = node; // Update the previous node
  
      // Recursively traverse the right subtree
      return inOrderTraversal(node.right);
    }
  
    return inOrderTraversal(root);
  }
  
  // Example usage:
  const root = new TreeNode(2);
  root.left = new TreeNode(1);
  root.right = new TreeNode(3);
  
  console.log(isValidBST(root)); // Output: true
  