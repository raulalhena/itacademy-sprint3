import TaskManager from "./TaskManager.js";

export default class Context{
    private taskManager: TaskManager;

    constructor(_taskManager: TaskManager){
        this.taskManager = _taskManager;
    }

    public setTaskManager(_taskManager: TaskManager){
        this.taskManager = _taskManager;
    }

    public manageTask(): any {
        console.log(this.taskManager.manageTask());
    }
}