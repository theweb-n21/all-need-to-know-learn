

const arr = [7,4,8,6,2,5,4,8,14]

// let result =  arr.find(function(value){
//     return value === 8
// })

// console.log(result)

function find(arr,cb){
    for(let i = 0; i < arr.length;i++){

        if(cb(arr[i])){
            return arr[i]
        }

    }
}

console.log(find(arr,function(value){

    return value === 8
}))