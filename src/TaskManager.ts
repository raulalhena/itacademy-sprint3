import Task from "./models/Task.js";

export default class TaskManager{

    private taskCollection: Array<Task> = [];

    public constructor(_taskCollection: Array<Task>){
        this.taskCollection = _taskCollection;
    }
    
    addTask(_taskName: string, _created_at: Date, _userName: string, _finished_at: Date | null): Array<Task> {
        let id: number = 0;
        if(this.taskCollection.length != 0){     
            id = this.taskCollection[this.taskCollection.length - 1].getId();
        }
        const task = new Task(
            id + 1,
            _taskName,
            _userName,
            _created_at,
            "Pendiente",
            _finished_at
        );
        this.taskCollection.push(task);
        return this.taskCollection;
    }

    updateTask(_taskId: number, _newTaskName: string): Array<Task> {
        this.taskCollection.forEach(task => {
            if(task.getId() === _taskId){
                task.setName(_newTaskName);
            }
        })
        return this.taskCollection; 
    }

    deleteTask(_selectedTaskId: number[]): Array<Task>{
        for(let i: number = this.taskCollection.length - 1; i >= 0 ; i--){
            if(_selectedTaskId.find(selectedTask => this.taskCollection[i].getId() === selectedTask)){
                delete this.taskCollection[i];
                this.taskCollection.filter(el => el);
            }
        }
        return this.taskCollection = this.taskCollection.filter(el => el != null);
    }

    getAllTasks(_userName: string): Array<Task> {        
            return this.taskCollection.filter(task => task.getUserName() == _userName);
    }

    changeStatus(_selectedTasksId: number[], _newStatus: string): Array<Task> {
        _selectedTasksId.forEach(id => {
            this.taskCollection.forEach(task => {
                if(task.getId() === id){
                    task.setStatus(_newStatus);
                }
            });
        });
        return this.taskCollection;
    } 
   
    getTask(_taskId: number): Task{
        return this.taskCollection.find(task => task.getId() == _taskId)!;
    }
    
}