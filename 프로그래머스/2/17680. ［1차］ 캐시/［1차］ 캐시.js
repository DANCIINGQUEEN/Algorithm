const solution=(cacheSize, cities)=>{
    cities=cities.map(x=>x.toUpperCase())   //cities 배열을 모두 대문자로
    let a=0
    let q=[]
    for (let c of cities){  
        if(!q.includes(c)){  //q에 cities가 없으면
            a+=5
            q.push(c)
            if(q.length>cacheSize) q.shift()
        }
        else{   //q에 cities가 있으면
            a++
            let idx=q.indexOf(c)
            q.splice(idx, 1)
            q.push(c)
        }
    }
    // for(let i=0;i<cities.length;i++){
    //     if(!q.includes(cities[i])){
    //         a+=5
    //         q.push(cities[i])
    //         if(q.length>cacheSize) q.shift()
    //     }
    //     else{
    //         a++
    //         let idx=q.indexOf(cities[i])
    //         q.splice(idx, i)
    //         q.push(cities[i])
    //     }
    // }
    return a    
}