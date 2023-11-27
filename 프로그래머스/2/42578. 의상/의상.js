function solution(clothes) {
    return Object.values(clothes.reduce((a,c)=>(a[c[1]]=++a[c[1]]||1,a),{})).reduce((a,c)=>a*(c+1),1)-1
}