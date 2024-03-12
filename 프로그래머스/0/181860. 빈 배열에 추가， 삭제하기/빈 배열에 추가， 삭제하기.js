function solution(arr, f) {
    let a=[]
    for(let i=0;i<f.length;i++){
        if(f[i]) for(let j=0;j<arr[i]*2;j++) a.push(arr[i])
        else for(let j=0;j<arr[i];j++) a.pop()
    }
    return a
}