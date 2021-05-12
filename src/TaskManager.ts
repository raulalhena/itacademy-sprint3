import Task from "./models/Task.js";


export default class TaskManager{
    addTask(_data: Array<Task>, _taskName: string, _ownerId: number, _ownerName: string): void {
        const task = new Task(
            _data.length,
            _taskName,
            false,
            _ownerId,
            _ownerName
        );
        console.log("Tarea en addtask: ", task);
        _data.push(task);
    }

    updateTask(): void {

    }

    deleteTask(): void {

    }

    getAllTasks(_taskCollection: Array<Task>): Array<Task> {        
            return _taskCollection;
    }

    getTask(_id: number, _taskCollection: Array<Task>): Task{
        const oneTask = _taskCollection.find(task => {
            task.getOwnerId() === _id;
        });
        return oneTask!;
    }

    getIncomplete(_taskCollection: Array<Task>): number {
        const c = _taskCollection.filter(task => task.isComplete() === false);
        return c.length;
    }
}