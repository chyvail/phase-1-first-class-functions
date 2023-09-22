function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return a;
}

function a(){
    return 'This is a named function'
}

console.log(returnsANamedFunction()());

function returnsAnAnonymousFunction(){
    return ()=>{
        return 'This is an empty function';
    }
}

console.log(returnsAnAnonymousFunction()());