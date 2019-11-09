console.log("子进程---------------4")

process.on("message", (msg) => {
    console.log(msg)
    let txt = msg + "\n\n" + "子进程第一次向主进程发送数据"
    process.send(txt)
})