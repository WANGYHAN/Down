#! /usr/bin/env node

const commander = require("commander")
const {
    version
} = require("./package.json")
const inpuirer = require("inpuirer")
const ora = require("ora")
const chalk = require("chalk")
const download = require("download-git-repo")
const {
    exec
} = require("child_process")

const promptList = [{
    type: "list",
    name: "names",
    choices: [
        "vue",
        "react"
    ]
}]
program
    .version(version, "-v --version")
    .command('init <filename>')
    .option('-a --add-file', 'add filename')
    .option('-d --del', 'del filename')
    .action((dir, cmd) => {

        const oraloding = ora('downloading ....');

        inquirer.prompt(promptList).then((answers) => {
            console.log(answers, 'answer');
            let {
                names
            } = answers;
            const url = 'github:Sea-of-Bitterness/' + names;

            oraloding.start();
            download(url, dir, function (err) {
                console.log(err ? 'Error' : 'Success')
                if (!err) {
                    oraloding.succeed();
                    console.log(chalk.blue('下载成功'));
                    const urlpath = path.join(process.cwd(), dir);
                    console.log(urlpath, 'url');
                    process.chdir(urlpath);
                    console.log(process.cwd(), '改变之后的');
                    exec('npm install');
                } else {
                    oraloding.fail();
                }

            })

        })

    })

program.parse(process.argv);