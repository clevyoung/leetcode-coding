class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    prepend(data) {
        this.head = new Node(data, this.head);
        this.length++;
    }

    // 마지막에 새로 data 추가
    append(data) {
        if (!this.head) { // 만약에 head가 없으면 
            this.head = new Node(data); // data를 가진 새로운 node가 head가 된다.
        } else {
            let lastNode = this.head;
            while (lastNode.next) { // 마지막 node는 next가 없으므로 마지막 node를 찾을 때까지(next가 존재하지 않는 node를 찾을 떄까지) while 루프로 찾는다. 
                lastNode = lastNode.next;
            }

            lastNode.next = new Node(data); // 마지막 node의 next는 새로운 node가 된다. 
        }
        this.length++
    }

    // 특정 index에 data 삽입하기
    insert(index, data) {
        if (index > this.length) {
            return;
        }

        if (index === 0) {
            this.prepend(data);
            return;
        }

        if (index === this.length) {
            this.append(data);
            return;
        }

        let count = 0;
        let prevNode = this.head;
        
        while (count <= index) {
            if (count === index-1) {
                const newNode = new Node(data, prevNode.next);
                prevNode.next = newNode;
                break;
            }
                
            prevNode = prevNode.next;
            count++
        }

        this.length++;
    }

    // 특정 index에 있는 data 구하기
    getAt(index) {
        if (index >= this.length) return;

        let count = 0;
        let node = this.head;

        while (count <= index) {
            if (count === index) {
                return node.data;
            }

            node = node.next;
            count++
        }

    }

    // 특정 index에 있는 data 제거하기
    removeAt(index) {
        let count = 0;
        let node = this.head;
        let prevNode;
        let afterNode;

        while (count <= index) {
            if (count === index - 1) {
                prevNode = node;
            }
            if (count === index) {
                afterNode = node.next;
                prevNode.next = afterNode;
                break;
            }

            node = node.next;
            count++;
        }

        this.length--;
    }

   
}

const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);

ll.insert(4, 5)
ll.insert(0, 0)

console.log(ll)
ll.insert(0, 7)
ll.insert(2, 99)
console.log(ll)
console.log(ll.length)
console.log(ll.getAt(0))
console.log(ll.getAt(1))
console.log(ll.getAt(2))
console.log(ll.getAt(3))
console.log(ll.getAt(4))
console.log(ll.getAt(5))
console.log(ll.getAt(6))
console.log(ll.getAt(7))
console.log(ll.length)
ll.removeAt(5)
console.log(ll.getAt(0))
console.log(ll.getAt(1))
console.log(ll.getAt(2))
console.log(ll.getAt(3))
console.log(ll.getAt(4))
console.log(ll.getAt(5))
console.log(ll.getAt(6))
console.log(ll.getAt(7))












