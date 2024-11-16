/*const calculator = {
    a:5,
    b:10,
    multiple:function (a,b){
    }
}

function division(){
    console.log(this.a/this.b) 
}

division.call(calculator)

function add () {
    console.log(this.a+this.b)
}

add.call(calculator)

const animal = {
    name:"Tiger",
}

function printAnimal(habitats){
    console.log(this.name)
    console.log("Habitats: ", habitats)
}

// Dizi içinde dizi açarak bir çok değer gönderilebilir. Aksi durumda tek bir değer alır
printAnimal.apply(animal, [["land","water","air"]])  */

const user ={
    name:" ",
    age:0,
    surname:" "
}
const newUser = Object.create(user)
newUser.name="Erkut",
newUser.sur= "Yaşa"
console.log(newUser)


//Keyleri Öğrenme
const user2 = {
    name:"aa ",
    age: "bb ",
    country: " ee",
    marriedcheck: " dd"
}

//1.YÖNTEM
console.log(Object.keys(user2))

//2.YÖNTEM
for (const key in user2){
    console.log(key, user2[key])
}