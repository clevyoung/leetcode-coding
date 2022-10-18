/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let node = head;

    while (node && node.next) {
        if (node.val === node.next.val) {
            node.next = node.next.next;

        } else {
            node = node.next;
       }
    }
    console.log(node)
    console.log(head)

    return head;
 };

 console.log(deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2, null)))))