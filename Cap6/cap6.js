parrafo=document.getElementById("parrafo");//selecciona por id
document.write(parrafo+"<br>");
parrafo=document.getElementsByTagName("p")//selecciona por nombre del tag
document.write(parrafo+"<br>");
parrafo=document.querySelector(".parrafo")//seleciona clases o id 
document.write(parrafo+"<br>");
parrafo=document.querySelectorAll(".parrafo")//seleciona todas las clases o ids 
document.write(parrafo+"<br>");
document.write("______________________________________<br><br>")

const rangoEdad=document.querySelector(".rangoEdad")
const test=document.querySelector(".test")
test.placeholder="Hola"
test.required=" "
test.minLength=4;
rangoEdad.setAttribute("type","text")
rangoEdad.type="file"
rangoEdad.accept="image/png"
const titulo=document.querySelector(".title")

titulo.setAttribute("contentEditable","true")
//titulo.removeAttribute("")remueve un atributo

const title=document.querySelector(".title")
title.style.color="red"
title.style.backgroundColor="blue"

document.write("______________________________________<br><br>")
//title.classList.add("grande")cambia la clase
//title.classList.contains("grande")verifica si tiene una clase
//let resul=title.innerHTML //innerText textContent
//document.write(resul)
title.innerHTML="Hola"