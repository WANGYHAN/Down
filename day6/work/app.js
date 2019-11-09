#! /usr/bin/env node

const path = require("path")
const fs = require("fs")
const {
    spawn
} = require("child_process")


const url = path.join(__dirname, process.argv[2])

const conServer = createServer()

const watcher = fs.watch(url)


watcher.on("change", () => {
    console.log("文件发生了改变")
    conServer.kill()
    createServer()
})


function createServer() {
    const child = spawn("node", [url])
    child.stdout.on("data", (data) => {
        console.log("stdout" + data)
    })
    return child
}