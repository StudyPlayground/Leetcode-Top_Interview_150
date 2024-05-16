/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        
        ListNode head = new ListNode(0, null);
        ListNode currentNode = head;

        int carryDigit = 0;

        while (l1 != null || l2 != null) {
            
            int l1Val = 0;
            int l2Val = 0;
            
            if (l1 != null) {
                l1Val = l1.val;
            }
            
            if (l2 != null) {
                l2Val = l2.val;
            }

            int sumDigit = carryDigit + l1Val + l2Val;
            ListNode nextNode = new ListNode(sumDigit % 10, null);
            currentNode.next = nextNode;
            currentNode = nextNode;

            carryDigit = sumDigit / 10;
            
            if (l1 != null) {
                l1 = l1.next; 
            }

            if (l2 != null) {
                l2 = l2.next;
            }

        }

        if (carryDigit > 0) {
            ListNode lastNode = new ListNode(carryDigit);
            currentNode.next = lastNode;
        }

        return head.next;
    }
}
