/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 const dfs = (root, arr) => {
     if(!root) return ;
     if(!root.left && !root.right){
          arr.push(root.val);
          return;
     }
     dfs(root.left, arr)
     dfs(root.right, arr)

 }
var leafSimilar = function(root1, root2) {
    let arr1 = [];
    let arr2 = [];
      dfs(root1, arr1)
      dfs(root2, arr2)
    return String(arr1) === String(arr2)
};
