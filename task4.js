function calculateWorkingHours(str1,str2){
    let a=Number(str1.slice(0,2))
    let b=Number(str2.slice(0,2))
    let c=Number(str1.slice(3,5))
    let d=Number(str2.slice(3,5))
    if(a>=b){
        return "Xatolik boshlanish va tugash vaqtlari teng yoki tugash vaqti boshlanishdan oldin bo'lmaydi "

    }
    if(a<b){
        let m=(b*60+d)-(a*60+c)
        return ` Ish vaqti ${Math.floor(m/60)} soatu ${m%60} daqiqa`
    }


}
console.log(calculateWorkingHours("09:33","17:08"))