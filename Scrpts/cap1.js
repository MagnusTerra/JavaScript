monto=prompt("Ingres la cantidad de dinero")
total=0
if (monto >=0.6 && monto <= 0.9){
    total= monto - 0.6
    Helado="Palito de Helado de Agua y el suelto es: "+total
}
else if (monto >=1 && monto <= 1.5){
    total =monto - 1
    Helado="Palito de Helado de Crema y el suelto es: " + total
}
else if (monto ==1.6 ){
    total =monto - 1.6
    Helado="Bombon Helado marca Heladix y el suelto es: " + total
}
else if (monto ==1.7 ){
    total =monto - 1.7
    Helado="Bombon Helado marca Heladovich y el suelto es: " + total
}
else if (monto >=1.8 && monto <=2.8){
    total =monto - 1.8
    Helado="Bombon Helado marca Helardo y el suelto es: " + total
}
else if (monto >=2.9 ){
    total =monto - 2.9
    Helado="Potecito de Helado con Confites y Pote de 1/4 KG el suelto es: " + total
}
document.write(Helado)
