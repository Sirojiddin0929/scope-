function NewObject(obj1, obj2) {
  let natija = {}
  for (let key in obj1) {
    if (key in obj2) {
        if (
        typeof obj1[key] !== "object" ||
        obj1[key] === null ||
        Array.isArray(obj1[key])
      ) {
        if (obj1[key] === obj2[key]) {
          natija[key] = obj1[key]
        }
      }
      
    else {
        let obj3 = {}
        for (let i in obj1[key]) {
          if (
            typeof obj1[key][i] !== "object" &&
            obj1[key][i] === obj2[key][i]
          ) {
            obj3[i] = obj1[key][i]
          }
        }
        if (Object.keys(obj3).length > 0) {
          natija[key] = obj3
        }
      }
    }
  }

  return natija
}


const jsonData1 = {
  user: {
    name: "Ali",
    age: 25,
    address: {
      city: "Tashkent",
      zip: "100000"
    }
  },
  active: true
}

const jsonData2 = {
  user: {
    name: "Ali",
    age: 30,
    address: {
      city: "Tashkent",
      zip: "200000"
    }
  },
  active: true
}

console.log(NewObject(jsonData1, jsonData2));
