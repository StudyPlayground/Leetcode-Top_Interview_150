// 1차 (PASS)
// 공통 로직 개선

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const result = new ListNode();
  let currentResult = result;
  let roundValue = 0;

  while (l1 !== null && l2 !== null) {
    connectNewNode(l1.val + l2.val + roundValue, () => {
      l1 = l1.next;
      l2 = l2.next;
    });
  }

  while (l1 !== null) {
    connectNewNode(l1.val + roundValue, () => {
      l1 = l1.next;
    });
  }

  while (l2 !== null) {
    connectNewNode(l2.val + roundValue, () => {
      l2 = l2.next;
    });
  }

  if (roundValue > 0) {
    const newNode = new ListNode(roundValue);

    currentResult.next = newNode;
  }

  return result.next;

  function connectNewNode(value, goNextNode) {
    const newNode = new ListNode(value % 10);
    roundValue = Math.floor(value / 10);

    currentResult.next = newNode;
    currentResult = currentResult.next;

    goNextNode();
  }
};
