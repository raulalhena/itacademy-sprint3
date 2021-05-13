import Task from "./models/Task.js";


export default class TaskManager{
    
    addTask(_taskCollection: Array<Task>, _taskName: string, _ownerId: number, _ownerName: string): void {
        const task = new Task(
            _taskCollection.length + 1,
            _taskName,
            false,
            _ownerId,
            _ownerName
        );
        _taskCollection.push(task);
        console.log("Add: ",_taskCollection);
    }

    updateTask(_taskCollection: Array<Task>, _taskId: number, _newTaskName: string): void {
        _taskCollection.forEach(task => {
            if(task.getId() === _taskId){
                task.setName(_newTaskName);
            }
        })
    }

    deleteTask(_taskCollection: Array<Task>, _taskId: number): void {
        const index = _taskCollection.map(task => task.getId()).indexOf(_taskId);
        _taskCollection.slice(index);
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

    completeTask(_taskCollection: Array<Task>, _selectedTasksId: number[]): void {
        _taskCollection.forEach(task => {
            if((task.isComplete() && _selectedTasksId.find(selectedTask => task.getId() === selectedTask) === undefined) || 
            (!task.isComplete() && _selectedTasksId.find(selectedTask => task.getId() === selectedTask) != undefined)){
                task.setComplete();
            }
        });
    } 
   
    getTaskDetail(_taskCollection: Array<Task>, _taskId: number): Task{
        _taskCollection.forEach(task => {
            if(task.getId() === _taskId) {
                console.log("Detail: ",_taskCollection);
                return task;
            }
                return task;
        });
        return _taskCollection[0];
    }
    
}