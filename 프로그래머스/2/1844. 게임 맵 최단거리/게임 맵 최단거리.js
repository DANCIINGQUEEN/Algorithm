function solution(maps) {
    let n=maps.length   //행
    let m=maps[0].length     //열
    let direction=[[-1,0], [1,0], [0,-1], [0,1]]    //상하좌우
    function bfs(){
        let q=[[0,0,1]] //행, 열, 이동거리
        maps[0][0]=0    //이동한 거리0으로 막기
        while(q.length!=0){     //큐가 비어있지 않으면
            let=[r,c,d]=q.shift()
            //적 팀 진영 도착시 값 리턴
            if(r===n-1 && c===m-1) return d
            //상하좌우 이동 여부 확인
            for(let [ro,co] of direction){
                let [newR, newC]=[r+ro, c+co] //현재 위치에서 상하좌우로 이동한 새로운 위치
                //새로운 위치가 맵 내에 있고 벽이 아닐 시 이동 가능
                if(newR>=0 && newR<n && newC>=0 && newC<m && maps[newR][newC]===1){
                    q.push([newR, newC, d+1])
                    maps[newR][newC]=0  //방문한 위치를 0으로 표시
                }
            }
        }
        return -1
    }
    return bfs()
}