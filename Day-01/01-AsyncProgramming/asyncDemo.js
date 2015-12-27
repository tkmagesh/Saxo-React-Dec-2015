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
        var result = x + y;
        console.log("[SP] returning result");
        //return result;    
        if (typeof onResult === 'function')
            onResult(result);
    },3000);
    
}

//Consumer
//modify the below to handle the error and display a meaniful message
function addAsyncClient(x,y){
    console.log("[SC] triggering add");
    addAsync(x,y, function(result){
        console.log("[SC] result = ", result);    
    });
}
