function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
    
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    // verify the constraints
    if (!head) return null;
    if (!head.next) return head;

    let temp = head;
    let prev = null;
/**
 * ` `1 -> 2 -> 3 -> 4 -> 5 -> null
 *    5 -> 4 -> 3 -> 2 -> 1 -> null
 */
    
    while (temp) {
        const next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
    }

    return prev;

};

