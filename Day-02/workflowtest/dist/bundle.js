(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add = add;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var firstName = Symbol();
var lastName = Symbol();

var Employee = exports.Employee = (function () {
    function Employee(fn, ln) {
        _classCallCheck(this, Employee);

        this[firstName] = fn;
        this[lastName] = ln;
    }

    _createClass(Employee, [{
        key: 'print',
        value: function print() {
            console.log(this.firstName, this.lastName);
        }
    }, {
        key: 'firstName',
        get: function get() {
            return 'firstName -> ' + this[firstName];
        }
    }, {
        key: 'lastName',
        get: function get() {
            return 'lastName -> ' + this[lastName];
        }
    }]);

    return Employee;
})();

function add(x, y) {
    return x + y;
}
console.log("main loaded");

},{}],2:[function(require,module,exports){
"use strict";

var _Employee = require("./Employee");

window.employee = new _Employee.Employee("Magesh", "Kuppan");
console.log(employee.print());
console.log((0, _Employee.add)(100, 200));

var product = {
    id: 100,
    name: 'Magesh'
};

var id = product.id;
var name = product.name;

console.log(id, name);

},{"./Employee":1}]},{},[2]);
