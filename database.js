class Database{
    constructor(){
        this.arr=[]
    }
    createOne(id,name,age,country,population){
        if(!this.arr.includes(a)){
          let a={id,name,age,country,population}
          this.arr.push(a)
        }
        return `${a} yaratildi`
        
    }
    createMany(BigArr){
        BigArr.forEach(i => {
            this.arr.push(i)
            
        })
        return this.arr

    }
    updateOne(id,updates){
        let a=this.arr.find(i=>i.id===id)
        if(!a){
            return null

        }
        for(let [key,value] of Object.entries(updates)){
              a[key]=value
        }
        return a
    }
    updateMany(BigUpdate, updates) {
    let updated = []
    this.arr.forEach(i => {
      if (BigUpdate(i)) {
        Object.assign(i, updates)
        updated.push(i)
      }
    })
    return updated
  }
  findAll() {
    return this.arr
  }

  
  findOne(id) {
    return this.arr.find(i => i.id === id) || null
  }
  deleteOne(id) {
    let index = this.arr.findIndex(i => i.id === id)
    if (index === -1) return null
    return this.arr.splice(index, 1)[0]
  }
  deleteMany(BigUpdate) {
    let removed = []
    this.arr = this.arr.filter(i => {
      if (BigUpdate(i)) {
        removed.push(i)
        return false
      }
      return true
    })
    return removed
  }



}
let db = new Database()
db.createOne(1, "Ali", 25, "Uzbekistan", 35000000)
db.createOne(2, "Vali", 30, "Kazakhstan", 19000000)
db.createOne(5,"Khabib",34,"Russian",12000)


db.createMany([
  { id: 3, name: "Hasan", age: 20, country: "Turkey", population: 80000000 },
  { id: 4, name: "Husan", age: 22, country: "Kyrgyzstan", population: 6500000 },
  {id:6, name:"Bunyodbek",age:19,country:"Uzbekistan",population:38000}
])

console.log("Ali:", db.findAll())


db.updateOne(2, { age: 31, country: "USA" })
console.log("After updateOne:", db.findAll())


db.updateMany(i => i.age === 22, { age: 23 })
console.log("After updateMany:", db.findAll())


console.log("Find id=1:", db.findOne(1))


db.deleteOne(1)
console.log("After deleteOne:", db.findAll())


db.deleteMany(i=>i.age===23)
console.log("After deleteMany:", db.findAll())
