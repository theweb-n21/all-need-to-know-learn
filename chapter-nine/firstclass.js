// First class function

function add(a,b){
    return a + b;
}

// 1. A function can be stored in a variable

var sum = add

console.log(sum(5,8))

// 2. A function can be stored in an array

var arr = []
arr.push(add)

console.log(arr[0](5,7))

// 3. A function can be stored in object

var obj = {
    sum: add
}

console.log(obj.sum(5,9))

// 4. We can create function as need 

setTimeout(function(){
 console.log('Hello world')
},2000)




