function saludar(){
    let hola=prompt("Hola que tal tu dia")
    if(hola=="bien"){
        document.write("Me alegra <br>")
    }else{
        document.write("Que mal <br>")
    }
    
}

saludar()

document.write("Con parametros <br>")

function sumar(n1,n2){
    let suma=n1+n2;
    document.write(suma + "<br>")
}

sumar(5,5)
sumar(115,57)