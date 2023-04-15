// 5. we can pass function as an Arguments

function add(a,b){
    return a+b; 
}

function manipulate(a,b,func) {

    var c = func(a,b);

    function multiplication(){
        return a * c;
    }

    return multiplication
    
}

var result = manipulate(5,6,add)

console.log(result());

// 6. we can return function from another function



