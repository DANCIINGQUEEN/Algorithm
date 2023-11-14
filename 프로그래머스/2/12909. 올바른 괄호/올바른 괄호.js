// function solution(s){
//     let a=0
//     s.split``.forEach((x,i)=>{
//         if(i===0&&x===')') return false
//         else if(x==='(') {
//             a++
//         }
//         else if(x===')'){
//             a--
//         }
        
//     })
//     return a===0?true:false

//     let a=0
//     for(let i=0;i<s.length;i++){
//         if(s[0]===')') return false
//         a+=s[i]==='('?1:-1
//         if(s<0) break
//     }
//     return a===0?true:false
// }

function solution(s){    
    const stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] === '(' && s[i] === ')') {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    
    return !stack.length;
}