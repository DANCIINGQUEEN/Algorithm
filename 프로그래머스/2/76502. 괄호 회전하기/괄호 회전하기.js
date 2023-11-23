function solution(s) {
  if(s.length%2) return 0
  let a=0
  for(let i=0;i<s.length;i++){
      let S=s.slice(i)+s.slice(0,i)
      let t=[], f=1
      for(let i of S){
          if(i==='('||i==='{'||i==='[') t.push(i)
          else{
              if(i===')'&& t.pop()==='(') continue
              if(i==='}'&& t.pop()==='{') continue
              if(i===']'&& t.pop()==='[') continue
              f=0
              break
          }
      }
      if(f) a++
  }
    return a
}