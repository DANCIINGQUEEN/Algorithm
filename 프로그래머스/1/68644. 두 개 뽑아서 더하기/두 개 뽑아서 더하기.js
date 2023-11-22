function solution(numbers) {
    let a=new Set()
    numbers.forEach((_,i)=>{
        numbers.forEach((_,j)=>{
            if(i===j)return 
            a.add(numbers[i]+numbers[j])
        })
    })
    return Array.from(a).sort((a,b)=>a-b)
}