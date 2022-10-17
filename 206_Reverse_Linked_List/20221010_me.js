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
var reverseList = function (head) {
    if (!head.next) return head;
     let node = head;
     let reversedNode;
     while (head && head.next) {
         while (node && node.next) {
             if (!node.next.next) {
                 if (!reversedNode) {
                     reversedNode = node.next;  

                 } else {
                     let tempNode = reversedNode;
                     while (tempNode && tempNode.next) {
                         tempNode = tempNode.next;
                     }
                     tempNode.next = node.next;
                 }
                 node.next = null;
                 break;
             } 
             node = node.next;    
         }
        
         node = head;
     }

    
     let lastNode = reversedNode;

     while (lastNode && lastNode.next) {
         lastNode = lastNode.next;
     }

     lastNode.next = node;

     return reversedNode;
 };

  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
//  console.log(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))))))
console.log(reverseList(new ListNode()))