import inquirer from 'inquirer';
import Task from "./models/Task.js";

enum Commands{
    Add = "Añadir una nueva tarea",
    Update = "Actualizar tarea",
    Status = "Cambiar estado",
    ShowAll = "Mostrar todas las tareas",
    GetTask = "Mostrar detalle de tarea",
    Delete = "Borrar tarea",
    Quit = "Salir"
};

enum Status {
    pending = "Pendiente",
    executing = "En ejecución",
    finished = "Finalizada"
}

export default class UI {
    private commands = Commands;
    private status = Status;
    private first: boolean = true;
   
    async mainMenu(_userName: string): Promise<any>{
        if(this.first) {
            this.clearScreen();
            this.first = false;
        }
        const answers = await inquirer.prompt({
            type: "list",
            name: "command",
            message: `${_userName} Selecciona una opción: `,
            choices: Object.values(this.commands)
        });

        const answer = JSON.stringify(answers);

        return {answer: answer};
    }

    showListTasks(_taskCollection: Array<Task>): void{
        this.clearScreen();
        this.show(`\n*Tarea`);
        _taskCollection.forEach(task => {
            this.show(`-${task.getName()} \t\t ${task.getStatus()}`);
        });
    }

    async inputPrompt(_promptType: string, _promptName: string,_promptMessage: string): Promise<any>{
        const answer = await inquirer.prompt({
            type: _promptType,
            name: _promptName,
            message: _promptMessage
        });

        return answer;       
    }

    async listPrompt(_promptType: string, _promptName: string, _promptMessage: string, _taskCollection: Array<Task>): Promise<any>{
        
        const answer = await inquirer.prompt({
            type: _promptType,
            name: _promptName,
            message: _promptMessage,
            choices: _taskCollection.map(task => ({
                name: task.getName(),
                value: task.getId()
            }))
        });

        return answer;
    }

    async statusListPrompt(_promptType: string, _promptName: string, _promptMessage: string, _selectedTaskId: number[], _taskCollection: Array<Task>): Promise<any> {
        const answer = await inquirer.prompt({
            type: _promptType,
            name: _promptName,
            message: _promptMessage,
            choices: Object.values(this.status)
        });

        return answer;
    }

    async showTaskDetail(_task: Task): Promise<any>{
        this.clearScreen();
        this.show(`Detalle tarea ${_task.getName()}:`);
        this.show(`Id: ${_task.getId()}`);
        this.show(`Nombre: ${_task.getName()}`);
        this.show(`Estado: ${_task.getStatus()}`);
        this.show(`Fecha creación: ${_task.getCreatedDate()}`);
        if(_task.getFinishedDate() != null){
            this.show(`Fecha finalización: ${_task.getFinishedDate()}`);
        }
    }

    show(_text: string): void{
        console.log(_text);
    }

    clearScreen(): void {
        console.clear();
    }
   
}