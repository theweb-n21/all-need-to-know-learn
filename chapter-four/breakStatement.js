 
 // Break statement


 
while(true){
    var rand = Math.floor(Math.random()*10 +1)
    if( rand === 9){
        console.log('winner winner chicken dinner')
       break
    }
    else{
        console.log(`you have got ${rand}`)
    }

}

for(var i = 1; i < 10; i++){
 if( i % 5 === 0 ){
    break

 }
 console.log(i)
}