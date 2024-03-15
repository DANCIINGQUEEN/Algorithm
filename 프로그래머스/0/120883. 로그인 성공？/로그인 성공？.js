function solution(id_pw, db) {
    let l=db.filter(x=>x.includes(id_pw[0])).flat()
    if(l.length){
        if(l[1]!==id_pw[1]) return "wrong pw"
        else return "login"
    }
    else return "fail"

}