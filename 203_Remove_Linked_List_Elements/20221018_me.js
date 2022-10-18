/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (!head) return head;
    if (!head.next && head.val === val) return null;
    
     let node = head;
     
    while (node && node.next) {
        if (node.next.val === val) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }

    }
        if (head.val === val) {
            return head.next;
        }
  
     return head;
 };

 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

console.log(removeElements(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, null)))))))), 6))
console.log(removeElements(new ListNode(7, new ListNode(7, new ListNode(7, new ListNode(7, new ListNode(7, null))))), 7))
console.log(removeElements(new ListNode(5, new ListNode(5, new ListNode(5, null))), 5))
console.log(removeElements(new ListNode(5, new ListNode(5, new ListNode(5, new ListNode(5, null)))), 5))
console.log(removeElements(new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(6, new ListNode(8, null))))), 6))
console.log(removeElements(new ListNode(1, new ListNode(2, null)), 1))