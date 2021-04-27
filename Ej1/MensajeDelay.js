/*

Nivel 1 Ej1: Mensaje recursivo con delay

*/

let count = 0;

const interval = function(writeMsg){ 
    setInterval(function() {
        count++;
        writeMsg(count);
    }, 1000);
}

const writeMsg = function(){
    console.log(`Mensaje recursivo: ${count}`);
}

interval(writeMsg);
