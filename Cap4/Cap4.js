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

let cade="Hola como esta";
let resul=cade.split(" ");
document.write(resul[0])
