import User from "./User.js";
import Task from "./Task.js";

export default class TaskCollection{
    /*private ownerId: number;
    private ownerName: string;
    private id: number;*/
    private tasks: any = [];

    public constructor(_owner: User, _tasks: Array<any>) {
        _tasks.forEach(task => {
            this.tasks.push({id: task.getId(), ownerId: _owner.getId(), ownerName: _owner.getName(), name: task.getName(), complete: task.isComplete()});
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