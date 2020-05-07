class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchThree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let r = this.root;

    while (r) {
      if (node.value > r.value) {
        // right
        if (!r.right) {
          r.right = node;
          return this;
        }
        r = r.right;
      } else {
        // left
        if (!r.left) {
          r.left = node;
          return this;
        }
        r = r.left;
      }
    }
  }

  bfs() {
    let arr = [];
    let arr1 = [];

    arr.push(this.root);

    while (arr.length) {
      let node = arr.shift();

      arr1.push(node.value);

      if (node.left) {
        arr.push(node.left);
      }

      if (node.right) {
        arr.push(node.right);
      }
    }

    return arr1;
  }

  // preOrder
  dfs1() {
    let visited = [], // houdt bij de node die we al gezien hebben
      current = this.root, // start van de node
      que = [current]; // houdt bij de volgende node

    while (que.length) {
      current = que.shift(); // haal de 1ste uit de que weg
      visited.push(current.value); // stopt de current in de visited

      if (current.right) {
        que.unshift(current.right); // stopt de rechte node in de que
      }

      if (current.left) {
        que.unshift(current.left); // stopt de linke node in de que
      }
    }

    return visited;
  }

  // postOrder
  dfs2() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);
    return data;
  }

  // inOrder
  dfs3() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  find(value) {
    if (!this.root) {
      return undefined;
    }

    let r = this.root;

    while (r) {
      if (r.value == value) {
        return true;
      }

      if (value > r.value) {
        // right
        if (!r.right) {
          return undefined;
        }
        r = r.right;
      } else {
        // left
        if (!r.left) {
          return undefined;
        }
        r = r.left;
      }
    }
  }
}

let bst = new BinarySearchThree();

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
