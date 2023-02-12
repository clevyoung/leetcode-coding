/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    // portion - previous, reverse, after 
    // save previous portion
    let prevNode = null;
    let currentNode = head;
    let position = 1; 
    
    while(position < left){
        prevNode = currentNode; 
        currentNode = currentNode.next;
        position++; // position index up
    }
 
    let middle = null;
    let tail = null;
 
    while(position >= left && position <= right){
        const next = currentNode.next;
        currentNode.next = middle;
        middle = currentNode;
        if(position === left){
            tail = currentNode;
        }
        currentNode = next;
        position++;
    }
 
    tail.next = currentNode;
 
     if(!prevNode){
         return middle;
     }else{
         prevNode.next = middle;
     }
 
    return head;
 };