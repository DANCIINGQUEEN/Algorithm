function solution(k, b) {
    let d={
        'up':[0,1],
        'down':[0,-1],
        'left':[-1,0],
        'right':[1,0]
    }
    let r=[0,0]
    let [mx,my]=[~~(b[0]/2),~~(b[1]/2)]
    k.forEach(x=>{
        [r[0],r[1]]=[r[0]+d[x][0],r[1]+d[x][1]]
        if(r[0]>mx) r[0]-=1
        if(r[0]<-mx) r[0]+=1
        if(r[1]>my) r[1]-=1
        if(r[1]<-my) r[1]+=1
    })
    return r
}