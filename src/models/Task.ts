

export default class Task{
    private id: number;
    private name: string;
    private complete: boolean = false;
    private created_at: Date;

    constructor(_id: number, _name: string, _complete: boolean, _created_at: Date){
        this.id = _id;
        this.name = _name;
        this.complete = _complete;
        this.created_at = _created_at;
    }

    getId(): number {
        return this.id;
    }

    setId(_id: number): void {
        this.id = _id;
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

    isComplete(): boolean {
        return this.complete;
    }

    setComplete(_complete: boolean): void{
        this.complete = _complete;
    }

    markComplete(): void{
        this.complete = !this.complete;
    }

    getCreatedDate(): Date {
        return this.created_at;
    }

}