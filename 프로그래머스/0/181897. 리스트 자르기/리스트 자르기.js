function solution(n, s, l) {
    if(n==1) return l.slice(0,s[1]+1)
    else if(n==2) return l.slice(s[0])
    else if(n==3) return l.slice(s[0],s[1]+1)
    else return l.slice(s[0],s[1]+1).filter((_,i)=>!(i%s[2]))
}