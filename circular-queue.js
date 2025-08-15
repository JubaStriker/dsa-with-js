class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(element) {
        if (this.isFull()) {
            return "Queue is full";
        }
        this.rear = this.rear + 1;
        this.items[this.rear] = element;
        this.currentLength += 1;
        if (this.front === -1) {
            this.front = this.rear;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = this.front + 1;
        this.currentLength -= 1;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
    }
}