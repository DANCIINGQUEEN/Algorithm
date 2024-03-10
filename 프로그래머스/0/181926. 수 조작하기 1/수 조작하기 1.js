let s = {
  w: (n) => n + 1,
  s: (n) => n - 1,
  d: (n) => n + 10,
  a: (n) => n - 10,
};

function solution(n, c) {
  return [...c].reduce((a,b) => s[b](a), n);
}
