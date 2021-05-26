import Task from "../models/Task.js";
import Idao from "../interfaces/Idao.js";

export default class Context{
    private strategy: Idao;

    constructor(_strategy: Idao){
        this.strategy = _strategy;
    }

    public setStrategy(_strategy: Idao): void {
        this.strategy = _strategy;
    }

    public getData(): Array<Task>{
        return this.strategy.getData();
    }

    public saveData(_taskCollection: Array<Task>): void {
        this.strategy.saveData(_taskCollection);
    }
}