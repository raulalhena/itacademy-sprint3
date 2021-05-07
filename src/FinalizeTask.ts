import TaskManager from "./TaskManager";

export default class CompleteTask implements TaskManager{
    manageTask():boolean {
        return true;
    }
}