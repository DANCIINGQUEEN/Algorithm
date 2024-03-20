// function solution(s1, s2) {
//     let C=65536
//     let [ss1,ss2]=[m(s1),m(s2)]
//     let h=new Set([...ss1,...ss2])
//     if(!ss1.length&&!ss2.length) return C
//     let l=g(ss1,ss2)
//     return ~~(l/(ss1.length+ss2.length-l)*C)
    
// }
// function m(s){
//     let ss=[]
//     let r=/[\d\W]/
//     for(let i=0;i<s.length-1;i++){
//         let a=s.slice(i,i+2)
//         if(!r.test(a)) ss.push(s.slice(i,i+2).toLowerCase())
//     }
//     return ss
// }
// function g(s1,s2){
//     let t=[...s2]
//     return s1.map(x=>{
//         let i=t.indexOf(x)
//         if(i>-1){
//             t=t.slice(0,i).concat(t.slice(i+1))
//             return true
//         }
//         return false
//     }).filter(x=>x).length
// }
function solution(str1, str2) {
    const CONSTANT = 65536;
    const [setStr1, setStr2] = [genSet(str1), genSet(str2)];
    if(setStr1.length === 0 && setStr2.length === 0) return CONSTANT;
    const interLen = getIntersectionLength(setStr1, setStr2);
    const unionLength = setStr1.length + setStr2.length - interLen;
    return Math.floor((interLen / unionLength) * CONSTANT);
}

// 두 배열의 교집합의 길이를 리턴
function getIntersectionLength(arr1, arr2) {
    const result = [];
    let tmpArr2 = [...arr2];
    return arr1.map(x => {
        const idx = tmpArr2.indexOf(x);
        if(idx > -1) {
            tmpArr2 = tmpArr2.slice(0, idx).concat(tmpArr2.slice(idx + 1));
            return true;
        }
        return false;
    }).filter(x => x).length;
}

// 문자열을 2글자씩 끊어 배열로 만들어 리턴
function genSet(str) {
    str = str.toLowerCase();
    const result = [];
    
    for(let i = 0; i < str.length - 1; i++) {
        if(isAlphabet(str[i]) && isAlphabet(str[i + 1])) {
            result.push(str[i] + str[i + 1]);
        }
    }
    return result;
}

// 문자가 알파벳인지 검사
function isAlphabet(ch) {
    return 97 <= ch.charCodeAt() && ch.charCodeAt() <= 122;
}