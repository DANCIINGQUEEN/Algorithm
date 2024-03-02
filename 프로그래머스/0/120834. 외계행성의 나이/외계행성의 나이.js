function solution(age) {
    let n=['a','b','c','d','e','f','g','h','i','j']
    // console.log([1,2,3][1])
    return age.toString().split``.map(x=>n[x]).join``
}