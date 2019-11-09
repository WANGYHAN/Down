const fs = require("fs")
const path = require("path")

const processCwd = process.cwd()
module.exports = (req, res, next) => {
    const filepath = path.join(processCwd, req.path)
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