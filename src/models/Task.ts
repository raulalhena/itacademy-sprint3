enum Status {
    pending = "Pendiente",
    executing = "En ejecución",
    finished = "Finalizada"
}

export default class Task{
    private id: number;
    private name: string;
    private created_at: Date;
    private status: string;
    private finished_at: Date | null = null;
    private userName: string;

    constructor(_id: number, _name: string, _userName: string, _created_at: Date, _status: string, _finished_at: Date | null){
        this.id = _id;
        this.name = _name;
        this.userName = _userName;
        this.created_at = _created_at;
        this.status = _status;
        this.finished_at = _finished_at;
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

    getCreatedDate(): Date {
        return this.created_at;
    }

    getFinishedDate(): Date | null{
        return this.finished_at;
    }

    setFinishedDate(_date: Date | null): void {
        this.finished_at = _date;
    }

    setStatus(_status: string): void {
        this.status = _status;
        if(_status == "Finalizada") {
            this.setFinishedDate(new Date());
        }else if(_status != "Finalizada" && this.finished_at != null){
            this.setFinishedDate(null);
        }
    }

    getStatus(): string {
        return this.status;
    }

    getUserName(): string {
        return this.userName;
    }
}