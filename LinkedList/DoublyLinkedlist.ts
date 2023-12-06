import { ILinkedList } from "./linked-list.interface";
import { Node } from "./node";
export class DoublyLInkedList<T> implements ILinkedList<T>{
  private _head: Node<T> | null = null;
  private _tail: Node<T> | null = null;
  private _size: number = 0;


  clear(): void {
    let trav: Node<T> | null = this._head; //save the data for the head 
    while (trav !== null) {
      const next: Node<T> | null = trav.next;
      trav.next = trav.prev = null;
      trav.data = null as any;
      trav = next;
    }
    this._head = this._tail = trav = null;
    this._size = 0;
  }
  size(): number {
    return this._size
  }
  isEmpty(): boolean {
    return this._size == 0;
  }
  addFirst(data: T): void {
    const node = new Node(data);
    if (this.isEmpty()) {
      this._head = this._tail = node
    } else {
      this._head!.prev = node;
      node.next = this._head
      this._head = node
    }
    this._size++;
  }
  addLast(data: T): void {
    const node = new Node(data);
    if (this.isEmpty()) {
      this._head = this._tail = node;
    }
    else {
      this._tail!.next = node //update next for the tail with new node 
      this._tail = this._tail!.next //update tail for linked list 
    }
    this._size++;
  }
  peekFirst(): T {
    if (this.isEmpty()) throw new Error("Empty list");
    return this._head!.data;
  }
  peekLast(): T {
    if (this.isEmpty()) throw new Error("Empty list");
    return this._tail!.data;
  }
  removeFirst(): void {
    if (this.isEmpty()) {
      throw new Error("Empty list");
    }
    this._head = this._head!.next
    this._size--
    if (this.isEmpty()) {
      this._tail = null
    } else {
      this._head!.prev = null;
    }
  }
  removeLast(): void {
    if (this.isEmpty()) throw new Error("Array is Empty");
    this._tail = this._tail!.prev
    this._size--
    if (this.isEmpty()) {
      this._head = null
    } else {
      this._tail!.next = null
    }
  }
  remove(node: Node<T>): void {
    if (node.prev === null) this.removeFirst();
    if (node.next === null) this.removeLast();
    node.next!.prev = node.prev;
    node.prev!.next = node.next;
    node.data = null as any;
    node.prev = node.next = null;
    this._size--
  }
  removeAt(index: number): void {
    if (index < 0 || index > this._size) throw new Error("Invalid index");
    //search from the front of the list 
    let trav: Node<T>;
    if (index < this._size / 2) {
      for (let i = 0, trav = this._head; i !== index; i++) {
        trav = trav!.next
      }
    } else {
      // search from the back of the list 
      for (let i = this._size, trav = this._tail; i !== index; i--) {
        trav = trav!.prev
      }
    }
    this.remove(trav!);
  }
  indexOf(obj: T): number {
    let index: number = 0;
    let trav: Node<T> | null;
    ///search for nulls in linked list 
    if (obj === null) {
      for (trav = this._head; trav !== null; trav = trav.next) {
        if (trav.data === null) {
          return index;
        }
      }
    } else {
      for (trav = this._head; trav !== null; trav = trav.next) {
        index++
        if (trav.data === obj) {
          return index;
        }
      }
    }
    return -1;
  }

}
const myLinkedList = new DoublyLInkedList<number>();

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
console.log("Removed first element:", myLinkedList);s

// console.log("Last element:", myLinkedList.peekLast());

// console.log("myLinkedList:", myLinkedList);

// // // Other operations;
console.log("Linked list size:", myLinkedList.size());
console.log("Is linked list empty?", myLinkedList.isEmpty())
console.log("Linked list size:", myLinkedLis.);

