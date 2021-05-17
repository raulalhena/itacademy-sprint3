/*
    Modulos propios de la app ToDo List
*/

import UI from "./UI.js";
import TaskManager from "./TaskManager.js";
import DBManager from './repository/DBManager.js';
import Task from './models/Task.js';

export default{
    Task,
    TaskManager,
    UI,
    DBManager
}