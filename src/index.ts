import config from './ToDoConfig.js';
import collectionTasks from './data.js';

async function main(){
    const ui = new config.UI();
    const addTask = new config.AddTask();
    const updateTask = new config.UpdateTask();
    const completeTask = new config.CompleteTask();
    const getTask = new config.GetTask();
    const getAllTasks = new config.GetAllTasks();
    const removeTask = new config.RemoveTask();
    const managingTasks = new config.ManagingTasks(getAllTasks);

    ui.showInitInfo('Raul', getAllTasks.getIncompleteTasks());
    getAllTasks.manageTask().forEach(task => {
        ui.show(task);
    });
        
    const promise = await ui.mainMenu();

    /*
    switch(promise.answer.substring(12, promise.answer.length - 2)){
        case promise.commands.Add:
            managingTasks.setTaskManager(addTask);
            managingTasks.manageTask(await ui.addPrompt("input","add", "Nombre de la tarea: "));
            break;
        case promise.commands.Update:
            managingTasks.setTaskManager(updateTask);
            managingTasks.manageTask("Update");
            managingTasks.manageTask(await ui.addPrompt("input","update", "Nombre de la tarea: "));
            break;
        case promise.commands.Complete:
            managingTasks.setTaskManager(completeTask);
            managingTasks.manageTask("Complete");
            managingTasks.manageTask(await ui.addPrompt("input","complete", "Nombre de la tarea: "));
            break;
        case promise.commands.ShowAll:
            managingTasks.setTaskManager(getAllTasks);
            managingTasks.manageTask(null);
            break;
        case promise.commands.Delete:
            managingTasks.setTaskManager(removeTask);
            managingTasks.manageTask("Adios");
            managingTasks.manageTask(await ui.addPrompt("input","delete", "Nombre de la tarea: "));
            break;
        case promise.commands.GetTask:
            managingTasks.setTaskManager(getTask);
            managingTasks.manageTask("Una");
            break;
        case promise.commands.Quit:
            console.log("Buen trabajo! Hora de descansar! ;)");
            break;
    }*/

    switch(promise.answer.substring(12, promise.answer.length - 2)){
        case promise.commands.Add:
            managingTasks.setTaskManager(addTask);
            managingTasks.manageTask(await ui.addPrompt("input","add", "Nombre de la tarea: "));
            break;
        case promise.commands.Update:
            managingTasks.setTaskManager(updateTask);
            managingTasks.manageTask("Update");
            managingTasks.manageTask(await ui.addPrompt("input","update", "Nombre de la tarea: "));
            break;
        case promise.commands.Complete:
            managingTasks.setTaskManager(completeTask);
            managingTasks.manageTask("Complete");
            managingTasks.manageTask(await ui.addPrompt("input","complete", "Nombre de la tarea: "));
            break;
        case promise.commands.ShowAll:
            managingTasks.setTaskManager(getAllTasks);
            managingTasks.manageTask(null);
            break;
        case promise.commands.Delete:
            managingTasks.setTaskManager(removeTask);
            managingTasks.manageTask("Adios");
            managingTasks.manageTask(await ui.addPrompt("input","delete", "Nombre de la tarea: "));
            break;
        case promise.commands.GetTask:
            managingTasks.setTaskManager(getTask);
            managingTasks.manageTask("Una");
            break;
        case promise.commands.Quit:
            console.log("Buen trabajo! Hora de descansar! ;)");
            break;
    }
}

main();

