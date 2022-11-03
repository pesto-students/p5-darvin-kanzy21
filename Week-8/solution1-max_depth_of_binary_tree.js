// Maximum Depth of Binary Tree
function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

let maxDepth = function (root) {
    return maxDepthHandler(root, 1)
};
var maxDepthHandler = function (root, num) {
    if (root == null) {
        return 0
    }
    if (root.right == null && root.left == null) {
        return num
    }
    if (root.right && root.left) {
        return Math.max(maxDepthHandler(root.right, num + 1), maxDepthHandler(root.left, num + 1))
    } else if (root.right != null) {
        return maxDepthHandler(root.right, num + 1)
    } else {
        return maxDepthHandler(root.left, num + 1)
    }
};
let tree1 = new Node(3);
tree1.left = new Node(9);
tree1.right = new Node(20);
tree1.right.right = new Node(7);
tree1.right.left = new Node(15);

console.log(maxDepth(tree1))

//TC olog(n)
//SC o1