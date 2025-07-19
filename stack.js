// Follows LIFO ( last in first out )

class Stack {
    constructor() {
        this.items = [];
    }

    // Push element to the stack
    push(element) {
        this.items.push(element);
    }

    // Pop element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Peek at the top element
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Print the stack
    print() {
        console.log(this.items.join(" -> "));
    }
}

// Example usage
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.print();

console.log("Top element:", stack.peek());
console.log("Popped:", stack.pop());
stack.print();                             
