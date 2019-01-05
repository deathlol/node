/*var nombre = "deadpool";
    //Se puede sobre escribir la variable usando var
if (true) {
    var nombre = "Cable";
}

console.log(nombre);*/

let i;
//usando let sólo se puede ocupar en el segmento de código
//La primera "i" no se le ha asignado ningún valor 
for (let i = 0; i <= 8; i++) {
    console.log(`i: ${i}`);
}

console.log(i); //valor indefinido