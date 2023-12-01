function solution(s) {
  const a=[]
  s.slice(2,s.length-2)
      .split`},{`
      .map(s=>s.split`,`
      .map(x=>+x))
      .sort((a,b)=>a.length-b.length)
      .forEach(r=>r.forEach(v=>!a.includes(v)&&a.push(v)))
  return a
}