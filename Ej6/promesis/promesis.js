/*

Nivel 1 Ej1 Promises. Copia de ficheros con promesas

*/

import { readdir, readFile, writeFile } from "fs/promises";
import os from "os";
import { join } from "path";

let slash = "/";
if(os.platform === "Win32" || os.platform === "Win64") slash = "\\";
const inbox = join(`..${slash}`, "inbox");
const outbox = join(`..${slash}`, "outbox");

const reverseText = str => str.split("").reverse().join("");

// Promises

readdir(inbox).then(function(files){
  files.forEach(file => {
    readFile(join(inbox,file), "utf8")
    .then(function(data){
      writeFile(join(outbox, file), reverseText(data));
      console.log(`Se han copiado el archivo: ${inbox}/${file} en ${outbox}/${file}`);
    });
  });
}).catch(function(err){
  console.log("Se ha producido un error: ", err);
});