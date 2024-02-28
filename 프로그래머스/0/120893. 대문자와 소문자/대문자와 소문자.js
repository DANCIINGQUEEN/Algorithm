function solution(m) {
    return [...m].map(x=>x===x.toLowerCase()?x.toUpperCase():x.toLowerCase()).join``
}