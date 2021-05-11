import TaskManager from "./TaskManager.js";

export default class AddTask implements TaskManager{
    public manageTask(_taskId:string):string{
        return "Added task: " + _taskId.toString();
    }
}