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

    let prev = head;
    let temp = head;
    let tail = head;
    let middle = null;
    let position = 1;

    while (temp) {
        // 하나의 while 문에서 처리하다보니 헷갈린다. 튜터의 방법이 더 나을 것 같다. 내일 다시 풀어본다.
        const next = temp.next;
        if (position < left) {
            prev = temp;
        } else if (position >= left && position <= right) {
            temp.next = middle;
            middle = temp;
            if (position === left) {
                tail = temp
            }

        } else {
            break;
        }

        temp = next;
        position++;
    }
    prev.next = middle
    tail.next = temp
    
    return head;

    
}

   



// console.log(reverseBetween({
//   value: 3,
//   next: {
//     value: 5,
//     next : null
//   }
// }, 1, 2));

console.log(reverseBetween({
    value: 1,
    next: {
      value: 2,
        next: {
            value: 3,
            next : null
      }
    }
  }, 1, 3));

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