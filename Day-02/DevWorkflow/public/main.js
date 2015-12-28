(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxUcmFpbmluZ1xcU2F4by1SZWFjdC1EZWMtMjAxNVxcRGF5LTAyXFxEZXZXb3JrZmxvd1xcbm9kZV9tb2R1bGVzXFxndWxwLWJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiZmFrZV9hNDNjMzNiOS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUNBQSxJQUFNLFNBQVMsR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUMzQixJQUFNLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQzs7SUFDYixRQUFRLFdBQVIsUUFBUTtBQUNqQixhQURTLFFBQVEsQ0FDTCxFQUFFLEVBQUUsRUFBRSxFQUFDOzhCQURWLFFBQVE7O0FBRWIsWUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNyQixZQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ3ZCOztpQkFKUSxRQUFROztnQ0FXVjtBQUNILG1CQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlDOzs7NEJBUmM7QUFDWCxtQkFBTyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVDOzs7NEJBQ2E7QUFDVixtQkFBTyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDOzs7V0FWUSxRQUFRIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IGZpcnN0TmFtZSA9IFN5bWJvbCgpO1xyXG5jb25zdCBsYXN0TmFtZSA9IFN5bWJvbCgpO1xyXG5leHBvcnQgY2xhc3MgRW1wbG95ZWV7XHJcbiAgICBjb25zdHJ1Y3RvcihmbiwgbG4pe1xyXG4gICAgICAgIHRoaXNbZmlyc3ROYW1lXSA9IGZuO1xyXG4gICAgICAgIHRoaXNbbGFzdE5hbWVdID0gbG47XHJcbiAgICB9XHJcbiAgICBnZXQgZmlyc3ROYW1lKCl7XHJcbiAgICAgICAgcmV0dXJuICdmaXJzdE5hbWUgLT4gJyArIHRoaXNbZmlyc3ROYW1lXTsgXHJcbiAgICB9XHJcbiAgICBnZXQgbGFzdE5hbWUoKXtcclxuICAgICAgICByZXR1cm4gJ2xhc3ROYW1lIC0+ICcgKyB0aGlzW2xhc3ROYW1lXTsgXHJcbiAgICB9XHJcbiAgICBwcmludCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3ROYW1lLCB0aGlzLmxhc3ROYW1lKTtcclxuICAgIH1cclxufSJdfQ==
