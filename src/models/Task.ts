

export default class Task{
    private id: number;
    private name: string;
    private complete: boolean;
    private ownerId: number;

    constructor(_id: number, _name: string, _complete: boolean){
        this.id = _id;
        this.name = _name;
        this.complete = _complete;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getCompleted(): boolean {
        return this.complete;
    }

    setOwnerId(_ownerId: number): void {
        this.ownerId = _ownerId;
    }

    getOwnerId(): number {
        return this.ownerId;
    }

}