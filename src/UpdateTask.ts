import TaskManager from "./TaskManager.js";


export default class UpdateTask implements TaskManager{
    manageTask():boolean {
        return true;
    }
}