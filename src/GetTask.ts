import TaskManager from "./TaskManager";

export default class GetTask implements TaskManager{
    manageTask(_taskId: string){
        return "Lista Tarea escogida " + _taskId;
    }
}