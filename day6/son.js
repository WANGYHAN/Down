const http = require("http")

const serverson = http.createServer((req, res) => {
    if (req.url == "/list") {
        res.end("list")
    } else {
        res.end("home")
    }
})

process.on("message", (msg, txt) => {
    console.log(msg)
    txt.on("connection", (idx) => {
        serverson.emit("connection", idx)
    })
})