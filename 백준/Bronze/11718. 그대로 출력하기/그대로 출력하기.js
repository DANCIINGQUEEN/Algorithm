let i=require('fs').readFileSync('dev/stdin').toString().trim().split`\n`
i.forEach(x=>{
    console.log(x)
})