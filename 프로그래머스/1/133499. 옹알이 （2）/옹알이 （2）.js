function solution(b) {
  const r1 = /(aya|ye|woo|ma)\1+/
  const r2 = /^(aya|ye|woo|ma)+$/
  return b.reduce((a,w) => (
    !r1.test(w)&&r2.test(w)?++a:a
  ),0)
}