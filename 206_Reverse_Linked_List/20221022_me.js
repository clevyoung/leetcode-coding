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
    // 기본적인 예외처리
    if (!head) return null;
    if (!head.next) return head;
    
    let node = head;
    let reversedNode;
    while (node && node.next) {
        // node.next를 null로 만들면 다음에 순회할 수 없으므로 node.next값을 어딘가에 nextNode에 저장
        // const nextNode = node.next;
        // node.next = null;
        if (!reversedNode) {
            reversedNode = new ListNode(node.val, null)    
        }
        node = node.next
        
        reversedNode = new ListNode(node.val, reversedNode)
    }

     
     return reversedNode;

 };

  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 console.log(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))))))
// console.log(reverseList(new ListNode()))