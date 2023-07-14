var reverseBetween = function (head, m, n) {
  if (head === null || head.next === null || m === n) {
    return head;
  }

  let prev = null;
  let current = head;
  let count = 1;

  // Move current to the m-th node
  while (current !== null && count < m) {
    prev = current;
    current = current.next;
    count++;
  }

  let sublistPrev = prev;
  let sublistTail = current;

  // Reverse the sublist from m to n
  for (let i = 0; i <= n - m; i++) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  // Connect the reversed sublist with the rest of the list
  if (sublistPrev !== null) {
    sublistPrev.next = prev;
  } else {
    head = prev;
  }
  sublistTail.next = current;

  return head;
};
