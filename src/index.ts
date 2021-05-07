import config from './ToDoConfig.js';

const ui = new config.MyUI();
const addTask = new config.AddTask();
const updateTask = new config.UpdateTask();
const completeTask = new config.CompleteTask();
const context = new config.MyContext(addTask);

ui.askMenu();




