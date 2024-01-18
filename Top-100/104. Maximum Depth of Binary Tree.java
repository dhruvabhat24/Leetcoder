// time: n, space: n
// Using BFS. For every new level increment maxDepth by 1.
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
    public int maxDepth(TreeNode root) {
      if (root == null) return 0;
      Queue<TreeNode> q = new LinkedList<>();
      q.add(root);
      int maxDepth = 0;
      while (q.size() > 0) {
        maxDepth++;
        int size  = q.size();
        for (int i = 0; i < size; i++) {
          TreeNode temp = q.remove();
          if (temp.left != null) q.add(temp.left);
          if (temp.right != null) q.add(temp.right);
        }
      }
      return maxDepth;
    }
}
