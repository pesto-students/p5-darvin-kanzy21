// Binary Tree Level Order Traversal
function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
function levelOrder(root) {
    if (!root) return []
    let result = []      
    let queue = [root] 
    console.log(queue)    
    while (queue.length != 0) {
        let subarr = []    
        const n = queue.length
        for (let i = 0; i < n; i++) {
            let node = queue.pop()
            console.log(node)    
            subarr.push(node.val)
            if (node.left) queue.unshift(node.left)
            if (node.right) queue.unshift(node.right)
        }
        result.push(subarr)
    }
    return result
}

let tree1 = new Node(3);
tree1.left = new Node(9);
tree1.right = new Node(20);
tree1.right.right = new Node(7);
tree1.right.left = new Node(15);

console.log(levelOrder(tree1))
//TC o(n)
//SC o(n)