function solution(rsp) {
    return rsp.toString().split``.map(x=>x==2?0:x==0?5:2).join``
}