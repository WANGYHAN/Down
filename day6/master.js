const {
    fork
} = require("child_process")

const http = require("http")

http.createServer((req, res) => {
    if (req.url == "/list") {
        const child = fork("./child.js")

        child.send("进入子进程")

        child.on("message", (msg) => {
            console.log(msg)
        })

    } else {
        res.end("home")
    }
}).listen(8088)