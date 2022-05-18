// let http = require('http')
// let obj = {
//     name: "hello",
//     age: 12
// }
// http.createServer((request, response) => {
//     response.writeHead(200, {
//         'Content-Type': 'text/plain'
//     })
//     response.end("obj")
// }).listen(8888)
// console.log('Server running at http://127.0.0.1:8888')


let http = require("http")
http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': "text/plain"
    })
    response.end("hello world")
}).listen(23232)
console.log("Server running at http://127.0.0.1:23232")

let http = require('http')
http.createServer(200, )