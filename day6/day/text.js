#! /usr/bin/env node

const http = require("http")


http.createServer((req, res) => {
    res.end()
}).listen(9999)
console.log(`工作进程${process.pid}已启动`)