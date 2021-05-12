import config from './ToDoConfig.js';

async function main(){
    const ui = new config.UI();
    const data = config.Data;
    const taskManager = new config.TaskManager();
    const taskCollection = new config.TaskCollection(data);
        
    let promise = await ui.mainMenu('Raul', taskManager.getIncomplete(data), taskManager.getAllTasks(data));

    switch(promise.answer.substring(12, promise.answer.length - 2)){
        case promise.commands.Add:
            taskManager.addTask(data, await ui.addPrompt("input","add", "Nombre de la tarea: "), data[data.length - 1].getOwnerId() + 1, 'Owner'+ data[data.length - 1].toString());
            promise = await ui.mainMenu('Raul', taskManager.getIncomplete(data), taskManager.getAllTasks(data));
            break;
        /*case promise.commands.Update:
            taskManager.updateTask(await ui.addPrompt("checkbox","update", "Update:"));
            break;
        case promise.commands.Complete:
            taskManager.completeTask());
            taskManager.manageTask(await ui.addPrompt("checkbox","complete", "Marcar como completa: "));
            break;
        case promise.commands.ShowAll:
            taskManager.getAllTasks();
            break;
        case promise.commands.Delete:
            taskManager.deleteTask(await ui.addPrompt("checkbox","delete", "Borrar: ")));
            taskManager.manageTask("Adios");
            taskManager.manageTask();
            break;
        case promise.commands.GetTask:
            taskManager.setTaskManager(getTask);
            break;*/
        case promise.commands.Quit:
            console.log("Buen trabajo! Hora de descansar! ;)");
            break;
    }
}

main();

