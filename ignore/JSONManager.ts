/*import lowdb, { LowdbSync } from 'lowdb';
import FileSync from "lowdb/adapters/FileSync.js";
import Task from "../models/Task.js";

type schemaType = {
    users: [{
        id: number,
        name: string,
        tasks: {
            id: number,
            name: string,
            complete: boolean,
            status: Array<string>,
            created_at: Date,
            finished_at: Date
        }[]
    }];
}

export default class JSONManager{
    private db: lowdb.LowdbSync<schemaType>;
    private taskCollection: Task[] = [];

    public constructor(_fileName: string){
        this.db = lowdb(new FileSync(`${_fileName}.json`));
        
       
    }

    getConnection(): LowdbSync<schemaType> {
        return this.db;
    }

    getData(){
        return this.taskCollection;
    }



}*/