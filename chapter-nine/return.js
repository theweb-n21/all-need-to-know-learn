

function greet(msg){
    function greetings(name){
        return `${msg} ${name} `
    }

    return greetings
}


var gd = greet('Good morning')

console.log(gd('sunny'))