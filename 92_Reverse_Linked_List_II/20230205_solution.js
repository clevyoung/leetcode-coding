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
  let temp = head;
  let prev = null;
  let middle = null;
  let position = 1;
  while (temp) {
    const next = temp.next;
      
    if (position < left) {
      // current node를 만들기 위해서 temp.next를 null로 설정한다. 
      temp.next = null;
      if (!prev) {
        // prev의 초기값을 temp로 설정
        prev = temp;
      } else {
        prev.next = temp; // prev의 next 값을 변경시키면 head에도 변경이 반영된다.
        prev = prev.next;
      }
        
    } else if (position >= left && position <= right) {
      console.log(head)
      console.log(temp)
      console.log(middle)
      // left에서 right까지 reverse하기 - prev가 축적된 상태
      temp.next = middle;
      middle = temp;

      
        
    } else {
      break;
           
    }
    temp = next;
    position++;
  }
    

  if (prev) {
    prev.next = middle;
  }
  if (!prev && !temp) {
    return middle
  }
  let merge = head;
  while(merge.next){
      merge = merge.next;
  }
  merge.next = temp;
  
      return head
}
      
 
  
// };
  
// console.log(reverseBetween({
//   value: 3,
//   next: {
//     value: 5,
//     next : null
//   }
// }, 1, 2));

console.log(reverseBetween({
  value: 3,
  next: {
    value: 5,
    next: {
      value: 2,
      next : null
    }
  }
}, 1, 2))