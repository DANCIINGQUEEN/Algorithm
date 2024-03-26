let [a, b] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(e => +e);
function p(a, b) {
    let ip = new Array(b + 1).fill(true);
    ip[0] = ip[1] = false;
    let output = [];
    
    for (let i = 2; i * i <= b; i++) {
        if (ip[i]) {
            // 최적화된 시작점 계산
            let start = Math.max(i * i, Math.ceil(a / i) * i);
            for (let j = start; j <= b; j += i) {
                ip[j] = false;
            }
        }
    }
    
    for (let i = a; i <= b; i++) {
        if (ip[i]) output.push(i);
    }

    // 한 번에 모든 소수 출력
    console.log(output.join('\n'));
}

p(a, b);
