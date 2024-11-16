/*// camelCase : userAge
let userAge = 26

// PascalCase : User

class UserAge {

}

// snake_case : user_age

let user_age = 26

// sabit tanımlamalarda bütün harfler büyük : HOST

const PI = 3.14
const HOST = "localhost"
const DB_ADDRESS = "postgres:"

console.info(user_age)

// Aritmetik Operatörler

let a = 10
let b = 20

console.log(a + b)

// ctrl + alt + l ile turbo console log alabilirsin
const result = a + b
console.log("🚀 ~ result:", result)

const incomes = [
    {name: "Kira", value: 15000},
    {name: "Maaş", value: 80000},
    {name: "Pasif", value: 10000},
]


let totalIncome = 0
incomes.forEach((income) => {
    totalIncome += income.value
})
console.log("Kullanıcının Aylık Toplam Geliri : ", totalIncome, ' TL')

const goes = [
    {name: "Elektrik", value: 200},
    {name: "Su", value: 150},
    {name: "Doğalgaz", value: 1000},
]

let totalGoes = 0
goes.forEach((go) => {
    totalGoes += go.value
})
console.log("Kullanıcının Aylık Toplam Harcaması : ", totalGoes, ' TL')

let student =[
    {name:"erkut", note: 10},
    {name:"erkut1", note: 90},
    {name:"erkut2", note: 50},
    {name:"erkut3", note: 30},
    {name:"erkut4", note: 10},
    {name:"erkut5", note: 50},
    {name:"erkut6", note: 20},
]

let avarage = 0
student.forEach((student) => {
    avarage += student.note
})
console.log("ortalama : ", avarage / student.length)

if (avarage >= 50){
console.log("Öğrencilerin durumu iyi")
} else if(avarage <= 49) {
    console.log("Öğrencilerin durumu kötü")
}
    
const notlar = [45, 60, 80, 95, 85, 66, 63, 76, 95, 100]

const harfNotlar = ["AA","AB","CC","DD","FF"]

notlar.forEach((not) => {
    if (not >= 90) {
        console.log("Öğrenci Sınıfı Geçti : ",harfNotlar[0])
    } else if (not >= 80) {
        console.log("Öğrenci Sınıfı Geçti : ", harfNotlar[1])
    }
    else if (not >= 70) {
        console.log("Öğrenci Sınıfı Geçti : ",harfNotlar[2])
    }
    else if (not >= 60) {
        console.log("Öğrenci Sınıfı Geçti : ",harfNotlar[3])
    }else if (not >= 50) {
        console.log("Öğrenci Sınıfta Kaldı : ",harfNotlar[4])
    }
})*/

/*const havaDurumu = "yağmurlu"

switch (havaDurumu) {
    case "karlı" :
        console.log("dışarı çık")
            break
    case "yağmurlu" :
        console.log ("şemsiye al")
        break
        default: 
        console.log("evde bilgisayar oyna")
    }

    let sayac = 0

    while (sayac < 10) {
        console.log(sayac)
        sayac++

    }*/


// Fonksiyon Tanımlama
// camelCase
// Fonksiyon isimleri emir bildirir

//function
function calculateAge(birthYear, currentYear) {
    console.log("Yaşınız: ", currentYear - birthYear)
}
calculateAge(1998,2024)




//Arrow Function
const sayYourName = (name) => {
    console.log("Merhaba ", name)
}
sayYourName("erkut")


const saveUser = () => {
    let username = "Erkut"
    console.log( username)
    let age = 26
    console.log("age:", age)
}
saveUser()

// Geri dönüşlü fonksiyonlar
const sum = (a, b) => {
    return a+b
}
const total = sum(84, 95)
console.log("Toplam: ", total)


// Fonksiyonlar: Projede çalışan komutlar

