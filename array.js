// const array = ["1", "2", "3"];

class MyArray {
    
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length--;
        return this.data;
    }

    pop() {
        const lastItem = this.data[this.length - 2];
        delete this.data[this.length - 2];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }
    
    shiftIndex(index) {
        for(let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length++;
    }

    unshift(item) {
        
        if (!item) {
            return this.length;
        }

        if (this.length !== 0) {

            const firstItem = this.data[0];

            for (let i = this.length - 1; i >= 0; i--) {
                this.data[i + 1] = this.data[i];
            }
        }

        this.data[0] = item;
        this.length++;
        
        return this.length;
    }

    shift() {

        if (this.length !== 0) {
            
            const firstItem = this.data[0];

            for (let i = 0; i < this.length; i++) {
                this.data[i] = this.data[i + 1];
            }

            this.length--;
        
            return "First Item Deleted: " + firstItem;
        }
        else {
            return "Array is Empty";
        }

    }
}

const myArray = new MyArray();

// MMA 300724

alert("Mensaje");
confirm("Desea continuar");