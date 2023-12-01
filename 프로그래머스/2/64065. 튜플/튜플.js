const solution=s=>{
    let a=[]
    s.slice(2, s.length-2)  //문자열 양 끝 제거
        .split`},{` //},{ 기준으로 
        .map(s=>s.split`,`.map(x=>+x))  //2차원배열 , 기준으로 자르고 Number로 형변환
        .sort((a,b)=>a.length-b.length) //배열길이 오름차순 정렬
        .forEach(x=>x.forEach(v=>!a.includes(v)&&a.push(v)))    // a배열에 v값이 없으면 a배열에v값 push
    return a
}