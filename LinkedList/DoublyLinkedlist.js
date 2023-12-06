"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLInkedList = void 0;
const node_1 = require("./node");
class DoublyLInkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }
    clear() {
        let trav = this._head; //save the data for the head 
        while (trav !== null) {
            const next = trav.next;
            trav.next = trav.prev = null;
            trav.data = null;
            trav = next;
        }
        this._head = this._tail = trav = null;
        this._size = 0;
    }
    size() {
        return this._size;
    }
    isEmpty() {
        return this._size == 0;
    }
    addFirst(data) {
        const node = new node_1.Node(data);
        if (this.isEmpty()) {
            this._head = this._tail = node;
        }
        else {
            this._head.prev = node;
            node.next = this._head;
            this._head = node;
        }
        this._size++;
    }
    addLast(data) {
        const node = new node_1.Node(data);
        if (this.isEmpty()) {
            this._head = this._tail = node;
        }
        else {
            this._tail.next = node; //update next for the tail with new node 
            this._tail = this._tail.next; //update tail for linked list 
        }
        this._size++;
    }
    peekFirst() {
        if (this.isEmpty())
            throw new Error("Empty list");
        return this._head.data;
    }
    peekLast() {
        if (this.isEmpty())
            throw new Error("Empty list");
        return this._tail.data;
    }
    removeFirst() {
        if (this.isEmpty()) {
            throw new Error("Empty list");
        }
        this._head = this._head.next;
        this._size--;
        if (this.isEmpty()) {
            this._tail = null;
        }
        else {
            this._head.prev = null;
        }
    }
    removeLast() {
        if (this.isEmpty())
            throw new Error("Array is Empty");
        this._tail = this._tail.prev;
        this._size--;
        if (this.isEmpty()) {
            this._head = null;
        }
        else {
            this._tail.next = null;
        }
    }
    remove(node) {
        if (node.prev === null)
            this.removeFirst();
        if (node.next === null)
            this.removeLast();
        node.next.prev = node.prev;
        node.prev.next = node.next;
        node.data = null;
        node.prev = node.next = null;
        this._size--;
    }
    removeAt(index) {
        if (index < 0 || index > this._size)
            throw new Error("Invalid index");
        //search from the front of the list 
        let trav;
        if (index < this._size / 2) {
            for (let i = 0, trav = this._head; i !== index; i++) {
                trav = trav.next;
            }
        }
        else {
            // search from the back of the list 
            for (let i = this._size, trav = this._tail; i !== index; i--) {
                trav = trav.prev;
            }
        }
        this.remove(trav);
    }
    indexOf(obj) {
        let index = 0;
        let trav;
        ///search for nulls in linked list 
        if (obj === null) {
            for (trav = this._head; trav !== null; trav = trav.next) {
                if (trav.data === null) {
                    return index;
                }
            }
        }
        else {
            for (trav = this._head; trav !== null; trav = trav.next) {
                index++;
                if (trav.data === obj) {
                    return index;
                }
            }
        }
        return -1;
    }
}
exports.DoublyLInkedList = DoublyLInkedList;
const myLinkedList = new DoublyLInkedList();
// Add elements
myLinkedList.addLast(2);
myLinkedList.addFirst(3);
console.log("myLinkedList:", myLinkedList);
// Access elements
console.log("First element:", myLinkedList.peekFirst());
console.log("Last element:", myLinkedList.peekLast());
// // Remove elements
// const removedFirst = myLinkedList.removeFirst();
const removedLast = myLinkedList.removeLast();
console.log("Removed first element:", myLinkedList);
s;
// console.log("Last element:", myLinkedList.peekLast());
// console.log("myLinkedList:", myLinkedList);
// // // Other operations;
console.log("Linked list size:", myLinkedList.size());
console.log("Is linked list empty?", myLinkedList.isEmpty());
// console.log("Linked list size:", myLinkedLis.);
