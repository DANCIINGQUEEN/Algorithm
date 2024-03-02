function solution(order) {
    let a=0
    order.toString().split``.forEach(x=>{
        if([3,6,9].includes(+x)) {
            console.log('yes', a)
        a++
            
        }
    })
    return a
}