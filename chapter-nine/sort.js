const person =[
    {
        name:'sunny',
        age: 28
    },
    {
        name:'sagor',
        age: 23
    },

    {
        name:'Mithu',
        age: 25
    },
    {
        name:'shad',
        age: 29
    }

    
] 

const arr = [4,8,5,9,6,-1,-8,10,100,-200]

// console.log(arr.sort());


// arr.sort(function(a,b){
//     if(a<b){
//         return -1 
//     }
//     else if(a>b){
//         return 1
//     }
//     else{
//         return 0
//     }
// })

// console.log(arr)




function sort(arr){

    let pivot = arr[arr.length-1]
    let leftArr = []
    let rightArr = []

    if(arr.length < 2){
        return arr
    }

    for(let i = 0; i<arr.length-1; i++){
        if(arr[i] < pivot){
            rightArr.push(arr[i])
        }
        else if(arr[i] > pivot){
            leftArr.push(arr[i])
        }
    }
    
    return [...sort(leftArr),pivot ,...sort(rightArr)]

} 

let a = sort(arr)
console.log(a)