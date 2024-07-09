// 1차 (PASS)
// 시간복잡도: O(N * logN)
// 공간복잡도: O(logN)
// @see https://www.geeksforgeeks.org/merge-sort-for-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  return divideAndConquer(head);

  function divideAndConquer(h) {
    if (h === null || h.next === null) {
      return h;
    }

    const center = getCenterHead(h);
    const centerNext = center.next;
    center.next = null;

    const left = divideAndConquer(h);
    const right = divideAndConquer(centerNext);

    return sortedMerge(left, right);
  }

  function getCenterHead(h) {
    if (h === null) {
      return h;
    }

    let fast = h;
    let slow = h;

    while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  function sortedMerge(a, b) {
    let result = null;

    if (a === null) {
      return b;
    }
    if (b === null) {
      return a;
    }

    if (a.val < b.val) {
      result = a;
      result.next = sortedMerge(a.next, b);
    } else {
      result = b;
      result.next = sortedMerge(a, b.next);
    }

    return result;
  }
};
