
const arr = [5,2,8,9,4]

const sum = arr.reduce(function(prev, curr){
    return prev + curr
})

console.log(sum)


function reduce( arr, cb, acc){

for(let i = 0 ; i < arr.length; i++){
    acc = cb(acc,arr[i])
}

return acc

}

console.log(reduce(arr,function(pre,curr){

    return pre+curr
}))





// console.log(reduce(arr,function(pre,curr){
//     return pre*curr

// }))