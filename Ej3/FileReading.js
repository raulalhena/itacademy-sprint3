/*

Nivel 1 Ej3: Lectura de fichero

*/

import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

rl.question("¿Qué archivo quieres leer? \n", (answer) =>{
    if(fs.existsSync(answer)){
        readFile(answer);
    }else{
        console.log(`El archivo ${answer} no existe, crealo e introduce contenido para poder leerlo.`);
    }
    rl.close();
});


function readFile(file){
    console.log(`El contenido de ${file}: \n` + fs.readFileSync(file, "utf-8"));
}