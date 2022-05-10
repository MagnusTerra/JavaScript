class animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    }
    informacion(){
        return `Soy un ${this.especie} y tengo ${this.edad} años
        y soy de color ${this.color}`
    }
}
let perro=new animal("Perro",5,"Rojo");
document.getElementById("Parra").innerHTML="Hola"
document.write(perro.informacion())

