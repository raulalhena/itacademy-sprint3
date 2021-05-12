import TaskManager from "./TaskManager.js";
import Task from "./Task.js";

export default class GetAllTasks implements TaskManager{


    manageTask(): Array<string>{
        return this.tasks;
    }

    getIncompleteTasks(): number{
        return this.tasks.length;
    }
}