import TaskManager from "./TaskManager.js";


export default class UpdateTask implements TaskManager{
    manageTask(_taskId: string):string {
        return "updated " + _taskId;
    }
}