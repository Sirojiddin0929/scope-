class Product {
  static productCount = 0

  constructor(id, name, price) {
    this.id = id
    this.name = name
    this.price = price
    Product.productCount++
  }

  totalPrice(){
    return this.price
  }
}

class CareProduct extends Product {
  constructor(id, name, price, warrantyPeriod) {
    super(id, name, price)
    this.warrantyPeriod = warrantyPeriod
  }

  totalPrice() {
    
    switch(this.warrantyPeriod){
      case 5:
        return this.price*0.9
      case 4:
        return this.price*0.8
      case 3:
        return this.price*0.7
      case 2:
        return this.price*0.6
      case 1:
        return this.price*0.5
      default:
        return this.price

    }
  }
}


let p1 = new Product(1, "Stol", 500)
console.log("p1 total:", p1.totalPrice())

let p2 = new CareProduct(2, "Telefon", 2000, 3)
console.log("p2 total (3 kun qoldi):", p2.totalPrice())

let p3 = new CareProduct(3, "Konditsioner", 4000, 6)
console.log("p3 total (6 kun qoldi):", p3.totalPrice())

console.log("Umumiy mahsulotlar soni:", Product.productCount)
