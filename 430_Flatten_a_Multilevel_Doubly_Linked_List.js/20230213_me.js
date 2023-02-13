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
var flatten = function(head) {
    if(!head) return null;
    let currentNode = head;

    while(currentNode){
        if(currentNode.child){
            let temp = currentNode.child;
            while(temp.next){
                temp = temp.next;
            }
            temp.next = currentNode.next;
            if(currentNode.next){
                currentNode.next.prev = temp;
            }
            

            currentNode.next = currentNode.child;
            currentNode.child.prev = currentNode;
            currentNode.child = null;
        }else{
            currentNode = currentNode.next;
        }
    }

    return head;
   
};

