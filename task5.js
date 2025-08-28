function hello(son){
    let date=new Date()
    let count=0
    while(count<son){
        if(date.getDay()!==0 && date.getDay()!==6){
             count++
        }
        if(count===son) break
        date.setDate(date.getDate()+1)
    }
    let oylar=["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"]
    let kun=date.getDate()
    let oy=oylar[date.getMonth()]
    let yil=date.getFullYear()
    return `${kun}-${oy} ${yil} yil`
}
let son=+prompt("Sonni kiriting")
console.log(hello(son))