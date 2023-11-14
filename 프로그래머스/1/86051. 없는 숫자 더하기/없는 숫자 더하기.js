function solution(numbers) {
    // return new Array(9).fill(1).map((x,i)=>x*(i+1)).filter(x=>!numbers.includes(x)).reduce((a,c)=>a+c)
    return numbers.reduce((a,c)=>a-c, 45)
}