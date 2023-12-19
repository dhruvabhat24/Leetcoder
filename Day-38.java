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
     public void dfs(AtomicInteger count, boolean right, TreeNode start, AtomicInteger maxCount)
     {
         if (start != null)
         {
             count.set(count.get() + 1);
             right = !right;
             dfs(count, right, !right ? start.right : start.left, maxCount);
             right = !right;
             count.set(count.get() + 1);
             dfs(count, right, right ? start.left : start.right, maxCount);
         }
         else {
             maxCount.set(Math.max(maxCount.get(), count.get()));
             count.set(-1);
         }
     }
     
    public int longestZigZag(TreeNode root) {
        AtomicInteger count = new AtomicInteger(-1);
        AtomicInteger maxCount = new AtomicInteger(0);
        dfs(count, true, root, maxCount);
         return maxCount.get();
    }
}
