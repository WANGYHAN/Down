const {
    fork
} = require("child_process")

const child = fork("./son.js")

const http = require("http")

const server = http.createServer()

server.listen(8008)

child.send("server", server)