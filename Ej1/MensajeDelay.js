/*

Nivel 1 Ej1: Mensaje recursivo con delay

*/

let count = 0;

const intervalo = setInterval(function() {
    count++;
    console.log(`Mensaje recursivo: ${count}`);
}, 1000);

