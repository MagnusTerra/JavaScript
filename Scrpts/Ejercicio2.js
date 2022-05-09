let exit=false;

while(!exit){
    let nombre=prompt("Ingrese su nombre: ");
    if(nombre=="Salir" || nombre=="salir" || nombre=="exit"){
        exit=true;
    }
    else{
        edad=prompt("Que edad tiene");
        edad=parseInt(edad);
        if(edad>=18 ){
            Hora=prompt("A que hora entro");
            Hora=parseInt(Hora);
            if(Hora>=2 && Hora<=5){
                alert( `Puedes pasar ${nombre} y de Gratis`  )
            }
            else{
                alert(`Puedes pasar ${nombre} Tienes que pagar 20$` )
            }
            
        }else{
            alert(`No puede pasar ${nombre}`)
        }
        
        
    }
}