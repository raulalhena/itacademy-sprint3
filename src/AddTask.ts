import TaskManager from "./TaskManager.js";

export default class AddTask implements TaskManager{
    public manageTask():string{
        return "Added task";
    };
}