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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
     console.log(list1)
     let node1 = list1;
     let node2 = list2;
     let node3;

     if (!node1 && !node2) return null;
     if (!node1 && node2) return node2
     if (node1 && !node2) return node1
     
     

     while (node1 || node2) {
         let newNode;
        
         if (node1 && node2) {
            if (node1.val === node2.val) {
                newNode = new ListNode(node1.val, new ListNode(node1.val))
                node1 = node1.next;
                node2 = node2.next;  
                
            } else if (node1.val > node2.val) {
                newNode = new ListNode(node2.val)
                node2 = node2.next;  
            } else if (node1.val < node2.val) {           
                newNode = new ListNode(node1.val)
                node1 = node1.next;  
            } 
         } else {
             if (!node1 && node2) {
                 newNode = new ListNode(node2.val)
                 node2 = node2.next;
             }

             if (!node2 && node1) {
                 newNode = new ListNode(node1.val)
                 node1 = node1.next;  
             }
         }
        
         if (!node3) {
             node3 = newNode;
         } else {
            let lastNode = node3;
            while (lastNode.next) { 
                lastNode = lastNode.next;
            }
   
            lastNode.next = newNode; 
         }

         
     }
     return node3;

 };

const list1 = new ListNode(1);
 console.log(list1)
 const list2 = new ListNode(2);
console.log(mergeTwoLists(list1, list2));
 
