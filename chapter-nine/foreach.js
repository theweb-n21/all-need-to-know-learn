
var arr2 = {
    value: [1,2,3,4,5],
    foreach2: function(cd){
        for(let i = 0; i < this.value.length; i++){

            cd(this.value[i],i,this.value)

        }
    }
}

arr2.foreach2(function(element,index,arr){
    console.log(element,index,arr)

})
// arr.forEach(function(element,index,arr){

//     console.log(element , index, arr)

// })

// function foreach2(arr,cb){
//     for(let i = 0; i< arr.length; i++){

//          cb(arr[i],i,arr)
//     }
// }

// foreach2(arr2,function(element){
//     console.log(element)

// })
