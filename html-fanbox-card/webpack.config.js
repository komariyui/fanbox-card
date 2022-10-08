const path=require('path')
module.exports={
    entry:'./js/classMain.js',
    output:{
        filename:'card.js',
        path:path.resolve(__dirname,"dist")

    },
    mode:'production'//development
}