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

    class Index {
        int val;
        Index() {
            this.val = 0;
        }
    }

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        Index preorderIndex = new Index();
        Map<Integer, Integer> inorderIndex = new HashMap<>();
        for(int i = 0; i < inorder.length; i++) {
            inorderIndex.put(inorder[i], i);
        }
        return buildTree(preorder, inorder, preorderIndex, inorderIndex, 0, inorder.length-1);
    }

    private TreeNode buildTree(int[] preorder, int[] inorder, Index preorderIndex, Map<Integer, Integer> inorderIndex, int left, int right) {
        if(preorderIndex.val >= preorder.length || left > right) {
            return null;
        }
        TreeNode root = new TreeNode(preorder[preorderIndex.val++]);
        if(left != right) {
            root.left = buildTree(preorder, inorder, preorderIndex, inorderIndex, left, inorderIndex.get(root.val)-1);
            root.right = buildTree(preorder, inorder, preorderIndex, inorderIndex, inorderIndex.get(root.val)+1, right);
        }
        return root;
    }
}
