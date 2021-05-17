import lowdb, { LowdbSync } from 'lowdb';
import FileSync from "lowdb/adapters/FileSync.js";
import Task from "../models/Task.js";

type schemaType = {
    tasks: {
        id: number,
        name: string,
        complete: boolean,
        created_at: Date
    }[];
}

export default class DBManager{
    private db: lowdb.LowdbSync<schemaType>;
    private taskCollection: Task[] = [];

    public constructor(_fileName: string){
        this.db = lowdb(new FileSync(`${_fileName}.json`));
        
        if(this.db.has("tasks").value()){
            let dbTasks = this.db.get("tasks").value();
            dbTasks.forEach((dbTask: { id: number; name: string; complete: boolean; created_at: Date }) => {
                this.taskCollection.forEach(task => {
                        const newTask = new Task(dbTask.id, dbTask.name, dbTask.complete, dbTask.created_at);
                        task = newTask;
                });
            });
            this.db.set('tasks', this.taskCollection).write();
        }else{
            this.db.set('tasks', this.taskCollection).write();
        }
    }

    getConnection(): LowdbSync<schemaType> {
        return this.db;
    }

    getData(){
        return this.taskCollection;
    }



}