document.write("<h1>Capitulo4</h1>")

let cadena="Cadena de prueba ";
let cadena2="Cadena"

let resultado=cadena.concat(" Hola")
let resultado2=cadena.startsWith(cadena2)//buscar al inico y con endWith el finañ
let resultado3=cadena.includes(cadena2)//esto busca una cadena en otra
let resultado4=cadena.padStart(50,"4") //puede tambien padEnd
let resultado5=cadena.repeat(3)
document.write(resultado +"<br>"
+resultado2+"<br>"+ resultado3+"<br>"+ resultado4
+"<br>"+ resultado5+"<br>"
)
document.write("__________________________________________<br>");
let vaya=["loco","Payaso","Totuga"]
let cade="Hola como esta";
let resul=cade.split(" ");
document.write(resul[0]+"<br>")
let cade2="ABCDEFG"
let resul1=cade2.substring(0,2); //nos muestra una cantidad de elementos 
document.write(resul1+"<br>")
let cade3="HOLA MI LOCO COMO ESTAS"
let resul2=cade3.toLowerCase();
let resul3=cade.toUpperCase()
document.write(resul2+"<br>")
document.write(resul3+"<br>")
let hai=vaya.sort()//ordena el array 
document.write(hai+"<br>")
let resul4=vaya.join();//convierte el Array a String
document.write(resul4[1]+"<br>")
let resul5=vaya.slice(0,1)//nos muestra una cantidad de elemntos pero de un array 
document.write("__________________________________________<br>");
vaya.filter(function(i ){//un for para arrays
    document.write(i+"<br>")
} )