import TaskManager from "./TaskManager.js";

export default class ManagingTasks{
    private taskManager: TaskManager;

    constructor(_taskManager: TaskManager){
        this.taskManager = _taskManager;
    }

    public setTaskManager(_taskManager: TaskManager){
        this.taskManager = _taskManager;
    }

    public manageTask(_data: any | void): any | void{
        console.log(this.taskManager.manageTask(_data));
    }
}