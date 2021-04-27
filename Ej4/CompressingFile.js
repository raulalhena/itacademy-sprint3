/*

Nivel 2 Ej1: Comprimiendo archivo

*/

import fs from "fs";
import zlib from "zlib";
import readline from "readline";
import { pipeline } from "stream";

const zip = zlib.createGzip();

const askFile = function(compressFile){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("¿Qué archivo quieres comprimir? \n", (answer) => {
        if(fs.existsSync(answer)){
            compressFile(answer);
            rl.close();
        }else{
            console.log("El archivo no existe o no se puede leer.");
            rl.close();
        }
    });
}

function compressFile(file){
    let source = fs.createReadStream(file,"utf-8");
    let target = fs.createWriteStream(`${file}_output.zip`, "utf-8");

    pipeline(source,zip, target, (err)=>{
        if(err){
            console.log(`Ha ocurrido un error: ${err}`);
        }else{
            console.log(`Se ha comprimido el archivo correctamente, lo encontrarás en: ./${file}_output.zip`, "\n");
        }
    });
    return;
}

askFile(compressFile);