// Class: yazdığımız kodları günlük hayattaki yaşanan 
//sorunlara göre somutlaştırmaktır.

//Attribut,property,field
class KullanıciDogrulama {

    static veritabaniAdi="Postgres"
    static veritabaniAdresi="localhost"
    static veritabaniSifresi="1234"

    #metot

    constructor(metot){
        this.metot=metot
    }

    get metot(){
        return this.#metot
    }

    set metot(metot){
        this.#metot = metot                              
    }


}


const kullaniciDogrula = new KullanıciDogrulama("kullanici_adi_sifre")

kullaniciDogrula.metot="email_sifre"
console.log(kullaniciDogrula.metot)