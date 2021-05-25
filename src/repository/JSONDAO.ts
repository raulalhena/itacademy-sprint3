import fs from 'fs';
import Task from '../models/Task.js';

export default class JSONDAO{
    private file: any;
    private path: string;

    constructor(_path: string){
        this.file = fs.readFileSync(_path, 'utf-8');
        this.path = _path;
    }

    getData(): Array<any>{   
       const taskCollection: Array<Task> = [];
        if(this.file != ""){
            let objCollection = JSON.parse(this.file);
            objCollection = objCollection.filter((el: null) => el !=null);
            for(let task in objCollection){
                const myTask = new Task(
                    objCollection[task].id, 
                    objCollection[task].name, 
                    objCollection[task].created_at, 
                    objCollection[task].status, 
                    objCollection[task].finished_at
                    );
                taskCollection.push(myTask);
            }
        }
        return taskCollection;
    }

    saveData(_taskCollection: Array<Task>): void {
        fs.writeFileSync(this.path,JSON.stringify(_taskCollection));
    }

}