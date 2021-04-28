/*

Nivel 1 Ej1 Prototipo. Copia de ficheros con prototipo

*/

import fs from "fs/promises";
import os from "os";
import { join } from "path";

let slash = "/";
if(os.platform === "Win32" || os.platform === "Win64") slash = "\\";

const mngr = {
    inbox: join(`..${slash}`,"inbox"),
    outbox: join(`..${slash}`,"outbox"),
    readDir: async function(){
        return fs.readdir(this.inbox);
    },
    readFl: async function(_file){ 
        return fs.readFile(join(this.inbox, _file), "utf-8");
    },
    writeFl: async function(_file, _data){
        return fs.writeFile(join(this.outbox, _file), _data);
    },
    reverseData: function(_data){
        return _data.split("").reverse().join("");
    }
}

const files = await mngr.readDir();
for(const file of files){
    try{
        await mngr.writeFl(file, mngr.reverseData(await mngr.readFl(file)));
        console.log(`Se han modificado correctamente el archivo ${mngr.outbox}/${file}`);
    }catch(e){
        console.log(e);
    }
}
