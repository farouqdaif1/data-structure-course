export class DynamicArray<T>  {
    private _array: T[]; //the internal static array and start with _ is to indicate that a variable is private
    private _size: number = 0; //length user think array is 
    private _capacity: number = 0; //actual array size
    constructor(capacity: number = 16) {
        if (capacity < 0) throw new Error("Illegal Capacity: " + capacity);
        this._capacity = capacity; //add capacity of  the array
        this._array = new Array<T>(capacity); //create array with capacity
    }
    //method to get the size of the array
    size(): number {
        return this._size;
    }
    //method to check if the array is empty
    isEmpty(): boolean {
        return this.size() == 0;
    }
    //method to get the element at a given index
    get(index: number): T {
        return this._array[index];
    }
    //method to set the element at a given index
    set(index: number, item: T): void {
        this._array[index] = item;
    }
    //method to clear the array
    clear(): void {
        for (let i = 0; i < this._capacity; i++) {
            this._array[i] = null as any;
        }
        this._size = 0;
    }
    //method to add an element to the array
    add(element: T): void {
        //time to resize my array if the number of elements is equal to the capacity
        if (this._size + 1 >= this._capacity) { //check if adding an element will exceed the capacity
            if (this._capacity == 0) { this._capacity = 1; } //if capacity is 0 then make it 1
            else { this._capacity *= 2; } //else double the capacity
            const new_array: T[] = new Array<T>(this._capacity);
            for (let i = 0; i < this._size; i++) {
                new_array[i] = this._array[i];
            } 9
            this._array = new_array; // arr has extra nulls padded
        }
        this._array[this._size++] = element; //add new value to the array 

    }
    //remove element at specified index in this list 
    removeAt(index: number): T {
        if (index < 0 || index >= this._size) throw new Error("Wrong number")
        const data: T = this._array[index];
        const new_array: T[] = new Array(this._size - 1);
        for (let i = 0, j = 0; i < this._size; i++, j++) {
            if (i == index) {
                j--

            } else {
                new_array[j] = this._array[i]
            }
        }
        this._array = new_array
        this._capacity = --this._size
        return data;
    }
    remove(obj: Object): boolean {
        for (let i = 0; i < this._size; i++) {
            if (this._array[i] == (obj)) {
                this.removeAt(i);
                return true;
            }
        }
        return false;
    }
    indexof(obj: Object): number {
        for (let i = 0; i < this._size; i++) {
            if (obj === this._array[i]) {
                return i;
            }
        }
        return -1;
    }
    contains(obj: Object): boolean {
        return this.indexof(obj) !== -1;
    }
    toString(): string {
        if (this._size === 0) {
            return "[]";
        } else {
            const sb: string[] = ["["]
            for (let i = 0; i < this._size; i++) {
                sb.push(this._array[i] + ",")
            }
            return sb.concat([this._array[this._size - 1] + "]"]).join("");
        }

    }
}
