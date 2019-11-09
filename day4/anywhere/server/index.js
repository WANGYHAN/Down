const express = require("express")
const path = require("path")
const app = express()
const file = require("./middleware/file")

app.use((express.static(process.cwd())))

app.set("views", path.join(__dirname, "views"))

app.set("view engine", "ejs")

app.use(file)

module.exports = app