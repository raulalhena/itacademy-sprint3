import inquirer from 'inquirer';

enum Commands{
    Add = "Añadir una nueva tarea",
    Update = "Actualizar tarea",
    Complete = "Finalizar tarea",
    Toggle = "Mostrar/Esconder finalizadas",
    Purge = "Borrar tareas finalizadas",
    Quit = "Salir"
};

export default class UI{
    commands = Commands;

    async askMenu(){
        console.clear();
        const answer = await inquirer.prompt({
            type: "list",
            name: "command",
            message: "¿Qué quieres hacer?",
            choices: Object.values(this.commands)
        });
        
        console.log(answer);
    }

}