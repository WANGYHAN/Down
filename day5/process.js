const child = require("child_process")


child.exec("node ./child1.js", (error, stdout, stderr) => {
    console.log("主进程执行的是child1")
    console.log(stdout, "stdout1")
    console.log(stderr, "stderr1")
})

child.execFile("node", ["./child2.js"], (error, stdout, stderr) => {
    console.log("主进程执行的是child2")
    console.log(stdout, "stdout2")
    console.log(stderr, "stderr2")
})

let child3 = child.spawn("node", ["./child3.js"])
child3.stdout.on("data", (data) => {
    console.log(`spawn:${data}`)
})

let child4 = child.fork("./child4.js")

child4.send("主进程第一次向子进程发送数据")
child4.on("message", (msg) => {
    console.log(msg)
})