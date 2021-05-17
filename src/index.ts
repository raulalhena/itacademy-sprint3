import config from './ToDoConfig.js';


async function main(){
    const ui = new config.UI();
    const dbManager = new config.DBManager('TodoList');
    const taskManager = new config.TaskManager(dbManager.getData(), dbManager.getConnection());
    
    let again: boolean = true;
    
    do{
        try{
            const { answer, commands }  = await ui.mainMenu(taskManager.getIncomplete(), taskManager.getAllTasks());
            
            switch(answer.slice(12,answer.length - 2)){
                case commands.Add:
                    const taskToAdd  = await ui.inputPrompt("input","add", "Nombre de la tarea: ");
                    taskManager.addTask(taskToAdd.add, new Date());
                    break;
                case commands.Update:
                    const taskToUpdate = await ui.listPrompt("list", "update", "Escoje la tarea a actualizar: ", taskManager.getAllTasks());
                    const newTaskTitle = await ui.inputPrompt("input", "updated", "Nuevo titulo: ");
                    taskManager.updateTask(taskToUpdate.update, newTaskTitle.updated);
                    break;
                case commands.Complete:
                    const taskToComplete = await ui.listPrompt("checkbox", "complete", "Marcar completada: ", taskManager.getAllTasks());
                    taskManager.completeTask(taskToComplete.complete);
                    break;
                case commands.ShowAll:
                    taskManager.getAllTasks();
                    break;
                case commands.GetTask:
                    const taskToDetail = await ui.listPrompt("list", "detail", "Selecciona para ver detalles: ", taskManager.getAllTasks());
                    taskManager.getTaskDetail(taskToDetail.complete);
                    break;
                case commands.Delete:
                    const taskToDelete = await ui.listPrompt("checkbox", "delete", "Escoje la tarea a elminar: ", taskManager.getAllTasks());
                    taskManager.deleteTask(taskToDelete.delete);
                    break;
                case commands.Quit:
                    again = false;
                    break;
            }
        }catch(e){
            ui.show(e);
        }
    }while(again);
    ui.show("Buen trabajo! Hora de descansar! ;)");
}

main();