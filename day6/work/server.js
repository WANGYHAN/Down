#! /usr/bin/env node

const http = require("http")

const obj = {
    "/json": "application/json",
    "/txt": "text/plain",
    "/jpeg": "image/jpeg"
}

const server = http.createServer((req, res) => {
    const type = req.url
    res.writeHead(200, {
        "Content-Type": obj[type]
    })

    if (req.url == "/json") {
        res.end("json")
    } else if (req.url == "/txt") {
        res.end("txt")
    } else if (req.url == "/jpeg") {
        res.end("jpeg")
    }



})


server.listen(8088, () => {
    console.log("服务启动成功,第三次尝试")
})