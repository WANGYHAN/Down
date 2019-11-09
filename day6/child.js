console.log("子进程")


function con() {
    let sum = 0
    for (let i = 0; i < 1e10; i++) {
        sum += i
    }
    return sum

}
process.on("message", (msg) => {
    console.log(msg)
    let total = con()
    process.send(`这是计算结果:${total}`)
})