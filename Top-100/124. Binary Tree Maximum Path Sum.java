/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int maxPathSum(TreeNode root) {
        int[] maxp=new int[1]; 
        maxp[0]=Integer.MIN_VALUE;
        solver(root,maxp);
        return maxp[0];
    }

    public int solver(TreeNode root, int[] maxp){
        if(root==null) return 0;
        int lh=solver(root.left,maxp); 
        int rh=solver(root.right,maxp); 
        maxp[0]=Math.max(maxp[0],lh+rh+root.val); 
        int ret= Math.max(root.val,Math.max(lh,rh)+root.val); 
        maxp[0]=Math.max(maxp[0],ret);
        return ret; 
    }
}
