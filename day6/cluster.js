const cluster = require("cluster")
console.log(process.pid)
const http = require("http")
if (cluster.isMaster) {
    console.log(process.pid)
    for (let i = 0; i < 8; i++) {
        cluster.fork()
    }
    cluster.on("exit", (worker) => {
        console.log(worker.process.pid)
        cluster.fork()
        
    })
} else {
    http.createServer((req, res) => {
        res.end("cluster")
    }).listen(8088)
}