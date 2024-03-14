function solution(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "l") return s.slice(0, i) 
      else if (s[i] === "r") return s.slice(i+1)
  }
  return [];
}
