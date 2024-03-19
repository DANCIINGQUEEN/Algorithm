function solution(n, words) {
    for (let i = 1; i < words.length; i++) {
        let w = words[i]
        if (words.indexOf(w) !== i)return [i % n + 1, Math.floor(i / n) + 1]
        
        let l = words[i - 1].slice(-1)
        let f = w.charAt(0)
        if (l !== f) return [i % n + 1, Math.floor(i / n) + 1]
    }
    return [0, 0];
}