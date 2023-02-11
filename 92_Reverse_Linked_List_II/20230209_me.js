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
* @param {number} left
* @param {number} right
* @return {ListNode}
*/


var reverseBetween = function (head, left, right) {
    if (left === right) return head;

    // reverse가 시작되기 전 마지막 value를 저장 
    let position = 1;
    let prev = null;
    let temp = head;
    let middle = null;
    let tail = null;

    while (position < left) {
        prev = temp;
        temp = temp.next;
        position++;
    }

    while (position >= left && position <= right) {
        const next = temp.next;
        temp.next = middle;
        if (position === left) {
            tail = temp;
        }
        middle = temp;
        temp = next; 
        position++;
    }

    if (prev) {
        prev.next = middle;    
    } else {
        head = middle
    }
    tail.next = temp
    
    return head;
}

   



console.log(reverseBetween({
  value: 3,
  next: {
    value: 5,
    next : null
  }
}, 1, 2));

console.log(reverseBetween({
    value: 1,
    next: {
      value: 2,
        next: {
            value: 3,
            next : null
      }
    }
  }, 1, 2));

// console.log(reverseBetween({
// value: 1,
// next: {
//  value: 2,
//  next: {
//    value: 3,
//      next: {
//          value: 4,
//          next: {
//              value: 5,
//              next : null
//          }
//    }
//  }
// }
// }, 3, 4))