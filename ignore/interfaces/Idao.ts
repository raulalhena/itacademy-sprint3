import Task from '../models/Task.js';

export default interface Idao {
    getData(): Array<Task>;

    saveData(_taskCollection: Array<Task>): void;
}