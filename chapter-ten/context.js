
// Execution context

function a() {

    b()
    console.log('I am function A')
}

function b(){
    d()

    console.log('I am function B')
}

function c(){
    console.log('I am function C')

}

function d(){
    c()

    console.log('I am function D')

}


var x = 100

a()

console.log('I am Global b ')

// global context 



//every execution context have two phase

// 1. creation phase
// 2. executional phase
