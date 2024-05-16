/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        Set<ListNode> map = new HashSet<>();

        while(head != null) {
            if(map.contains(head)) {
                return true;
            } else {
                map.add(head);
            }

            head = head.next;
        }

        return false;
    }
}


public class Solution {
    public boolean hasCycle(ListNode head) {

        if(head == null){
            return false;
        }

        ListNode slowNode = head;
        ListNode fastNode = head.next;

        while(slowNode != fastNode) {
            if(slowNode.next == null || fastNode.next == null || fastNode.next.next == null) {
                return false;
            }

            slowNode = slowNode.next;
            fastNode = fastNode.next.next;
        }

        return true;
    }
}

