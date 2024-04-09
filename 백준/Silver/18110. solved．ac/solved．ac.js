let [i, ...o] = require("fs").readFileSync("dev/stdin").toString().trim().split`\n`
o = o.map(Number).sort((a, b) => a - b)
let v = Math.round(i * 0.15)
o = o.slice(v, Math.max(v, o.length - v))
let a = o.length > 0 ? Math.round(o.reduce((a, c) => a + c) / o.length) : 0
console.log(a)