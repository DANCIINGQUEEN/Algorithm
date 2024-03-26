let [a,b]=require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(e=>+e)
function p(a,b){
    let ip=new Array(b+1).fill(true)
    ip[0]=false
    ip[1]=false
    for(let i=2;i*i<=b;i++){
        if(ip[i]){
            for(let j=i*i;j<=b;j+=i){
                ip[j]=false
            }
        }
    }
    for(let i=a;i<=b;i++){
        if(ip[i]) console.log(i)
    }
}
p(a,b)