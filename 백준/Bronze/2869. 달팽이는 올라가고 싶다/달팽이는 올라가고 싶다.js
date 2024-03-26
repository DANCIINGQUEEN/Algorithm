let [a,b,v]=require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(e=>+e)
console.log(Math.ceil((v-a)/(a-b))+1)