Create an object and assign it to a variable 'spinner'
The object is expected to exhibit the following behavior

var spinner = ....
spinner.up() //=> 1
spinner.up() //=> 2
spinner.up() //=> 3
spinner.up() //=> 4

spinner.down() //=> 3
spinner.down() //=> 2
spinner.down() //=> 1
spinner.down() //=> 0
spinner.down() //=> -1

//factory
var spinner = (function(){
    var count = 0;
    function increment(){
        return ++count;
    }
    function decrement(){
        return --count;
    }
    return {
        up : increment,
        down : decrement
    }
})();


//constructor function
function Spinner(){
    var count = 0;
    this.up = function(){
        return ++count;
    };
    this.down = function(){
        return --count;
    };
}

var Spinner = (function(){
    function Spinner(){
        this.__count = 0;
    }
    Spinner.prototype.up = function(){
        return ++this.__count;
    };
    Spinner.prototype.down = function(){
        return --this.__count;
    }
    return Spinner;
})();


