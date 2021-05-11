import TaskManager from "./TaskManager";

export default class GetAllTasks implements TaskManager{
    

    manageTask(): Array<string>{
        return this.tasks;
    }

    getIncompleteTasks(): number{
        return this.tasks.length;
    }
}