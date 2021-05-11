import TaskManager from "./TaskManager";

export default class RemoveTask implements TaskManager{
    manageTask(_taskId: string): string{
        return `Tarea ${_taskId} borrada`;
    }
}