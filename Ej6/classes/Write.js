import { writeFile } from "fs/promises";
import { join } from "path";


class Write{  
    async writeF(_path, file, _data){
      writeFile(join(_path, file), _data);
    }
  }

  export default Write;