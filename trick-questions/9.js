function TreeNode(val , left, right){
    this.val = (val === undefined ? 0 : null);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var inorderTraversal = (node) => {
    let res = [];
    function inorder(){
        if(!node){
            return;
        }
        inorder(node.left);
        res.push(node.val)
        inorder(node.right);
    }
    inorder(root);
    return res
}