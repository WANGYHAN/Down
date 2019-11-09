const Koa = require('koa')

const app = new Koa()
app.use(async ctx => {
    ctx.body = "Hello World"
})

// 显示网络
const os = require("os").networkInterfaces()
console.log(os)
app.listen(3000)