"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DynamicArray {
    constructor(capacity = 16) {
        this._size = 0; //length user think array is 
        this._capacity = 0; //actual array size
        if (capacity < 0)
            throw new Error("Illegal Capacity: " + capacity);
        this._capacity = capacity; //add capacity of  the array
        this._array = new Array(capacity); //create array with capacity
    }
    //method to get the size of the array
    size() {
        return this._size;
    }
    //method to check if the array is empty
    isEmpty() {
        return this.size() == 0;
    }
    //method to get the element at a given index
    get(index) {
        return this._array[index];
    }
    //method to set the element at a given index
    set(index, item) {
        this._array[index] = item;
    }
    //method to clear the array
    clear() {
        for (let i = 0; i < this._capacity; i++) {
            this._array[i] = null;
        }
        this._size = 0;
    }
    //method to add an element to the array
    add(element) {
        //time to resize my array if the number of elements is equal to the capacity
        if (this._size + 1 >= this._capacity) { //check if adding an element will exceed the capacity
            if (this._capacity == 0) {
                this._capacity = 1;
            } //if capacity is 0 then make it 1
            else {
                this._capacity *= 2;
            } //else double the capacity
            const new_array = new Array(this._capacity);
            for (let i = 0; i < this._size; i++) {
                new_array[i] = this._array[i];
            }
            9;
            this._array = new_array; // arr has extra nulls padded
        }
        this._array[this._size++] = element; //add new value to the array 
    }
    //remove element at specified index in this list 
    removeAt(index) {
        if (index < 0 || index >= this._size)
            throw new Error("Wrong number");
        const data = this._array[index];
        const new_array = new Array(this._size - 1);
        for (let i = 0, j = 0; i < this._size; i++, j++) {
            if (i == index) {
                j--;
            }
            else {
                new_array[j] = this._array[i];
            }
        }
        this._array = new_array;
        this._capacity = --this._size;
        return data;
    }
    remove(obj) {
        for (let i = 0; i < this._size; i++) {
            if (this._array[i] == (obj)) {
                this.removeAt(i);
                return true;
            }
        }
        return false;
    }
    indexof(obj) {
        for (let i = 0; i < this._size; i++) {
            if (obj === this._array[i]) {
                return i;
            }
        }
        return -1;
    }
    contains(obj) {
        return this.indexof(obj) !== -1;
    }
    toString() {
        if (this._size === 0) {
            return "[]";
        }
        else {
            const sb = ["["];
            for (let i = 0; i < this._size; i++) {
                sb.push(this._array[i] + ",");
            }
            return sb.concat([this._array[this._size - 1] + "]"]).join("");
        }
    }
}
