const firstName = Symbol();
const lastName = Symbol();
export class Employee{
    constructor(fn, ln){
        this[firstName] = fn;
        this[lastName] = ln;
    }
    get firstName(){
        return 'firstName -> ' + this[firstName]; 
    }
    get lastName(){
        return 'lastName -> ' + this[lastName]; 
    }
    print(){
        console.log(this.firstName, this.lastName);
    }
}
console.log("main loaded");