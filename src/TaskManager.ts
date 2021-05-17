import Task from "./models/Task.js";

export default class TaskManager{

    private taskCollection: Task[];
    private db: any;

    public constructor(_taskCollection: Array<Task>, _db: any ){
        this.taskCollection = _taskCollection;
        this.db = _db;
    }
    
    addTask(_taskName: string, _created_at: Date): void {
        const task = new Task(
            this.taskCollection.length + 1,
            _taskName,
            false,
            _created_at
        );
        this.taskCollection.push(task);
        this.db.set('tasks', this.taskCollection).write();
    }

    updateTask(_taskId: number, _newTaskName: string): void {
        this.taskCollection.forEach(task => {
            if(task.getId() === _taskId){
                task.setName(_newTaskName);
                this.db.set('tasks', this.taskCollection).write();
            }
        })
    }

    deleteTask(_selectedTaskId: number[]): void {
        for(let i: number = this.taskCollection.length - 1; i >=0 ; i--){
            if(_selectedTaskId.find(selectedTask => this.taskCollection[i].getId() === selectedTask)){
                delete this.taskCollection[i];
                this.taskCollection.filter(el => el);
                this.db.set('tasks', this.taskCollection).write();
            }
        }
    }

    getAllTasks(): Array<Task> {        
            return this.taskCollection;
    }

    getIncomplete(): number {
        const c = this.taskCollection.filter(task => task.isComplete() === false);
        return c.length;
    }

    completeTask(_selectedTasksId: number[]): void {
        this.taskCollection.forEach(task => {
            if((task.isComplete() && _selectedTasksId.find(selectedTask => task.getId() === selectedTask) === undefined) || 
            (!task.isComplete() && _selectedTasksId.find(selectedTask => task.getId() === selectedTask) != undefined)){
                task.markComplete();
                this.db.set('tasks', this.taskCollection).write();
            }
        });
    } 
   
    getTaskDetail(_taskId: number): Task{
        this.taskCollection.forEach(task => {
            if(task.getId() === _taskId) {
                console.log("Detail: ",this.taskCollection);
                return task;
            }
                return task;
        });
        return this.taskCollection[0];
    }
    
}