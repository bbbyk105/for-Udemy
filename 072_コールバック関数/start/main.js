// function hello(callback, lastname) {
//     console.log('hello' + callback(lastname));
// }


// function getName(){
//     return 'Kondo Byakko';
// }
// const getFirstName =function(){
//     return 'kondo';
// }

// hello(function(name){
//     return 'kondo' + name;
// }, 'byakko');

function doSomething(a, b ,callback){
    const result = callback(a,b);
    console.log(result);
}

function multiply(a,b) {
    return a * b;
}

function plus(a, b) {
    return a + b;
}

doSomething(2 ,2, multiply);