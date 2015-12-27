/* Sync */
//Provider
function add(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var result = x + y;
    console.log("[SP] returning result");
    return result;
}

//Consumer
function addClient(x,y){
    console.log("[SC] triggering add");
    var result = add(x,y);
    console.log("[SC] result = ", result);
}

/* Async */

//Provider
function addAsync(x,y,onResult){
    console.log("[SP] processing ", x , " and ", y);
    setTimeout(function(){
        //if either x or y is (undefined | null | 0) throw error
        if (!x || !y) {
            var err = new Error("invalid arguments");
            return onResult(err, null);
        }
        var result = x + y;
        console.log("[SP] returning result");
        //return result;    
        if (typeof onResult === 'function')
            onResult(null, result);
    },3000);
    
}

//Consumer
//modify the below to handle the error and display a meaniful message
function addAsyncClient(x,y){
    console.log("[SC] triggering add");
    addAsync(x,y, function(err, result){
        if (err){
            console.log("error occured..", err);
            return;
        }
        console.log("[SC] result = ", result);    
    });
}

//Provider
function Adder(){
    var _callbacks = [];

    this.add = function addAsync(x,y,onResult){
        console.log("[SP] processing ", x , " and ", y);
        setTimeout(function(){
            //if either x or y is (undefined | null | 0) throw error
            if (!x || !y) {
                var err = new Error("invalid arguments");
                _callbacks.forEach(function(callback){
                    callback(err);
                });
                return;
            }
            var result = x + y;
            console.log("[SP] returning result");
            //return result;
            _callbacks.forEach(function(callback){
                callback(null, result);
            })
        },3000);

    };
    this.onResult = function(callback){
        _callbacks.push(callback);
    }

}


//Promise
function addAsyncUsingPromise(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if (!x || !y){
                reject("invalid arguments");
            } else {
                var result = x + y;
                console.log("[SP] returning result");
                resolve(result);
            }
        },3000);
    });
    return promise;
}
