let [i,...s]=require('fs').readFileSync('dev/stdin').toString().trim().split`\n`
s.forEach(x=>{
    console.log(`${x[0]}${x[x.length-1]}`)
})