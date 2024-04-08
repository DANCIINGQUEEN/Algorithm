let input = require("fs").readFileSync("dev/stdin").toString().trim().split`\n`;
let [n, m, b] = input.shift().split` `.map(Number);
let a = input.map((x) => x.split` `.map(Number));

let heightCount = new Array(257).fill(0); 

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    heightCount[a[i][j]]++;
  }
}

let t = Infinity;
let r = -1;
for (let h = 0; h <= 256; h++) {
  let v = 0; 
  let c = 0; 

  for (let i = 0; i <= 256; i++) {
    if (i < h) {
      v += (h - i) * heightCount[i];
    } else if (i > h) {
      c += (i - h) * heightCount[i];
    }
  }

  if (c + b >= v) {
    let e = 2 * c + v;
    if (t >= e) {
      t = e;
      r = h;
    }
  }
}
console.log(t, r);