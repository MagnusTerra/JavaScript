let animales = ["Perro","Lobo","Gato","Tiburon"];
let pc ={
    name:'Red_Douten',
    procesador:'Intel i5',
    ram:'8gb',
    espacio:'750gb'
};
let nombre=pc["name"];
frase= `El nombre de mi pc es <b>${pc["name"]}</b> <br>
        El procesador es<b> ${pc["procesador"]}</b> <br>
        La Ram es de <b> ${pc["ram"]}</b> <br>
        El espacio es de <b>${pc["espacio"]}</b> <br>
` 
document.write(frase)
document.write("<br>")
let numero=0;
document.write("Usando if <br>")
if (numero<10){
    numero+=1;
    document.write(numero)
}
document.write("<br>")
document.write("Usando While<br>")
while (numero<=10){

    document.write(numero +"<br>");
    numero+=1;
}

document.write("Usando For <br>")
for(let i=0;i<=10;i++){
    document.write(i+"<br>");
}

document.write("Usando For in <br>")

for (animal in animales){
    document.write(animales[animal]+"<br>");
}
document.write("Usando For of <br>")
for (animal of animales){
    document.write(animal+"<br>");
}