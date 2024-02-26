function solution(num_list) {
    let even=0,odd=0
    num_list.filter(x=>{
        if(x%2===0) even++
        else odd++
    })
    return [even, odd]
}