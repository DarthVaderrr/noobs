const fs = require('fs');
const path = require('path');
const config = JSON.parse(fs.readFileSync('./page.json', { encoding: "UTF-8" })); //pages.json需要和脚本在同一目录下
const src = path.join(__dirname, './');  //定义存放pages的目录
let pages = config.pages || [];//pages数组
let comps = config.components || [];//components数组
pages=pages.concat(comps);
//依次生成数组中的page:
while (pages.length) {
    let page = pages.pop();
    let pathArr = page.split('/');
    let pageName = pathArr[pathArr.length - 1];
    
    //js文件模板,可随意更改:
    let pageCtx =
`import React from 'react'
import './${pageName}.css'
export default class ${pageName} extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return (<div>
            ${page}
            </div>)
    }
}`;
    //css文件模板:
    let cssCtx = `/*${page}.css*/`;
    //写入前判断page是否已经存在
    fs.exists(src + page + '.js', function (exists) {
        if (exists) {
            console.log(page+"文件已存在")
        } else {
            try {
                //生成js文件
                fs.writeFileSync(src + page + '.js', pageCtx, { encoding: "UTF-8", flag: "a" })
            } catch (err) {
                $$mkdir(path.join(src, page))
                fs.writeFileSync(src + page + '.js', pageCtx, { encoding: "UTF-8" })
                console.log('\033[40;32m' + page + '.js写入成功' + '\033[0m')
            };
            //生成css文件
            fs.writeFileSync(src + page + '.css', cssCtx, { encoding: "UTF-8", flag: "a" })
            console.log('\033[40;32m' + page + '.css写入成功' + '\033[0m')
        }
    })

}

/**
 * 同步递归创建路径,不知道为毛,mkdir的递归选项无效,先用这个来代替
 *
 * @param  {string} dir   处理的路径
 * @param  {function} cb  回调函数
 */
function $$mkdir(dir, cb) {
    var pathinfo = path.parse(dir)
    if (!fs.existsSync(pathinfo.dir)) {
        $$mkdir(pathinfo.dir, function () {
            fs.mkdirSync(pathinfo.dir)
        });
    };
    cb && cb();
}
