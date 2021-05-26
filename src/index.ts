import config from './ToDoConfig.js';

async function main(){
    const ui = new config.UI();
    const jsonDAO = new config.JSONDAO('TodoList.json');
    const taskManager = new config.TaskManager(jsonDAO.getData());
    
    let again: boolean = true;
    const name = await ui.inputPrompt("input", "user", "Introduce tu nombre de usuario: ");
    
    do{
        try{
             
            const selectedCommand: any = {
                "Añadir una nueva tarea": async function(user: string = "user"){
                    const taskToAdd  = await ui.inputPrompt("input","add", "Nombre de la tarea: ");
                    jsonDAO.saveData(taskManager.addTask(taskToAdd.add, new Date(), user, null));
                },
                "Actualizar tarea": async function() {
                    const taskToUpdate = await ui.listPrompt("list", "update", "Escoje la tarea a actualizar: ", taskManager.getAllTasks(name.user));
                    const newTaskTitle = await ui.inputPrompt("input", "updated", "Nuevo titulo: ");
                    jsonDAO.saveData(taskManager.updateTask(taskToUpdate.update, newTaskTitle.updated));
                },
                "Cambiar estado": async function() {
                    const changeStatus = await ui.listPrompt("checkbox", "status", "Marcar completada: ", taskManager.getAllTasks(name.user));
                    const newStatus = await ui.statusListPrompt("list", "new", "Nuevo estado: ", changeStatus.status, taskManager.getAllTasks(name.user));
                    jsonDAO.saveData(taskManager.changeStatus(changeStatus.status, newStatus.new));
                },
                "Mostrar todas las tareas": function(){
                    ui.showListTasks(taskManager.getAllTasks(name.user));
                },
                "Mostrar detalle de tarea": async function() {
                    const taskToDetail = await ui.listPrompt("list", "detail", "Selecciona para ver detalles: ", taskManager.getAllTasks(name.user));
                    ui.showTaskDetail(taskManager.getTask(taskToDetail.detail));
                },
                "Borrar tarea": async function(){
                    const taskToDelete = await ui.listPrompt("checkbox", "delete", "Escoje la tarea a elminar: ", taskManager.getAllTasks(name.user));
                    jsonDAO.saveData(taskManager.deleteTask(taskToDelete.delete));
                },
                "Salir": () => again = false
            }

            if(taskManager.getAllTasks(name.user).length === 0){
                ui.clearScreen();
                const option = await ui.inputPrompt("confirm", "confirm", "No hay tareas. 'y/yes/Enter' para añadir una o 'n' para salir");
                if(option.confirm){
                    await selectedCommand["Añadir una nueva tarea"](name.user);
                }else{
                    again = false;
                }
            }else{
                const { answer } = await ui.mainMenu(name.user);
                await selectedCommand[answer.slice(12,answer.length - 2)](name.user);
            }

        }catch(e){
            ui.show(e);
        }
    }while(again);
    ui.show("Buen trabajo! Hora de descansar! ;)");
}

main();