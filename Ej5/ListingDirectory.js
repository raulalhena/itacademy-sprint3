/*

Nivel 3 Ej1: Listar directorio del usuario

*/

import os from "os";
import chp from "child_process";

const execCommand = function(command){
    chp.exec(command, (error, stdout, stderr)=>{
        if(error) {
            console.log(error)
            return;
        }
        console.log(`Ejecutando -> ${command}: \n\n${stdout}`);
    });
}


const checkPlatform = function(execCommand){
    let command;
    if(os.platform === "Win32" || os.platform === "Win64"){
        command = "dir";
    }else{
        command = "ls";
    }
    execCommand(command);
}

checkPlatform(execCommand);