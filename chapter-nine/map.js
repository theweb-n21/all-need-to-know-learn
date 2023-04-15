
let arr ={
     value:[1,5,8,9,3],

     map: function (cb){

        let arr2 = []
    
    for(let i = 0; i < this.value.length; i++){
    
        arr2.push(cb(this.value[i],i,this.value))
        
    }
    
    return arr2
    
    }
    
    
    }



console.log(arr.map(function(element){
    return element*2
}))

