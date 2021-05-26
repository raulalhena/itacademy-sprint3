/*
    Modulos propios de la app ToDo List
*/

import UI from "./UI.js";
import TaskManager from "./TaskManager.js";
import JSONDAO from './repository/JSONDAO.js';
import Task from './models/Task.js';

export default{
    Task,
    TaskManager,
    UI,
    JSONDAO
}