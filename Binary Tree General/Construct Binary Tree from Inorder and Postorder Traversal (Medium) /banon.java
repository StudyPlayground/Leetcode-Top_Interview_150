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
    public TreeNode buildTree(int[] preorder, int[] inorder) {


        return buildTreeHelper(preorder, inorder, 0, 0, inorder.length - 1);

    }

     private TreeNode buildTreeHelper(int[] preorder, int[] inorder, int preStart, int inStart, int inEnd) {

        if (preStart >= preorder.length || inStart > inEnd) {
            return null;
        }
        
        int rootVal = preorder[preStart];
        TreeNode root = new TreeNode(rootVal);
        
        int rootIndex = 0;
        for (int i = inStart; i <= inEnd; i++) {
            if (inorder[i] == rootVal) {
                rootIndex = i;
                break;
            }
        }
        
        root.left = buildTreeHelper(preorder, inorder, preStart + 1, inStart, rootIndex - 1);
        root.right = buildTreeHelper(preorder, inorder, preStart + (rootIndex - inStart) + 1, rootIndex + 1, inEnd);
        
        return root;
    }
}
