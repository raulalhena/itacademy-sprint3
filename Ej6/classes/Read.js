import { readdir, readFile } from "fs/promises";
import { join } from "path";

class Read{
    async readDir(_dirPath){
      return readdir(_dirPath);   
    }
  
    async readF(_dirPath, _file, _code){
      return readFile(join(_dirPath, _file), _code);
    }
}

export default Read;