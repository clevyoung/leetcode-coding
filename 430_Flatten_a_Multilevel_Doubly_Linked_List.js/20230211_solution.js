/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    if (!head) return null;
    let currentNode = head;

    while (currentNode) { // 언제는 currentNode 언제는 currentNode.next가 존재할 때까지로 체크하는지를 모르겠다.
        if (currentNode.child) {
            let temp = currentNode.child
            while (temp.next) {
                temp = temp.next // 1 , 2, 9 -> 3
            }
            temp.next = currentNode.next;
            if (temp.next) {
                temp.next.prev = temp
            }

            currentNode.next = currentNode.child;
            currentNode.child.prev = currentNode;
            currentNode.child = null;


        } else {
            currentNode = currentNode.next;    
        }

    }

    return head;
    
};