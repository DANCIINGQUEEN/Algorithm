const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    i = line.split(' ');
}).on('close', function () {
    console.log(`${i[0]} + ${i[1]} = ${+i[0]+ +i[1]}`);
});