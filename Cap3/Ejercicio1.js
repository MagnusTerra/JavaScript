document.write("<h1> Ejercicio1 </h1>");

class Movil{
    constructor(nombre,color,peso,resolucion,camara,ram){
        this.nombre = nombre;
        this.color = color;
        this.peso =peso;
        this.resolucion = resolucion;
        this.camara = camara;
        this.ram = ram;
    }
    prender(){
        document.write(`El Telefono ${this.nombre} Puede prender <br>`);
    }
    reiniciar(){
        document.write(`El Telefono ${this.nombre} Puede reiniciar <br>`);
    }
    photo(){
        document.write(`El Telefono ${this.nombre} Puede tomar fotos <br>` );
    }
    informacion(){
        document.write(`Nombre: ${this.nombre}, Color: ${this.color}, Peso: ${this.peso},
        Resolucion: ${this.resolucion}, Camara: ${this.camara}, Ram: ${this.ram}. <br>`);
    }
}

let movil1=new Movil("Samsung","Azul","0.5kg","1080p","48px","4gb");
let movil2=new Movil("Xiaomi","Negro","0.8kg","1280p","52px","5gb");
let movil3=new Movil("Apple","Blanco","0.6kg","1080p","16px","3gb");
movil1.informacion();
movil2.informacion();
movil3.informacion();