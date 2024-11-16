// Nesne yönelimli programlama
// Class base object oriented programming
// Prototype based object oriented


//This keyword

/*const employee = {
    name:"Erkut",
    age:27,
    position:"Devoloper",
    city:"İstanbul",
    marriageStatus:false,

    printUserInfo:function(){
        console.log("User Name: ", this.name, "Yaş: ", this.age,
            "Pozisyon: ",this.position, "Şehir: ",
             this.city, "Evlilik durumu: ",
             this.marriageStatus)
    },
    isAvailableForApart:function(){
        if(this.marriageStatus==true){
            console.log("Apart almaya uygun")
        }else{
            console.log("Apart almaya uygun DEĞİL!!!")
        }
    }
}
employee.printUserInfo()
employee.isAvailableForApart()

*/
// call ve apply

/*function greet(greeting){


    console.log(greeting+" "+this.name)
}
const person = {
    name:"Erkut"
}
greet.call(person, "Merhaba")

function yagmur(yagmurcuk,erkut){
    console.log(yagmurcuk+erkut+ " "+ this.name)
}
const ask = {
    name:"Yagmur"
}
yagmur.call(ask, "Erkutun ", "Aşkı ")

const animal = {
    name:"Aslan",
    age:27
}
function printAnimalName(greeting) {
    console.log(greeting+" "+this.name+" Yaşım "+this.age)
}

const baglamaAnimal = printAnimalName.bind(animal)

baglamaAnimal("Merhaba ben ")*/

