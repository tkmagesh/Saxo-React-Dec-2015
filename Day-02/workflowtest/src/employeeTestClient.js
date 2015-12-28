import {Employee, add} from './Employee';
window.employee = new Employee("Magesh", "Kuppan");

console.log(employee.print());
console.log(add(100,200));


var product = {
    id : 100,
    name : 'Magesh'
}

var {id, name} = product;

console.log(id,name);
