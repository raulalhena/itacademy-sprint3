import Task from "./models/Task.js";

const task1 = new Task(1,'Tarea1',true,1,'Owner1');
const task2 = new Task(2,'Tarea2',false,2,'Owner2');
const task3 = new Task(3,'Tarea3',false,3,'Owner3');   

const Data =  [
    task1,
    task2,
    task3
];

export default Data;