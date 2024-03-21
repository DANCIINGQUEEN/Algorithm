let i=require('fs').readFileSync('dev/stdin').toString().trim().split`\n`
i.pop()
i.forEach(x=>{
    function p(x){
        for(let j=0;j<x.length/2;j++){
            if(x[j]!==x[x.length-1-j]) return false
        }
        return true
    }
    console.log(p(x)?"yes":"no")
})