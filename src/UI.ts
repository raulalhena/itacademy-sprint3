import inquirer, { Answers } from 'inquirer';

enum Commands{
    Add = "Añadir una nueva tarea",
    Update = "Actualizar tarea",
    Complete = "Finalizar tarea",
    ShowAll = "Mostrar todas las tareas",
    GetTask = "Mostrar una tarea",
    Delete = "Borrar tarea",
    Quit = "Salir"
};

export default class UI {
    userName = "Raul";
    commands = Commands;
   
    async mainMenu(): Promise<any>{
        //console.clear();
        const answers = await inquirer.prompt({
            type: "list",
            name: "command",
            message: "¿Qué quieres hacer?",
            choices: Object.values(this.commands)
        });

        const answer = JSON.stringify(answers);

        return {answer: answer, commands: this.commands};
    }

    showInitInfo(_userName: string, _pendingTasks: number): void{
        console.clear();
        console.log(`Tareas del usuario ${_userName}.`);
        console.log(`${_pendingTasks} tareas pendientes:`);
    }

    async addPrompt(_promptType: string, _promptName: string,_promptMessage: string): Promise<any>{
        const answers = await inquirer.prompt({
            type: _promptType,
            name: _promptName,
            message: _promptMessage
        });

        const answer = JSON.stringify(answers);
        return answer;       
    }

    show(_text: string): void{
        console.log(_text);
    }
}