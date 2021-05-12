import Task from "./Task";

export default class User{
    private id: number;
    private name: string;

    public constructor(_userName: string, _data: Array<Task>){
        this.id = _data[_data.length - 1].getOwnerId() + 1;
        this.name = _userName;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}