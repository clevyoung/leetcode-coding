class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return true;
        } 
        let temp = this.root;
        while (true) {
            if(newNode.value === temp.value) return undefined
            // 작은 경우
            if (value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode
                    return this;
                }
                temp = temp.left;
                
            // 큰 경우
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
                
            }
        }
    }

    contains(value) {
        if(!this.root) return false;
        let temp = this.root;
        while (true) {
            if (temp.value === value) return true;

            if (value < temp.value) {
                if (temp.left === null) return false;
                temp = temp.left
            } else {
                if (temp.right === null) return false;
                temp = temp.right
            }
        }

        
    }
}

let myBST = new BST();

    myBST.insert(47);
    myBST.insert(21);
    myBST.insert(76);
    myBST.insert(18);
    myBST.insert(27);
    myBST.insert(52);
myBST.insert(82);
    console.log(myBST.contains(12))