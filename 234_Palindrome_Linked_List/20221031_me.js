/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function (head) {
     let curNode = head;
     let reverseCurNode = head;
     
     while (curNode) {
         
         while (reverseCurNode.next) {
             if (!reverseCurNode.next.next) {
                 if (curNode.val !== reverseCurNode.next.val) {
                     return false;
                 }

                 reverseCurNode.next = null;
                 break;
             }
             
             reverseCurNode = reverseCurNode.next;
         }

         reverseCurNode = head;
         head = curNode.next;
         curNode = curNode.next;
     }
     
     return true;
   
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(5, new ListNode(2, new ListNode(1, null)))))))
console.log(isPalindrome(new ListNode(1, new ListNode(2, null))))
console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1, null))))))