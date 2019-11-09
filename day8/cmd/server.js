//下载express  npm i express -S
const express = require('express')
const app = express()

const path = require("path")
const fs = require("fs")
const processCwd = process.cwd()
app.use((express.static(processCwd)))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

const file = (req, res, next) => {
    const filepath = path.join(processCwd, req.url)
    if (fs.existsSync(filepath)) {
        if (fs.statSync(filepath).isDirectory()) {
            const list = fs.readdirSync(filepath)
            res.render("list.ejs", {
                list
            })
        } else {
            next()
        }
    }
}
app.use(file)
module.exports = app