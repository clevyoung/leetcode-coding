var reverseBetween = function (head, m, n) {
  if (head === null || head.next === null || m === n) {
    return head;
  }

  let dummyHead = new ListNode(0);
  dummyHead.next = head;

  let prev = dummyHead;
  for (let i = 0; i < m - 1; i++) {
    prev = prev.next;
  }

  let start = prev.next;
  console.log(start);
  let current = start.next;
  console.log(current);
  console.log(dummyHead.next);

  for (let i = 0; i < n - m; i++) {
    console.log(start.next);
    console.log(current.next);
    start.next = current.next;
    console.log(start.next);
    console.log(current.next);
    current.next = prev.next;
    console.log(prev.next);
    prev.next = current;
    console.log(prev.next);
    current = start.next;
    console.log(dummyHead.next);
  }

  return dummyHead.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 링크드 리스트 생성
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);
console.log(reverseBetween(head, 3, 5));
// console.log(reverseBetween(head, 1, 2));
