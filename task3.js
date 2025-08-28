class Universitet{
    constructor(name){
        this.name=name
        this.departments=[]
    }
    addDepartment(department){
        if(!this.departments.includes(department)){
             this.departments.push(department)
        }else{
            console.log("Xatolik")
        }
        

    }
    removeDepartment(department){
        if(this.departments.includes(department)){
           let index= this.departments.indexOf(department)
           this.departments.splice(index,1)
        }
        else{
            console.log("Xatolik")
        }

    }
    showDepartment(){
        console.log(`Universitet: ${this.name}`)
        this.departments.forEach((value,i)=>{
            console.log(`${i+1}. ${value}`)

        })
    }

}
let obj1=new Universitet("TATU")
obj1.addDepartment("Matematika")
obj1.addDepartment("Fizika")
obj1.addDepartment("Kimyo")
obj1.addDepartment("Tarix")
obj1.addDepartment("Matematika")
obj1.showDepartment()
obj1.removeDepartment("Fizika")
obj1.removeDepartment("Tarix")
obj1.removeDepartment("Ayiq")
obj1.showDepartment()
