//search Data

var arr = [5,4,6,2,10,36,55,44,88,49]
var find = 10

function findElement (arr){
    for(var i = 0; i< arr.length; i++){
        if (arr[i] === find){
            return `Data found at index ${i}`
            
        }
    }
    
    return 'Data not found'
}

console.log(findElement(arr))