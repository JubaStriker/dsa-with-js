class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 || l2 || carry) {
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2?.val : 0;

        const sum = x + y + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null
    }

    return dummyHead.next;
}

function arrayToLinkedList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;

    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummyHead.next;
}

// Modified test case
const l1 = arrayToLinkedList([2, 4, 3]);
const l2 = arrayToLinkedList([5, 6, 4]);

console.log(addTwoNumbers(l1, l2));