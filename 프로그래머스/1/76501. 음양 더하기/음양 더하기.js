function solution(absolutes, signs) {
    // return signs.map((x,i)=>x?x=absolutes[i]:x=absolutes[i]*(-1)).reduce((a,c)=>a+c)
    return absolutes.reduce((a,c,i)=>a+(signs[i]?c:-c), 0)
}