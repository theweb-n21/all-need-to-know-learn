

 function sample(a,b,cb){
     var c = a+b
     var d = a - b

     var result = cb(c , d)

     return result
 }

 function sum(a,b){

    return a+b
 }

 console.log(sample(8,5,function(a,b){

    return a*b

 }))

 console.log(sample(8,5,function(a,b){
    return a / b
 }))