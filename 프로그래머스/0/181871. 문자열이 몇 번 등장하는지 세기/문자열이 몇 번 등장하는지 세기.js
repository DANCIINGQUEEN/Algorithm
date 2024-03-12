function solution(m, p) {
  let c = 0;
  let index = m.indexOf(p);

  while (index !== -1) {
    c++;
    index = m.indexOf(p, index + 1);
  }

  return c;
}