import config from './ToDoConfig.js';

async function main(){
    const ui = new config.UI();
    const jsonDAO = new config.JSONDAO('TodoList.json');
    const taskManager = new config.TaskManager(jsonDAO.getData());
    
    let again: boolean = true;
    
    do{
        try{
             
            const selectedCommand: any = {
                "Añadir una nueva tarea": async function(){
                    const taskToAdd  = await ui.inputPrompt("input","add", "Nombre de la tarea: ");
                    jsonDAO.saveData(taskManager.addTask(taskToAdd.add, new Date(), null));
                },
                "Actualizar tarea": async function() {
                    const taskToUpdate = await ui.listPrompt("list", "update", "Escoje la tarea a actualizar: ", taskManager.getAllTasks());
                    const newTaskTitle = await ui.inputPrompt("input", "updated", "Nuevo titulo: ");
                    jsonDAO.saveData(taskManager.updateTask(taskToUpdate.update, newTaskTitle.updated));
                },
                "Cambiar estado": async function() {
                    const changeStatus = await ui.listPrompt("checkbox", "status", "Marcar completada: ", taskManager.getAllTasks());
                    const newStatus = await ui.statusListPrompt("list", "new", "Nuevo estado: ", changeStatus.status, taskManager.getAllTasks());
                    jsonDAO.saveData(taskManager.changeStatus(changeStatus.status, newStatus.new));
                },
                "Mostrar todas las tareas": function(){
                    ui.showListTasks(taskManager.getAllTasks());
                },
                "Mostrar detalle de tarea": async function() {
                    const taskToDetail = await ui.listPrompt("list", "detail", "Selecciona para ver detalles: ", taskManager.getAllTasks());
                    ui.showTaskDetail(taskManager.getTask(taskToDetail.detail));
                },
                "Borrar tarea": async function(){
                    const taskToDelete = await ui.listPrompt("checkbox", "delete", "Escoje la tarea a elminar: ", taskManager.getAllTasks());
                    jsonDAO.saveData(taskManager.deleteTask(taskToDelete.delete));
                },
                "Salir": () => again = false
            }

            if(taskManager.getAllTasks().length === 0){
                ui.clearScreen();
                ui.show("No hay ninguna tarea, añade una!");
                await selectedCommand["Añadir una nueva tarea"]();
            }
        
            const { answer }  = await ui.mainMenu();
            await selectedCommand[answer.slice(12,answer.length - 2)]();

        }catch(e){
            ui.show(e);
        }
    }while(again);
    ui.show("Buen trabajo! Hora de descansar! ;)");
}

main();