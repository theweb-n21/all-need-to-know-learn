
const arr = [4,5,6,2,3,8,9]

function filter(arr,cb){

const newArray = []
for(let i = 0; i< arr.length; i++){
    if(cb(arr[i])){
        newArray.push(arr[i])
    }
}

return newArray

}

console.log(filter(arr,function(element){
   return element % 2 !== 0
}))