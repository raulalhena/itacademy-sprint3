/*

Nivel 1 Ej1 Classes. Copia de ficheros con clases

*/

import config from "./SetContext.js";

const inbox = config.inbox;
const outbox = config.outbox;
const readObj = new config.Read();
const writeObj = new config.Write();

try{
  const files = await readObj.readDir(inbox);
  for(const file of files) {

      await writeObj.writeF(outbox, file, config.ReverseData.reverseText(await readObj.readF(inbox, file,"utf-8")));
      console.log(`Se han copiado el archivo: ${inbox}/${file} en ${outbox}/${file}`);
  }
}catch(e){
  console.log(e);
}

