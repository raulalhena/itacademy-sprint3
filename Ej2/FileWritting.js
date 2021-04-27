/*

Nivel 1 Ej2: Escribir en archivo

*/

import fs from "fs";
import readline from "readline";

const file = "FunctionName.txt";

const fileMng = function(writeFile){
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });
  
  if(fs.existsSync(file)){
    rl.question(`El archivo ${file}, ya existe. ¿Quieres sobreescribirlo? (y/n)`, (answer) => {
        if(answer === 'y'){
            writeFile();
            rl.close();
            return;
        }
        console.log("Perfecto! No se ha realizado ninguna acción.");
        rl.close(); 
    });
  }else{
        console.log("El archivo no existía, se va a crear.");
        writeFile();
        rl.close();
  }
}

function writeFile(){
    fs.writeFileSync(file, writeFile.name);
    console.log(`Se ha escrito correctamente en el archivo: ${file}`);
    console.log(`El contenido del archivo ${file} es: ` + fs.readFileSync(file));
    return;
}


fileMng(writeFile);
