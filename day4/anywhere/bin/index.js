#! /usr/bin/env node

const path = require("path")
const args = process.argv.slice(2)
const {
    version
} = require("../package.json")

const app = require(path.join(__dirname, "../server/index"))

let ports = 8088


const {
    networkInterfaces
} = require("os")


const verSion = {
    "-v"() {
        console.log(version)
    },
    "-p"() {
        if (args[1]) {
            console.log("端口号" + args[1])
            ports = args[1]
            app.listen(args[1], () => {
                console.log("服务启动成功")
            })
        }
    }
}
if (args.length == 0) {
    console.log("还没有传递参数")
} else {
    verSion[args[0]] && verSion[args[0]]()
}

const webName = ["以太网6", "宽带连接", "WLAN"]

const webFind = webName.find(item => networkInterfaces()[item])

let webUrl = ""
if (webFind) {
    webUrl = networkInterfaces()[webFind].find(item => item.family == "IPv4").address
}
const pathURL = `http://${webUrl}:${ports}`

const {
    exec
} = require("child_process")

exec(`start${pathURL}`)