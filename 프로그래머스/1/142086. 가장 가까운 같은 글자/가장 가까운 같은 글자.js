function solution(s) {
    let firstArr=[]
    let nearArr=[]
    // console.log(s.split``)
    s.split``.forEach((x, i)=>{
        // console.log(firstArr, 'firstArr')
        // console.log(nearArr, 'nearArr')
        if(firstArr.includes(x)) {
            // console.log(x, '2', firstArr.includes(x), '--------------------')
            // console.log(i, firstArr.lastIndexOf(x))
            nearArr.push(i-firstArr.lastIndexOf(x))
        }
        else{
            // console.log(x, -1, firstArr.includes(x), '--------------------')
            nearArr.push(-1)
        }
        firstArr.push(x)
    })
    // console.log(nearArr)
    
    return nearArr
}