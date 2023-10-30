/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
    function loop(value) {
      if (value.right === null && value.left === null) return 1;
      if (value.right === null) return loop(value.left) + 1;
      if (value.left === null) return loop(value.right) + 1;
      return Math.min(loop(value.left), loop(value.right)) + 1;
    }
    return loop(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    function loop(value) {
      if (value.right === null && value.left === null) return 1;
      if (value.right === null) return loop(value.left) + 1;
      if (value.left === null) return loop(value.right) + 1;
      return Math.max(loop(value.left), loop(value.right)) + 1;
    }
    return loop(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let sum = 0;
    function loop(value) {
      if (value === null) return 0;
      const left = loop(value.left);
      const right = loop(value.right);
      //sum is the max sum of a path,(it is max sum of a path because return
      //does not return a total sum but a sum of either left or right)
      sum = Math.max(sum, value.val + right + left);
      //return set the value of a node with no children
      // checks to see if a descendant has a child, if so loop and increase sum
      // if no return current descendant value
      return Math.max(
        0,
        loop(value.left) + value.val,
        loop(value.right) + value.val
      );
    }
    loop(this.root);
    return sum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  // could implement more variable names that prevent clutter
  // such as is greater than lowerBound and should reasing closest(curr < closest || closest === null)
  //BFS would just use a queue and append left, right children to the queue

  nextLarger(lowerBound) {
    let min = null;
    function loop(value) {
      if (value === null) return null;
      const left = loop(value.left);
      const right = loop(value.right);
      min = Math.min(
        min != null && min > lowerBound ? min : value.val + lowerBound,
        left != null && left > lowerBound ? left : lowerBound + value.val,
        right != null && right > lowerBound ? right : lowerBound + value.val,
        value.val > lowerBound ? value.val : null
      );
      return value.val > lowerBound
        ? Math.min(
            left != null && left > lowerBound ? left : lowerBound + value.val,
            right != null && right > lowerBound
              ? right
              : lowerBound + value.val,
            value.val
          )
        : null;
    }
    loop(this.root);
    return min != 0 ? min : null;
  }

  // if were to use BFS

  //set a min

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
