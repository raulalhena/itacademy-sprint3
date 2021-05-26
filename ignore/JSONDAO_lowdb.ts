/*


export default class JSONDAO {


    if(this.db.has("user.tasks").value()){
        let dbTasks = this.db.get("user.tasks").value();
        dbTasks.forEach((dbTask: { id: number; name: string; complete: boolean; created_at: Date }) => {
            this.taskCollection.forEach(task => {
                    const newTask = new Task(dbTask.id, dbTask.name, dbTask.complete, dbTask.created_at, dbTask.finished_at);
                    task = newTask;
            });
        });
        this.db.set('tasks', this.taskCollection).write();
    }else{
        this.db.set('tasks', this.taskCollection).write();
    }

}*/