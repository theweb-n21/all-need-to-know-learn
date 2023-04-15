// function something(greet, name){

//     function sayHi(){
//         console.log(greet,name)
//     }

//     sayHi()
// }

// something('Good morning', 'Nazmul islam')

function something(greet, name){

    function getFirstNme(){
        return name ? name.split(' ')[0] : null;
    }

    var massage = `${greet} ${getFirstNme()}`

    console.log(massage);

}


something('Good morning', 'Nazmul islam')