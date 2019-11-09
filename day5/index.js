#! /usr/bin/env node

//进程事件
process.on('beforeExit', (code) => {
    console.log('进程 beforeExit 事件的代码: ', code);
});

process.on('exit', (code) => {
    console.log('进程 exit 事件的代码: ', code);
});

console.log('此消息最新显示');


const fs = require("fs")
const child_process = require("child_process")
for (var i = 0; i < 3; i++) {
    var workerProcess = child_process.exec('node support.js ' + i, function (error, stdout, stderr) {

    });

    workerProcess.on('exit', function (code) {
        console.log('子进程已退出，退出码 ' + code);
    });
}
//
for (var i = 0; i < 3; i++) {
    var workerProcess = child_process.spawn('node', ['support.js', i]);

    workerProcess.on('close', function (code) {
        console.log('子进程已退出，退出码 ' + code);
    });
}

// api | 说明
//     -- - | -- -
//     process.env | 环境变量， 例如通过process.env.NODE_ENV获取不同环境项目的配置信息 process.env.PORT | 获取端口号 set PORT = XXXX 设置端口号
// process.pid | 获取当前进程id
// process.argv | 获取命令行参数
// process.cwd() | 获取当前进程的工作目录
// process.platform | 获取当前进程运行的操作系统平台
// process.uptime | 当前进程已运行时间
// process.stdout | 标准输出流
// process.stdin | 标准输入流
// process.stderr | 标准错误输出流
// process.title | 指定进程名称

// 例： 起个服务， 任务管理器里看下进程

//     ``
// `
// const  http = require('http')

// const server = http.createServer((req,res)=>{
//     res.end('ok')
// })

// server.listen(9090,() => {
//     console.log("服务启动成功"+process.pid)
// }

// console.log(process.env)
// console.log(process.env.NODE_ENV)


const http = require("http")
const server = http.createServer((req, res) => {
    res.end("ok")
})
server.listen(8080, () => {
    console.log("服务启动成功")
})
console.log(process.pid)
console.log(process.platform)
console.log(process.cwd())
console.log(process.stderr)
console.log(process.stdin)
console.log(process.stdout)
console.log(process.title)