function solution(s) {
  if (s.length % 2) return 0
  let v = 0
  const b = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for (let i = 0; i < s.length; i++) {
    let t = [], isValid = true
    for (let j = 0; j < s.length; j++) {
      let c = s[(i + j) % s.length]
      if (c in b) t.push(c) 
        else {
        if (t.length === 0 || b[t.pop()] !== c) {
          isValid = false
          break
        }
      }
    }
    if (isValid && t.length === 0) v++
  }
  return v
}
