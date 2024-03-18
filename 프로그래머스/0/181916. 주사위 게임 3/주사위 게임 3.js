function solution(a, b, c, d) {
    [a,b,c,d]=[a,b,c,d].sort((a,b)=>a-b)
    // console.log(a,b,c,d)
    if(a===b&&a===c&&a===d) return 1111*a
    if(a!==b&&b===c&&b===d) return (10*d+a)**2
    if(a===b&&a===c&&a!==d) return (10*a+d)**2
    if(a===b&&c===d&&b!==c) return (a+c)*Math.abs(a-c)
    if(a===b&&a!==c&&c!==d) return c*d
    if(a!==b&&b===c&&c!==d) return a*d
    if(a!==b&&b!==c&&c===d) return a*b
    if(a!==b&&b!==c&&c!==d) return a
}