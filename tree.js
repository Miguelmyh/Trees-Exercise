/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    const toVisitStack = [this.root];
    let total = 0;
    if (this.root !== null) {
      while (toVisitStack.length) {
        const current = toVisitStack.pop();
        total += current.val;
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      }
      return total;
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    const toVisitStack = [this.root];
    let count = 0;
    if (this.root !== null) {
      while (toVisitStack.length) {
        const current = toVisitStack.pop();
        if (current.val % 2 === 0) {
          count += 1;
        }
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      }
      return count;
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    const toVisitStack = [this.root];
    let count = 0;
    if (this.root !== null) {
      while (toVisitStack.length) {
        const current = toVisitStack.pop();
        if (current.val > lowerBound) {
          count += 1;
        }
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      }
      return count;
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
