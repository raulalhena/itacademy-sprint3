import config from './ToDoConfig.js';


async function main(){
    const ui = new config.UI();
    const data = config.Data;
    const taskManager = new config.TaskManager();
    const taskCollection = new config.TaskCollection(data);

    let again: boolean = true;
    
    do{
        try{
            const { answer, commands }  = await ui.mainMenu('Raul', taskManager.getIncomplete(data), taskManager.getAllTasks(data));
            
            switch(answer.slice(12,answer.length - 2)){
                case commands.Add:
                    const taskToAdd  = await ui.inputPrompt("input","add", "Nombre de la tarea: ");
                    taskManager.addTask(data, taskToAdd.add, data[data.length - 1].getOwnerId() + 1, 'Owner'+ data[data.length - 1].toString());
                    break;
                case commands.Update:
                    const taskToUpdate = await ui.listPrompt("list", "update", "Escoje la tarea a actualizar: ", taskManager.getAllTasks(data));
                    const newTaskTitle = await ui.inputPrompt("input", "updated", "Nuevo titulo: ");
                    taskManager.updateTask(data, taskToUpdate.update, newTaskTitle.updated);
                    break;
                case commands.Complete:
                    const taskToComplete = await ui.listPrompt("checkbox", "complete", "Marcar completada: ", taskManager.getAllTasks(data));
                    taskManager.completeTask(data,  taskToComplete.complete);
                    break;
                case commands.ShowAll:
                    taskManager.getAllTasks(data);
                    break;
                case commands.GetTask:
                    const taskToDetail = await ui.listPrompt("list", "detail", "Selecciona para ver detalles: ", taskManager.getAllTasks(data));
                    taskManager.getTaskDetail(data,  taskToDetail.complete);
                    break;
                case commands.Delete:
                    const taskToDelete = await ui.listPrompt("checkbox", "delete", "Escoje la tarea a elminar: ", taskManager.getAllTasks(data));
                    taskManager.deleteTask(data, taskToDelete.delete);
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