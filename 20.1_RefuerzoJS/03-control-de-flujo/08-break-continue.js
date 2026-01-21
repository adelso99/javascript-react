//Parar un Loop o Bucle
//Break--> Permite Salir del Loop
//Continue--> Permite Saltar una interaccion

let i = 0;

while(i < 6){
    i++;
    if(i === 2) {
        continue; //uso de continue
    }
    
    if ( i === 4){
        break; //uso de break
    }

    console.log(i);
}
