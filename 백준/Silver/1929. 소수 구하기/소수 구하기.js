let [a,b]=require('fs').readFileSync('dev/stdin').toString().trim().split` `.map(e=>+e)
function p(a,b){
    let r=new Array(b+1).fill(true)
    r[0]=r[1]=false
    let o=[]
        for(let i=2;i*i<=b;i++){
            if (r[i]){
                let s=Math.max(i*i,Math.ceil(a/i)*i)
                for (let j=s;j<=b;j+=i)r[j]=false
            }
    }
    for(let i=a;i<=b;i++)if(r[i])o.push(i)
    console.log(o.join('\n'))
}
p(a, b)