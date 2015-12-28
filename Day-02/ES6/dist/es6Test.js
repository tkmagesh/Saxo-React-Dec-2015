'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

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