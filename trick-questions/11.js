// Post Order
let PostTraversal = (root) => {
    let res = [];
    function PostTraversal(node){
        if(!node){
            return;
        }
        PostTraversal(node.left);
        PostTraversal(node.right);
        res.push(node.val)
    }
    PostTraversal(root)
    return res
}