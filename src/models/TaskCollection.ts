import User from "./User.js";
import Task from "./Task.js";

export default class TaskCollection{
    
    private tasks: Array<Task> = [];

    public constructor(_tasks: Array<Task>) {
        _tasks.forEach(task => {
            this.tasks.push(task);
            console.log(task);
        });
    }

    getTask(_ownerId: number): any{
        let myTask;
        this.tasks.find(task => {
            if(task.getOwnerId() === _ownerId){
                myTask = task
            }
        });
        return myTask;
    } 
 
}