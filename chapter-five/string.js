// what is string
 
// var n = 10
// var str = String(n)

// console.log(str)


// var a = 'abcd'
// var b = 'Abcd'

// string Method

// var a = 'I am'
// var b = 'Nazmul islam'

// var c = a.concat(' ', b)

// // var d = c.substr(8)

// // console.log(d)

// console.log(c.charAt(0))
// console.log(c.startsWith('i'))
// console.log(c.endsWith('m'))
// console.log(a.toUpperCase())
// console.log(b.toLowerCase())
// console.log(c.split(''))


var str = 'some string'

var length = 0

while(true){
    if(str.charAt(length) == ''){
        break
    } else{
        length++
    }

}

console.log(length)
