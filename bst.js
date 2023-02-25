class Node {
  constructor(id, name, marks) {
    this.id = id;
    this.name = name;
    this.marks = marks;
    this.left = null;
    this.right = null;
  }

  get percentage() {
    const totalMarks = this.marks.reduce((acc, val) => acc + val, 0);
    return totalMarks / this.marks.length;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(id, name, marks) {
    const newNode = new Node(id, name, marks);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.percentage < node.percentage) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  find(name) {
    const nodes = [];
    this._findNodes(this.root, name, nodes);
    return nodes;
  }

  _findNodes(node, name, nodes) {
    if (node === null) {
      return;
    }

    if (node.name === name) {
      nodes.push(node);
    }

    this._findNodes(node.left, name, nodes);
    this._findNodes(node.right, name, nodes);
  }
}

const bst = new BinarySearchTree();

bst.insert(1, "Alice", [80, 90, 85, 95, 92]);
bst.insert(2, "Bob", [70, 85, 75, 80, 68]);
bst.insert(3, "Charlie", [90, 80, 85, 70, 78]);
bst.insert(4, "Kevin", [90, 80, 85, 70, 78]);
bst.insert(5, "Bob", [75, 80, 68, 70, 85]);

// Sample student grades output

find(bst, "Kevin");
find(bst, "Bob");
find(bst, "Kshitij");

function find(bst, studentName) {
  const studentNodes = bst.find(studentName);
  if (studentNodes.length > 0) {
    console.log(
      `\n\nFound ${studentNodes.length} students with name ${studentName}`
    );
    for (const studentNode of studentNodes) {
      console.log(`\nStudent ID: ${studentNode.id}`);
      console.log(`Marks: ${studentNode.marks.join(", ")}`);
    }
  } else {
    console.log(`No students found with name ${studentName}`);
  }
}
