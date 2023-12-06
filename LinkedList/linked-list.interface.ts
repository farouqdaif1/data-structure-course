import { Node } from './node'
export interface ILinkedList<T> {
    size(): number;
    clear(): void;
    isEmpty(): boolean;
    addFirst(data: T): void;
    addLast(data: T): void;
    peekFirst(): T;

}