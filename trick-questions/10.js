function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : null);
    this.left = (left === undefined ? null: left);
    this.right = (left === undefined ? null : right);
}

let preOrder = (root) => {
    let res = [];
    function preOrder(node){
        if(!node) {
            return
        }
        res.push(node);
        preOrder(node.left);
        preOrder(node.right);
    }
    preOrder(root)
    return res;
}