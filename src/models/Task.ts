

export default class Task{
    private id: number;
    private name: string;
    private complete: boolean;
    private ownerId: number;
    private ownerName: string;

    constructor(_id: number, _name: string, _complete: boolean, _ownerId: number, _ownerName: string){
        this.id = _id;
        this.name = _name;
        this.complete = _complete;
        this.ownerId = _ownerId;
        this.ownerName = _ownerName;
    }

    getId(): number {
        return this.id;
    }

    setName(_name: string): void {
        this.name = _name;
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

    setOwnerName(_ownerName: string): void {
        this.ownerName = _ownerName;
    }

    getOwnerName(): string {
        return this.ownerName;
    }

    isComplete(): boolean {
        return this.complete;
    }

    

}