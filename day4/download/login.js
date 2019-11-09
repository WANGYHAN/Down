#! /usr/bin/env node


const program = require('commander');
const {
    version
} = require('./package.json');
const inquirer = require('inquirer');


const promptList = [{
        type: "input",
        message: "请输入用户名",
        name: "name",
        default: "user"
    },
    {
        type: "password",
        message: "请输入密码",
        name: "pwd",
        default: "password"
    }
]

program
    .version(version, "-v --version")
    .command('init <filename>')
    .option('-a --add-file', 'add filename')
    .option('-d --del', 'del filename')
    .action((dir, cmd) => {
        console.log(dir, cmd)
        inquirer.prompt(promptList).then((answers) => {
            console.log(answers, 'answer');
            let {
                name,
                pwd
            } = answers;
            if (name == 'zs' && pwd == '123') {
                console.log('登录成功');
            } else {
                console.log('登录失败');
            }

        })

    })



program.parse(process.argv);