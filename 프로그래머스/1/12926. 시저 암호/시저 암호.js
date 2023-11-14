function solution(s, n) {
    let a='abcdefghijklmnopqrstuvwxyz'
    let c=''
    s.split``.forEach(x=>{
        let A=a.indexOf(x.toLowerCase())
        if(x===' '){
            console.log(x)
            c+=x
        }
        else if(x.toUpperCase()===x){
            if(a[A+n]===undefined){
                c+=a.repeat(2)[A+n].toUpperCase()
            }
            else{ 
                c+=a[A+n].toUpperCase()
            }
        }
        
        else{
            if(a[A+n]===undefined){
                c+=a.repeat(2)[A+n]
            }
             else {
                  c+=a[A+n]
             }
        }
    })
    console.log(c)
    return c
}