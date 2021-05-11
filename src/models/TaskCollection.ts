import User from "./User.js";
import Task from "./Task.js";

export default class TaskCollection{
    private ownerId: number;
    private ownerName: string;
    private id: number;
    private tasks: Task[];

    public constructor(_owner: User, _tasks: Array<Task>) {
        _tasks.forEach(task => {
            this.tasks.push({ownerId: _owner.getId(), ownerName: _owner.getName(), taskName: _tasks.name, complete: _tasks.complete});
        });
    }

    getTask(_ownerId: number): any{
        let mitask;
        this.tasks.find(task => {
            if(task.getOwnerId() === _ownerId){
                mitask = task
            }
        });
        return mitask;
    } 
 
}