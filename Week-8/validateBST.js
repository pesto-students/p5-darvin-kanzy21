function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


const isValidBST = function(root) {
     
    function check(root, min, max){
         if (!root){
             return true
         }
        
        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)){
            return false
        }
        
        return check(root.left, min, root.val) && check(root.right, root.val, max)
    }

    return check(root, null, null)
};

let tree1 = new Node(2);
tree1.left = new Node(1);
tree1.right = new Node(3);
// tree1.right.right = new Node(7);
// tree1.right.left = new Node(15);

console.log(isValidBST(tree1))
//TC olog(n)
//SC o1