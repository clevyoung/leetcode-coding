function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 링크드 리스트 생성
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

// dummyHead 생성
const dummyHead = new ListNode(0);
dummyHead.next = head;

// prev에 dummyHead를 할당하여 동일한 객체를 가리키도록 함
let prev = dummyHead;

// prev와 dummyHead는 동일한 객체를 가리킴
console.log(prev === dummyHead); // true

// prev.next를 조작하여 링크드 리스트 연결 변경
prev.next = prev.next.next;

// dummyHead.next 역시 변경됨
console.log(dummyHead.next.val); // 2
console.log(prev);
console.log(head);
console.log(dummyHead);
console.log(dummyHead.next);

// prev를 head에 직접 할당한 경우
prev = head;

// prev와 head는 동일한 객체를 가리킴
console.log(prev === head); // true

// prev를 이용하여 링크드 리스트 연결 변경
prev.next = prev.next.next;

// head와의 연결이 끊어짐
console.log(head);
console.log(prev);
console.log(head.next.val); // 3
