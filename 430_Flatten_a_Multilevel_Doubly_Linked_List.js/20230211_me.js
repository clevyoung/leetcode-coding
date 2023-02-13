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
    let cur = head;
    let next = null;
    let prev = head;

    while (cur.next) {
        prev = cur; // current node 
        let temp = cur.next;
        if (cur.child) { // when it has a child assign it to a cur variable
            
            cur = cur.child;
            
            if (next) { 
                
                while (temp.next) {
                     temp = temp.next   
                }
                temp.next = next; // 9의 next가 3456?
            } else {
                next = prev.next; // 3456
            }
            prev.next = cur;
            cur.prev = prev;
            
        }
        if (!cur.next) {
            cur.next = next;
            next.prev = cur.next
            cur = next;
        } else {
            cur = cur.next;    
        }
        
        

    }



    return head;
    
};