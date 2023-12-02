let N
require('readline').createInterface({input:process.stdin}).on('line',x=>N=x.split` `).on('close',()=>{
    let a=N.sort((a,b)=>b-a)
    if(a[0]!=a[2]&&(a[0]==a[1]||a[1]==a[2])) console.log(1000+a[1]*100)
    else if(a[0]==a[1]&&a[1]==a[2]) console.log(10000+a[0]*1000)
    else if(a[0]>a[1]) console.log(a[0]*100)
})